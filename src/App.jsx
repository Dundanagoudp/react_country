import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Applayout } from "./components/Layout/Applayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";

const router =createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"country",
        element:<Country/>,
      },
      {
        path:"country/:id",
        element:<CountryDetails/>,
      },
      {
        path:"contact",
        element:<Contact/>,
      }
    ],
  }
  
]);

export const App =()=>{
  return <RouterProvider router={router}>

  </RouterProvider>
};

export default App;