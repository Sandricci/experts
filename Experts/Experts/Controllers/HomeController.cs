using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Experts.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Index";
            return View();
        }

        public ActionResult CoreData()
        {
            ViewBag.Message = "Core data";
            return View();
        }

        public ActionResult Achievements()
        {
            ViewBag.Message = "Achievements";

            return View();
        }

        public ActionResult Roles()
        {
            ViewBag.Message = "Roles";

            return View();
        }
        
    }
}