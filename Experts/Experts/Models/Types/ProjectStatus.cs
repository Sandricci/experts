using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models.Types
{
    /** 
     * ProjectStatus
     */
    public enum ProjectStatus
    {
        Created = 1,
        InProgress = 2,
        Approved = 3,
        Finalized = 4
    }
}