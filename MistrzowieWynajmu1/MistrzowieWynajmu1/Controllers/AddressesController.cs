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
    [Route("api/Address")]
    public class AddressesController : Controller
    {
        private readonly IAddressRepository _addressRepository;

        public AddressesController(IAddressRepository addressRepository)
        {
            _addressRepository = addressRepository;
        }

        [HttpPost("[action]")]
        public IActionResult AddAddress([FromBody] Address address)
        {
            if (!ModelState.IsValid) { return BadRequest(ModelState); }
            _addressRepository.AddAddress(address);
            return new JsonResult(address.AddressId);
        }
    }
}