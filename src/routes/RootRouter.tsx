import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { Layout } from "../layouts/Layout";
import { Registration } from "../pages/auth/Registration";
import LoginLayout from "../layouts/LoginLayout";
import { Login } from "../pages/auth/Login";

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
    {
      children: [
        {
          path: "/registration",
          element: (
            <LoginLayout isLogin={"Registration"}>
              <Registration />
            </LoginLayout>
          ),
        },
        {
          path: "/login",
          element: (
            <LoginLayout signIn isLogin={"Log In with e-mail"}>
              <Login />
            </LoginLayout>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};
export default RootRouter;
