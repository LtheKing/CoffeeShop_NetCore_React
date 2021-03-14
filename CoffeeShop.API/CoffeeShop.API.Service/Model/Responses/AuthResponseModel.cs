namespace CoffeeShop.API.Service.Model.Responses
{
    public class AuthResponseModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public string token { get; set; }
    }

    public class RefreshToken
    {
        public string Name { get; set; }
        public string Email { get; set; }
    }
}