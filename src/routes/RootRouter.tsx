import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { Layout } from "../layouts/Layout";

const RootRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
export default RootRouter;
