import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import MiHistoria from "../pages/MiHistoria.jsx";
import Bitacora from "../pages/Bitacora.jsx";
import Hablemos from "../pages/Hablemos.jsx";
import PostDetail from "../components/PostDetail.jsx";

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