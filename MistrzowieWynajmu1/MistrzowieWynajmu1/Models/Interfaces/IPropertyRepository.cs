using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MistrzowieWynajmu1.Models.Interfaces
{
    public interface IPropertyRepository
    {
        List<Property> GetAll();
        Property GetProperty(int propertyId);
    }
}
