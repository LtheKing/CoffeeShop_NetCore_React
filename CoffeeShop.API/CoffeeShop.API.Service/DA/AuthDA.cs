using CoffeeShop.API.Service.BL;
using CoffeeShop.API.Service.Model;
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
        public bool Login(string uname, string pwd)
        {
            bool result = false;
            string query = string.Format(@"
                IF EXISTS ( SELECT * FROM tbl_User
                            WHERE UserName = '' AND [Password] = ''
                            )
                    BEGIN
                        SELECT 'Yes'
                    END
                ELSE 
                    SELECT 'No'
            ");

            var resultQuery = ExecuteScalar(query);
            if (string.Equals(resultQuery ,"Yes", StringComparison.OrdinalIgnoreCase))
                result = true;
            
            return result;
        }
    }
}