using System;
using System.Collections.Generic;

#nullable disable

namespace CoffeeShop.API.Service.Models
{
    public partial class TblUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
