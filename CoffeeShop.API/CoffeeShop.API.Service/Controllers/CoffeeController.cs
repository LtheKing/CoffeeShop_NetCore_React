using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeShop.API.Service.BL;
using CoffeeShop.API.Service.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CoffeeShop.API.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoffeeController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public CoffeeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var response = new GenericResponseModel<List<CoffeeModel>>();
            var bl = new CoffeeBL();
            response = bl.GetCoffeeList();

            return Ok(response);

        }
    }
}
