import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home,{fetchUser} from "./routes/home.jsx";
import MainLayout from "./layouts/mainLayout.jsx";
import About from "./routes/about.jsx";
import User from "./routes/user.jsx";

// const routes = createBrowserRouter([
//     {
//         path: '/',
//         element: <MainLayout/>,
//         children:[
//             {
//                 path: '/',
//                 element: <Home/>
//             },
//             {
//                 path: '/about',
//                 element: <About/>
//             },
//             {
//                 path: '/user/:id',
//                 element: <User/>
//             },
//         ]
//     }
// ])

const routes = createBrowserRouter(createRoutesFromElements(
    <Route element={<MainLayout/>} path='/'>
        <Route element={<Home/>} path='/' loader={fetchUser}/>
        <Route element={<About/>} path='/about' />
        <Route element={<User/>} path='/user/:id' />
    </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={routes} />
  </StrictMode>,
)
