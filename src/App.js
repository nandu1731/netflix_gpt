// import Body from "./components/body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Browse from "./components/browse";
import Body from "./components/body";
import { RouterProvider } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/store";

function App() {

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </Provider>
  );
}

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
