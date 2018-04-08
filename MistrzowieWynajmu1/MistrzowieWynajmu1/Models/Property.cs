using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MistrzowieWynajmu1.Models
{
    public class Property
    {
        public int Rooms { get; set; }

        [ForeignKey("Address")]
        public int AddressId { get; set; }

        [ForeignKey("Owner")]
        public int OwnerId { get; set; }
        public string Description { get; set; }


        public virtual Owner Owner { get; set; }
        public virtual Address Address { get; set; }
        public bool IsVacant { get; set; }
        public bool one { get; set; }
        public bool two { get; set; }
        public PropertyType PropertyType;

    }
    public enum PropertyType
    {
        House,
        Flat
    }
}
