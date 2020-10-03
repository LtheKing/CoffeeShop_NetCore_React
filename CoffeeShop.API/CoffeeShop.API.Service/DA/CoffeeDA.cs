using CoffeeShop.API.Service.BL;
using CoffeeShop.API.Service.Model;
using CoffeeShop.API.Service.ObjectHelper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.API.Service.DA
{
    public class CoffeeDA : BaseDA
    {
        public CoffeeDA()
        {

        }

        public List<CoffeeModel> GetCoffeeList()
        {
            var result = new List<CoffeeModel>();

            var query = string.Format(@"
                SELECT * FROM tbl_coffee
            ");

            var msg = "";
            var dt = ExecuteQueryWithParam(query, new List<SqlParameter>(), ref msg);
            result = DataTableHelper.DataTableToList<CoffeeModel>(dt);

            return result;
        }
    }
}
