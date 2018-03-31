using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models
{
    /** 
     * define minimum Amount per Achievement per Role
     * for feature "Achivements towards Role"
     * example: Role = Dev Junior, Achievement = Good Feedback, Expected = 3
     */
    public class RoleAchievement
    {
        public long Id { get; private set; }
        public Achievement Achievement { get; set; }
        public Role Role { get; set; }
        public decimal Expected { get; set; }
        public string Information { get; set; }
        public Employee CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public Employee ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public byte Active { get; set; }
    }
}