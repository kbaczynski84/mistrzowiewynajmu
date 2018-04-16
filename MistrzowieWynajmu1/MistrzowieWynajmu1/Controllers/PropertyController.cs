using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MistrzowieWynajmu1.Models;
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
        public IActionResult GetAllProperties() 
        {
            return new JsonResult(_propertyRepository.GetAllProperties());
        }

        [HttpPost("[action]")]
        public void AddProperty([FromBody]Property property)
        {
            _propertyRepository.AddProperty(property);
            
        }
        public void GetProperty(int propertyId)
        {
             _propertyRepository.GetProperty(propertyId);
        }
        public void EditProperty(Property property)
        {
             _propertyRepository.EditProperty(property);
        }
        public void DeleteProperty(int propertyId)
        {
            _propertyRepository.DeleteProperty(propertyId);
           
        }

    }
}