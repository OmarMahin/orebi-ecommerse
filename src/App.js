import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
