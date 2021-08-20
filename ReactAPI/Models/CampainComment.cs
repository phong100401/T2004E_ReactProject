using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Models
{
    public partial class CampainComment
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public string Rating { get; set; }
        public DateTime CreatedAt { get; set; }
        public int CampainId { get; set; }
        public int UserId { get; set; }

        public virtual Campain Campain { get; set; }
        public virtual User User { get; set; }
    }
}
