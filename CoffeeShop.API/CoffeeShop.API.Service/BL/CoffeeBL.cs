using CoffeeShop.API.Service.DA;
using CoffeeShop.API.Service.Model;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.API.Service.BL
{
    public class CoffeeBL : BaseBL
    {
        //private readonly IConfiguration _configuration;

        public CoffeeBL()
        {
            //_configuration = configuration;
        }

        public GenericResponseModel<List<CoffeeModel>> GetCoffeeList()
        {
            var result = new GenericResponseModel<List<CoffeeModel>>();

            try
            {
                result.Value = new CoffeeDA().GetCoffeeList();
                result.Status = true;
            }
            catch (Exception ex)
            {
                result.ErrorMessage = ex.ToString();
            }

            return result;
        }
    }
}
