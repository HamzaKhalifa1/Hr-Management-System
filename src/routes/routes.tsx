import { RouteObject } from "react-router-dom"; 
import Layout from "../pages/layout/Layout";
import AllEmployeesPage from "../pages/AllEmployeesPage";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children:[
        {
          index: true, element: <div>Home</div>
        },
        {
          path: "/all-employees", element: <AllEmployeesPage />
        }
    ]
  },
];

export default routes;
