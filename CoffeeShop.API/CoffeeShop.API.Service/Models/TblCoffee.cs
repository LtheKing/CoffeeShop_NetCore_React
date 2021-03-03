using System;
using System.Collections.Generic;

#nullable disable

namespace CoffeeShop.API.Service.Models
{
    public partial class TblCoffee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? Price { get; set; }
        public string Size { get; set; }
    }
}
