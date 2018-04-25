using MistrzowieWynajmu1.Models.Database;
using MistrzowieWynajmu1.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MistrzowieWynajmu1.Models.Repository
{
    public class OwnerRepository : IOwnerRepository
    {
        private readonly DatabaseContext _databaseContext;
        public OwnerRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;

        }
        public int AddOwner(Owner owner)
        {
            if (owner == null) { throw new Exception("Owner object cannot be null."); }
            _databaseContext.Owners.Add(owner);
            _databaseContext.SaveChanges();
            return owner.OwnerId;
        }

        public List<Owner> GetAll()
        {
            return _databaseContext.Owners.ToList();
        }

        public Owner GetOwner(int ownerId)
        {
            if (ownerId <= 0) { throw new Exception("Id cannot be less then 0."); }
           return  _databaseContext.Owners.FirstOrDefault(o => o.OwnerId == ownerId);
        }

        public int UpdateOwner(Owner owner)
        {
            if (owner == null)
            {
                throw new Exception("Object owner cannot be null.");
            }
            _databaseContext.Owners.Update(owner);
            _databaseContext.SaveChanges();
            return owner.OwnerId;
        }
    }
}
