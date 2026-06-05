import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import MiHistoria from "../pages/MiHistoria.jsx";
import Bitacora from "../pages/Bitacora.jsx";
import Hablemos from "../pages/Hablemos.jsx";

const router = createBrowserRouter ([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'mihistoria',
                element:<MiHistoria/>
            },
            {
                path:'bitacora',
                element:<Bitacora/>
            },
            {
                path:'hablemos',
                element:<Hablemos/>
            }
        ]
    }
])

export default router