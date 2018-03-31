using Experts.Models.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experts.Models
{
    /** 
     * employee profile
     */
    public class Employee
    {
        #region basic identity
        public long Id { private set; get; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string PlaceOfBirth { get; set; }
        public GenderType Gender { get; set; }
        public long Ssn { get; set; }
        #endregion

        #region communications
        public Address Address { get; set; }
        public string Email { get; set; }
        public string PhoneBusiness { get; set; }
        public string PhoneBusinessMobile { get; set; }
        public string PhonePrivate { get; set; }
        #endregion

        #region HR information
        public DateTime BeginEmployment { get; set; }
        public DateTime EndEmployment { get; set; }
        public EmployeeGroup Group { get; set; }
        public JobGrade JobGrading { get; set; }
        public decimal Salary { get; set; }
        public Boolean SoleEarnerDeduction { get; set; }
        public CommutersAllowance CommutersAllowance { get; set; }

        #endregion

        #region organization
        public List<Team> Teams { get; set; }
        public Employee TeamLead { get; set; }
        #endregion

        #region system
        public string UserName { get; set; }
        public List<Scope> Scopes { get; set; }
        public Employee CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public Employee ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public byte Active { get; set; }
        #endregion
    }
}