import HomePage from './routes/homePage/HomePage'
import {Layout, RequireAuth } from './routes/layout/Layout';
import ListPage from './routes/listPage/ListPage';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import SinglePage from './routes/singlePage/SinglePage';
import ProfilePage from './routes/profilePage/ProfilePage';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import ProfileUpdatePage from './routes/profileUpdatePage/ProfileUpdatePage';
import NewPostPage from './routes/newPostPage/NewPostPage';
import { singlePageLoader } from './lib/loaders';


function App() {

  const router = createBrowserRouter([
    {
      path: "/", 
      element:<Layout/>, 
      children:[
        {
          path: "/",
          element:<HomePage/>
        },
        {
          path: "/register",
          element:<Register/>
        },
        {
          path: "/login",
          element:<Login/>
        },
        {
          path: "/list",
          element:<ListPage/>
        },
        {
          path: "/:id",
          element:<SinglePage/>,
          loader: singlePageLoader,
        }
      ]
    },
    {
      path:'/',
      element:<RequireAuth/>,
      children:[
        {
          path: "/profile",
          element:<ProfilePage/>
        },
        {
          path: "/profile/update",
          element:<ProfileUpdatePage/>
        },
        {
          path: "/add",
          element:<NewPostPage/>
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App