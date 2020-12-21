using CoffeeShop.API.Service.BL;
using CoffeeShop.API.Service.Model;
using CoffeeShop.API.Service.Model.Requests;
using CoffeeShop.API.Service.Model.Responses;
using CoffeeShop.API.Service.ObjectHelper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.API.Service.DA
{
    public class AuthDA : BaseDA
    {
        public bool Login(AuthRequestModel login)
        {
            bool result = false;
            string query = string.Format(@"
                IF EXISTS ( SELECT * FROM tbl_User
                            WHERE UserName = '{0}' AND [Password] = '{1}'
                            )
                    BEGIN
                        SELECT 'Yes'
                    END
                ELSE 
                    SELECT 'No'
            ", login.UserName, login.Password);

            var resultQuery = ExecuteScalar(query);
            if (string.Equals(resultQuery ,"Yes", StringComparison.OrdinalIgnoreCase))
                result = true;
            
            return result;
        }

        public AuthResponseModel GetDataUser(string uName, ref string msg)   
        {
            var query = string.Format(@"
                SELECT * FROM tbl_User WHERE Username = '{0}'
            ", uName);
            var dt = ExecuteQueryWithParam(query, new List<SqlParameter>(), ref msg);
            
            var result = (from rw in dt.AsEnumerable()
                select new AuthResponseModel{
                    Name = Convert.ToString(rw["Name"]),  
                    Role = Convert.ToString(rw["Role"]),
                    Email = Convert.ToString(rw["Email"])
                }
            ).FirstOrDefault();

            return result;
        }
    }
}