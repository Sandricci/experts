using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Experts.Controllers
{
    public class AchievablesController : Controller
    {
        // GET: Achievables
        public ActionResult Index()
        {
            return View();
        }

        // GET: Achievables/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Achievables/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Achievables/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Achievables/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Achievables/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Achievables/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Achievables/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
