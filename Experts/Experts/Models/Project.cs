using Experts.Models.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models
{
    /** 
     * for project related experiences
     * experiences based on number of projects
     * e.g. UX Designer
     */
    public class Project
    {
        public long Id { get; private set; }
        public string Name { get; set; }
        public ProjectStatus Status { get; set; }
        public Customer Customer { get; set; }
        public Employee ProjectManager { get; set; }
        public Employee CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public Employee ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public byte Active { get; set; }
    }
}