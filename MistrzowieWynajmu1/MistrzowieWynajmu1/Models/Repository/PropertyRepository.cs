using MistrzowieWynajmu1.Models.Database;
using MistrzowieWynajmu1.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MistrzowieWynajmu1.Models.Repository
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly DatabaseContext _databaseContext;

       public PropertyRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void AddProperty(Property property)
        {
            _databaseContext.Properties.Add(property);
        }

        public void DeleteProperty(int propertyId)
        {
            Property property = GetProperty(propertyId);
            _databaseContext.Properties.Remove(property);
        }

        public void EditProperty(Property property)
        {
            Property existingProperty = GetProperty(property.PropertyId);
            _databaseContext.Properties.Remove(existingProperty);         
            _databaseContext.Properties.Add(property);
        }

        
        public List<Property> GetAllProperties()
        {
            return _databaseContext.Properties.ToList();
        }

        public Property GetProperty(int propertyId)
        {
            return _databaseContext.Properties.
                Where(p => p.PropertyId == propertyId).
                FirstOrDefault();
        }
    }
}
