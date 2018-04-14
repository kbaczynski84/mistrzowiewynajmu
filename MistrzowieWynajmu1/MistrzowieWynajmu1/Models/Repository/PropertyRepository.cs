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

        PropertyRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public List<Property> GetAll()
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
