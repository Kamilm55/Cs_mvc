using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Online_Learning_Management_Sysytem_MVC
{
    public class User
    {
        public long? UserID { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string Photo { get; set; }

        public User()
        {
            
        }
    }
}
