using System;
using System.Collections.Generic;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using CoffeeShop.API.Service.BL;
using CoffeeShop.API.Service.Model;
using CoffeeShop.API.Service.Model.Requests;
using CoffeeShop.API.Service.Model.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace CoffeeShop.API.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("Login")]
        [AllowAnonymous]
        public IActionResult Login([FromBody] AuthRequestModel login)
        {
            var response = new GenericResponseModel<AuthResponseModel>();
            var user = AuthenticateUser(login);

            if (user != null)
            {
                user.token = GenerateJSONWebToken(user);
                response.Value = user;
                response.Status = true;
                return Ok(response);
            }

            return Unauthorized(response);
        }

        private AuthResponseModel AuthenticateUser(AuthRequestModel login)
        {
            AuthResponseModel user = null;
            var authBL = new AuthBL();
            var authenticateResult = authBL.AuthenticateUser(login);

            if (!authenticateResult.Status)
            {
                return user;
            }

            user = authenticateResult.Value;
            return user;
        }

        private string GenerateJSONWebToken(AuthResponseModel userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.Name),
                new Claim(JwtRegisteredClaimNames.Email, userInfo.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                _configuration["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private string RefreshToken(RefreshToken userInfo) 
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.Name),
                new Claim(JwtRegisteredClaimNames.Email, userInfo.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                _configuration["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpGet("TestAuth")]
        [AllowAnonymous]
        public IActionResult TestAuthApi() 
        {
            return Ok("auth succeed");
        }
    }
}