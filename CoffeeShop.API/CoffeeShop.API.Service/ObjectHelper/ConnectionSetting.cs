using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.API.Service.ObjectHelper
{
    public class ConnectionSetting
    {
        public string conSql { get; set; }

        public ConnectionSetting()
        {
            var configuration = GetConfiguration();
            conSql = configuration.GetSection("ConnectionStrings").GetSection("CoffeeShopDB").Value;
        }

        public IConfigurationRoot GetConfiguration()
        {
            var builder = new ConfigurationBuilder().SetBasePath(
                Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json",
                    optional: true, reloadOnChange: true);
            return builder.Build();
        }
    }
}
