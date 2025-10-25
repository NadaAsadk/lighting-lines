
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/About", element: <About /> },
        
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
