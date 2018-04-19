using MistrzowieWynajmu1.Models.Database;
using MistrzowieWynajmu1.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MistrzowieWynajmu1.Models.Repository
{
    public class AddressRepository : IAddressRepository
    {
        private readonly DatabaseContext _databaseContext;

        public AddressRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }
        public int AddAddress(Address address)
        {
            if (address == null) { throw new Exception("Address object cannot be null."); }
            _databaseContext.Addresses.Add(address);
            _databaseContext.SaveChanges();
            return address.AddressId;
        }

        public Address GetAddress(int addressId)
        {
            if(addressId <= 0) { throw new Exception("Id cannot be less then 0."); }
            return _databaseContext.Addresses.FirstOrDefault(a => a.AddressId == addressId);
        }
    }
}
