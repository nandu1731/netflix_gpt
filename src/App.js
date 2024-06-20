// import Body from "./components/body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Browse from "./components/browse";
import Login from "./components/login";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={appRouter}>
     <Outlet />
    </RouterProvider>
  );
}

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
