using System.IO;
using Microsoft.Extensions.Configuration;

namespace CoffeeShop.API.Service.ObjectHelper
{
    public class DirectorySettings
    {
        public string PathDocument { get; set; }

        public DirectorySettings()
        {
            var configuration = GetConfiguration();
            PathDocument = configuration.GetSection("CoffeeShop:Directory").GetSection("PathDocument").Value;
        }

        public IConfigurationRoot GetConfiguration()
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
            return builder.Build();
        }
    }
}