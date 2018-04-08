using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MistrzowieWynajmu1.Models
{
    public class Owner
    {
        public int OwnerId { get; set; }
        public string Name { get; set; }
        public virtual Property Property { get; set; }
        public string PhoneNumber { get; set; }
    }
}
