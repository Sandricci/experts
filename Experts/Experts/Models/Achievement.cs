using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models
{
    /** 
     * normalized legacy "Comments" in Employee Achievements
     * (Achievement) Type = legacy Property Attribute
     */
    public class Achievement
    {
        public long Id { get; private set; }
        public string Name { get; set; }
        public string DescriptionShort { get; set; }
        public string DescriptionLong { get; set;}
        public string Information { get; set; }
        public AchievementType Type { get; set; }
        public Employee CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public Employee ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public List<Tag> Tags { get; set; }
        public byte Active { get; set; }
    }
}