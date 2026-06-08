import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Index from "../pages/Index.jsx";
import MiHistoria from "../pages/MiHistoria.jsx";
import Bitacora from "../pages/Bitacora.jsx";
import Hablemos from "../pages/Hablemos.jsx";
import PostDetail from "../components/PostDetail.jsx";
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