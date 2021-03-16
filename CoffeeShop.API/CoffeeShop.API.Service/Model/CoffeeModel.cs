using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace CoffeeShop.API.Service.Model
{
    public class CoffeeModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Size { get; set; }
        public IFormFile Picture { get; set; }
        public string PictureName { get; set; }
    }
}
