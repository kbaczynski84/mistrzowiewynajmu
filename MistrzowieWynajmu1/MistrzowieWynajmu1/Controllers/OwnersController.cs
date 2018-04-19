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
    [Route("api/Owners")]
    public class OwnersController : Controller
    {
        private readonly IOwnerRepository _ownerRepository;

        public OwnersController(IOwnerRepository ownerRepository)
        {
            _ownerRepository = ownerRepository;
        }

        [HttpPost("[action]")]
        public IActionResult AddOwner([FromBody] Owner owner)
        {
            if (!ModelState.IsValid) { return BadRequest(ModelState); }

            _ownerRepository.AddOwner(owner);
            return new JsonResult(owner.OwnerId);
        }
    }
}