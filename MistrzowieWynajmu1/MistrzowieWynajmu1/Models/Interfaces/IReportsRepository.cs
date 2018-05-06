using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MistrzowieWynajmu.Models.Interfaces
{
    public interface IReportsRepository
    {
        TypeRatioReport GetTypesRatio();
        List<PropertyPerCityRatioReport> GetPropertiesPerCity();
    }
}
