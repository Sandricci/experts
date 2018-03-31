using Experts.Models.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models
{
    /** 
     * equivalent of legacy Category" of Achievements
     * examples: Hard Skill, Soft Skill, Experience, ...
     */
    public class AchievementCategory
    {
        public long Id { get; private set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public AchievementUnit Unit { get; set; }
        public Employee CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public Employee ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public byte Active { get; set; }
    }
}