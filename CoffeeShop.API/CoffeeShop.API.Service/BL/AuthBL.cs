using CoffeeShop.API.Service.DA;
using CoffeeShop.API.Service.Model;
using CoffeeShop.API.Service.Model.Requests;
using CoffeeShop.API.Service.Model.Responses;
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

        public GenericResponseModel<AuthResponseModel> AuthenticateUser(AuthRequestModel login)
        {
            var response = new GenericResponseModel<AuthResponseModel>();

            try
            {
                var da = new AuthDA();
                var resultLogin = da.Login(login);
                if (!resultLogin)
                {
                    response.ErrorMessage = "User didn't Exists !";
                    return response;
                }

                var msg = string.Empty;
                response.Value = da.GetDataUser(login.UserName, ref msg);
                response.Status = true;
            }
            catch (Exception ex)
            {
                response.ErrorMessage = ex.ToString();
            }

            return response;
        }

    }
}
