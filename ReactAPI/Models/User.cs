using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Models
{
    public partial class User
    {
        public User()
        {
            CampainComments = new HashSet<CampainComment>();
            EventComments = new HashSet<EventComment>();
        }

        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Role { get; set; }

        public virtual ICollection<CampainComment> CampainComments { get; set; }
        public virtual ICollection<EventComment> EventComments { get; set; }
    }
}
