import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Fixinit = lazy(() => import("../pages/Fixinit/Fixinit"));

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "/Fixinit",
    element: (
      <Suspense fallback={<Loading />}>
        <Fixinit />
      </Suspense>
    ),
  },
]);