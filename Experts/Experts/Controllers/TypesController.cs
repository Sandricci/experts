using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Experts.Controllers
{
    public class TypesController : Controller
    {
        // GET: Types
        public ActionResult Index()
        {
            return View();
        }

        // GET: Types/Details
        public ActionResult Details()
        {
            return View();
        }

        // GET: Types/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Types/Create
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

        // GET: Types/Edit
        public ActionResult Edit()
        {
            return View();
        }

        // POST: Types/Edit/5
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

        // GET: Types/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Types/Delete/5
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
