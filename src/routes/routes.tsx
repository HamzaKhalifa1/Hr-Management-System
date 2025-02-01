import { RouteObject } from "react-router-dom"; 
import Layout from "../Pages/layout/Layout";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children:[
        {
            index: true, element: <div>Home</div>
        }
    ]
  },
];

export default routes;
