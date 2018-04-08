using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MistrzowieWynajmu1.Models
{
    public class Address
    {
        public int AddressId { get; set; }
        public string PropertyAddress { get; set; }
        public virtual Owner Owner { get; set; }
    }
}
