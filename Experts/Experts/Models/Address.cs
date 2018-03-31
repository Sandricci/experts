using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models
{
    public class Address
    {
        public long Id { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public int Zip { get; set; }
    }
}