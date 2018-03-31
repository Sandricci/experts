using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models
{
    /** 
     * employees are organized in teams
     * each team has one Teamlead
     */
    public class Team
    {
        public long Id { get; private set; }
        public string Name { get; set; }
        public Employee Lead { get; set; }
        public Employee CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public Employee ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public byte Active { get; set; }
    }
}