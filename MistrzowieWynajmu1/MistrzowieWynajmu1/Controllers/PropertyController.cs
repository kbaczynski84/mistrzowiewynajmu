using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MistrzowieWynajmu1.Models.Interfaces;

namespace MistrzowieWynajmu1.Controllers
{
    [Produces("application/json")]
    [Route("api/Property")]
    public class PropertyController : Controller
    {
        private readonly IPropertyRepository _propertyRepository;

        public PropertyController(IPropertyRepository propertyRepository)
        {
            _propertyRepository = propertyRepository;
        }

        [HttpGet("[action]")]
        public IActionResult GetProperties()
        {
            return new JsonResult(_propertyRepository.GetAll());
        }
    }
}