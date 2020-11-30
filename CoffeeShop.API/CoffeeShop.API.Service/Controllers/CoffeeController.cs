using System;
using System.Collections.Generic;
using System.Data;
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

        [HttpGet("GetById/{id}")]
        public IActionResult GetByID(long id) 
        {   
            var response = new GenericResponseModel<CoffeeModel>();
            var bl = new CoffeeBL();
            response = bl.GetCoffeeByID(id);

            return Ok(response);
        }

        [HttpPost]
        public IActionResult Insert([FromBody] CoffeeModel cm) {
            var response = new GenericResponseModel<string>();
            var bl = new CoffeeBL();
            response = bl.InsertCoffee(cm);

            if  (response.Status == false) {
                return BadRequest(response);
            }

            return Ok(response);
        }

        [HttpPut("UpdateCoffee")]
        public IActionResult Update([FromBody] CoffeeModel cm){
            var response = new GenericResponseModel<string>();

            var bl = new CoffeeBL();
            response = bl.UpdateCoffee(cm);

            if (response.Status == false)
            {
                return BadRequest(response);
            }

            return Ok(response);
        }

        [HttpDelete("DeleteCoffee/{id}")]
        public IActionResult Delete(long id)
        {
            var response = new GenericResponseModel<string>();

            var bl = new CoffeeBL();
            response = bl.DeleteCoffee(id);

            if (response.Status == false)
            {
                return BadRequest(response);
            }

            return Ok(response);
        }
    }
}
