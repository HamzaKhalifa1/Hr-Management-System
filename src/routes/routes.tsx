import { RouteObject } from "react-router-dom"; 
import Layout from "../component/layout/Layout";
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
