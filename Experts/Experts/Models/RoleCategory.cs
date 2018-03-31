using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models
{
    /** 
     * categorization of roles (see screenshot Developer & Others)
     * example: Developer
     */
    public class RoleCategory
    {
        public long Id { get; private set; }
        public string Name { get; set; }
        public Employee CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public Employee ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public byte Active { get; set; }
    }
}