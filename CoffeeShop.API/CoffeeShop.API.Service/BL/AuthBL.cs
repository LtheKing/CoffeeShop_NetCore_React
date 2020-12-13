using CoffeeShop.API.Service.DA;
using CoffeeShop.API.Service.Model;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.API.Service.BL
{
	public class AuthBL : BaseBL
    {

        public GenericResponseModel<string> GetCoffeeList()
        {
            var result = new GenericResponseModel<string>();

            try
            {
                var da = new CoffeeDA();
                // result.Value = da.Login();
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
