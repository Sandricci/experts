using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models
{
    /** 
     * introduce tagging feature (suggested by Veronika)
     * allows tagging of Achievements (Master Data)
     * for better search experience
     */
    public class Tag
    {
        public long Id { get; private set; }
        public string Name { get; set; }
        public byte Active { get; set; }
        public Employee CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public Employee ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}