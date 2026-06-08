import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Index from "../pages/index/Index.jsx";
import MiHistoria from "../pages/mihistoria/MiHistoria.jsx";
import Bitacora from "../pages/bitacora/Bitacora.jsx";
import Hablemos from "../pages/Hablemos.jsx";
import PostDetail from "../pages/bitacora/components/PostDetail.jsx";
import Proyectos from "../pages/Proyectos.jsx";

const router = createBrowserRouter ([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Index/>
            },
            {
                path:'mihistoria',
                element:<MiHistoria/>
            },
            {
                path:'proyectos',
                element:<Proyectos/>
            },
            {
                path:'bitacora',
                element:<Bitacora/>,
                children: [
                    {
                        path: ':idPost',
                        element:<PostDetail/>
                    }
                ]
            },
            {
                path:'hablemos',
                element:<Hablemos/>
            }
        ]
    }
])

export default router