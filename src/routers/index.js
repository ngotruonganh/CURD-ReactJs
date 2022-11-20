import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Settings from "../pages/Settings";

const publicRoutes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/transactions",
    component: Transactions,
  },
  {
    path: "/settings",
    component: Settings,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
