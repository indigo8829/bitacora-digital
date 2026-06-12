import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Index from "../pages/index/Index.jsx";
import MiHistoria from "../pages/mihistoria/MiHistoria.jsx";
import Bitacora from "../pages/bitacora/Bitacora.jsx";
import Hablemos from "../pages/hablemos/Hablemos.jsx";
import PostDetail from "../pages/bitacora/components/PostDetail.jsx";
import Proyectos from "../pages/proyectos/Proyectos.jsx";
import AdminPost from "../pages/admin/AdminPost.jsx";

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
            },
            {
                path:'admin',
                element:<AdminPost/>
            },
        ]
    }
])

export default router