import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Settings from "../pages/Settings";
import DetailUser from "../pages/Users/DetailUser";
import User from "../pages/Users/User";

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
  {
      path: "/user",
      component: User,
    },
  {
    path: "/user/:id",
    component: DetailUser,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
