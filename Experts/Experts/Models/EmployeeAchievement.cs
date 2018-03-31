using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models
{
    /** 
     * connects achievement with employee
     * total experience = sum(Amount) grouped by Employee, Achievement
     */
    public class EmployeeAchievement
    {
        public long Id { get; private set; }
        public Employee Employee { get; set; }
        public Achievement Achievement { get; set; }
        public decimal Amount { get; set; }
        public string Information { get; set; }
        public Project Project { get; set; }
        public Boolean Approved { get; set; }
        public Employee ApprovedBy { get; set; }
        public DateTime ApprovedAt { get; set; }
        public DateTime CreatedAt { get; set; }
        public Employee CreatedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public Employee ModifiedBy { get; set; }
        public byte Active { get; set; }
    }
}