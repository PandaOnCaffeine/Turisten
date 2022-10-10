using Microsoft.AspNetCore.Mvc;

namespace Turisten.Controllers
{
    public class PizzaController : Controller
    {
        public ActionResult Events()
        {
            return View();
        }
    }
}
