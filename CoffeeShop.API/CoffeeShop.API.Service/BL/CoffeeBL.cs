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

        public GenericResponseModel<CoffeeModel> GetCoffeeByID(long id)
        {
            var result = new GenericResponseModel<CoffeeModel>();

            try
            {
                var data = new CoffeeDA().GetCoffeeByID(id);

                List<CoffeeModel> items = data.AsEnumerable().Select(a => new CoffeeModel
                {
                    ID = a.Field<int>("ID"),
                    Name = a.Field<string>("Name"),
                    Price = a.Field<int>("Price"),
                    Size = a.Field<string>("Size")
                }).ToList();

                result.Value = items[0];
                result.Status = true;
            }
            catch (Exception ex)
            {
                result.ErrorMessage = ex.ToString();
            }

            return result;
        }
        public GenericResponseModel<string> InsertCoffee(CoffeeModel cm)
        {
            var result = new GenericResponseModel<string>();

            try
            {
                result.Value = new CoffeeDA().InsertCoffee(cm);

                if (result.Value != "COMPLETE")
                {
                    result.ErrorMessage = "Failed Insert Coffee Data";
                    result.WarningMessage = result.Value;
                    return result;
                }

                result.Status = true;
            }
            catch (Exception ex)
            {
                result.ErrorMessage = ex.ToString();
            }

            return result;
        }

        public GenericResponseModel<string> UpdateCoffee(CoffeeModel cm)
        {
            var result = new GenericResponseModel<string>();

            try
            {
                result.Value = new CoffeeDA().UpdateCoffee(cm);

                if (result.Value != "COMPLETE")
                {
                    result.ErrorMessage = "Failed Update Coffee Data";
                    result.WarningMessage = result.Value;
                    return result;
                }

                result.Status = true;
            }
            catch (Exception ex)
            {
                result.ErrorMessage = ex.ToString();
            }

            return result;
        }

        public GenericResponseModel<string> DeleteCoffee(long id)
        {
            var result = new GenericResponseModel<string>();

            try
            {
                result.Value = new CoffeeDA().DeleteCoffee(id);

                if (result.Value != "COMPLETE")
                {
                    result.ErrorMessage = "Failed Delete Coffee Data";
                    result.WarningMessage = result.Value;
                    return result;
                }

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
