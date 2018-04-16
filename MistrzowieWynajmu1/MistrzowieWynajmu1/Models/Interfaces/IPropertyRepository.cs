using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MistrzowieWynajmu1.Models.Interfaces
{
    public interface IPropertyRepository
    {
        List<Property> GetAllProperties();
        Property GetProperty(int propertyId);
        
        void AddProperty(Property property);
        
        void EditProperty(Property property);
        void DeleteProperty(int propertyId);
    }
}
