using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MistrzowieWynajmu.Models.Interfaces;

namespace MistrzowieWynajmu.Controllers
{
    [Produces("application/json")]
    [Route("api/Reports")]
    public class ReportsController : Controller
    {
        private readonly IReportsRepository _reportsRepository;
        public ReportsController(IReportsRepository reportsRepository)
        {
            _reportsRepository = reportsRepository;
        }

        [HttpGet("[action]")]
        public IActionResult GetTypesRatioReport()
        {
            return new JsonResult(_reportsRepository.GetTypesRatio());
        }

        [HttpGet("[action]")]
        public IActionResult GetPropertiesPerCityReport()
        {
            return new JsonResult(_reportsRepository.GetPropertiesPerCity());
        }
    }
}