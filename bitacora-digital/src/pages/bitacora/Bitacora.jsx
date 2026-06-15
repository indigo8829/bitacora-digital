import PostCard from "./components/PostCard";
//import postData from "../../data/postData";
import CategoryList from "./components/CategoryList";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import "./Bitacora.css"
import getPost from "../../services/getPost";


function Bitacora () {
    //Declaro una variable useState para almacenar la categoria seleccionada.
    const [categoriaSelect, setCategoriaSelect] = useState ("1");
    
    //rescatamos la id de la ruta dinamica con el objeto useParam. 
    const {idPost} = useParams();
    //declaramos variable y convertimos id a booleano. (si o no tenemos id en la ruta)
    const esPostDetalle = Boolean(idPost);

    //1. (METODO GET "LECTURA")declarar una variable useState para actualizar/renderizar las post obtenidas de la api.
    const [ postApi, setPostApi ] = useState([]);


    //Función actualiza la variable y se comunica con el hijo y el nieto para pasar los datos de categoria seleccionada.
    //paso solo la id de la categoria para poder compararla con la id de las publicaciones.
    function seleccionarCategoria (categoria) {
        setCategoriaSelect(categoria)
    }
    //console.log(categoriaSelect)

    //2. (METODO GET "LECTURA")
    //cuando se monta el componente... 
    useEffect (() => {
        //llamamos a la función (servicio) que efectua la llamada a la api para solicitar la lectura de los datos. 
        getPost() 
            .then(data => {    //llegan los datos al servidor (2º objeto promesa)
                setPostApi(data); //actualizamos variable postApi.
            }) 
    }, [])
    
    //console.log(postApi);
    return (
        //Contenido principal de página.
        <main className="bitacora">
            <section>
                <h1>Bitacora</h1>
                {/*Rederizado condicional si tenemos :id o no - mostramos lista de publicaciones y 
                publicación en detalle (outlet) o categorias, listado, y post*/}
                {esPostDetalle ? 
                    <div className="bitacora-detalle">
                        <PostList/><Outlet/>
                    </div> : 

                    <div className="bitacora-principal">   
                        {/*Muestro lista categorias, comunico información entre abuelo, hijo y nieto.*/}
                        <CategoryList clickCategoryCallBack ={seleccionarCategoria}/>
                        
                        <div className="bitacora-menus">
                            <PostList/> 

                            <div className="bitacora-post">
                            {/*Renderizado condicional de la categoria seleccionada (operador ternario)- 
                            para mostrar todas las publicaciones id es 1, el resto hay que usar el filtro para comparar
                            las propiedades del objeto leido con el objeto seleccionado. */}          
                            {String(categoriaSelect) === "1" ? 
                                postApi.map((ObjetoPost, i) => {  //cambiar la variable a recorrer (3. METODO GET LECTURA API)
                                    return (
                                        <PostCard
                                            key={i} 
                                            post={ObjetoPost}
                                        />
                                    )
                            })
                            : postApi            //cambiar la variable a recorrer (3. METODO GET LECTURA API)
                                .filter((post) => post.categoriaId === String(categoriaSelect))
                                .map((ObjetoPost, i) => {
                                    return (
                                        <PostCard 
                                            key={i} 
                                            post={ObjetoPost}
                                        />
                                    )
                                }) 
                            }
                            </div>
                        </div>
                    </div>}
            </section>                          
        </main>
    )
}

export default Bitacora

 