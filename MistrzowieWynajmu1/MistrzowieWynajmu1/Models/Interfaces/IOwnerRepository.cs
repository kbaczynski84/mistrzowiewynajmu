﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MistrzowieWynajmu1.Models.Interfaces
{
    public interface IOwnerRepository
    {
        int AddOwner(Owner owner);
        Owner GetOwner(int ownerId);
        int UpdateOwner(Owner owner);
        List<Owner> GetAll();
    }
}
