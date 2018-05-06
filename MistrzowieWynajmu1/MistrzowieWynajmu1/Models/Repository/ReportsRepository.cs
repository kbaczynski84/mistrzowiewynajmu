using MistrzowieWynajmu1.Models.Database;
using MistrzowieWynajmu1.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MistrzowieWynajmu1.Models.Repository
{
    public class ReportsRepository  : IReportsRepository
    {
        private readonly DatabaseContext _databaseContext;

        public ReportsRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public List<PropertyPerCityRatioReport> GetPropertiesPerCity()
        {
            return _databaseContext.Properties.GroupBy(key => key.Address.City).Select(o => new PropertyPerCityRatioReport
            {
                City = o.Key,
                Amount = o.Where(s => s.Address.City == o.Key).Count()
            }).ToList();
        }

        public TypeRatioReport GetTypesRatio()
        {
            return new TypeRatioReport()
            {
                Flats = _databaseContext.Properties.Where(p => p.Type == PropertyType.Flat).Count(),
                Houses = _databaseContext.Properties.Where(p => p.Type == PropertyType.House).Count()
            };
        }
    }
}
