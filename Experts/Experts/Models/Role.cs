using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models
{
    /** 
     * according to CoreData - Employee Role in company
     * example: Dev Junior
     */
    public class Role
    {
        public long Id { get; private set; }
        public string Name { get; set; }
        public RoleCategory Category { get; set; }
        public byte Active { get; set; }
    }
}