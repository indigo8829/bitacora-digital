import { useState, useEffect } from "react";
import getPost from "../../services/getPost";
import postPost from "../../services/postPost";
import getCategories from "../../services/getCategories";
import deletePost from "../../services/deletePost";
import putPost from "../../services/putPost";
import "./AdminPost.css"

function AdminPost () {
    //=====================PASO 1. (METODO GET "LECTURA")====================
    //declarar una variable useState para actualizar/renderizar las post obtenidas de la api.
     const [ posts, setPosts ] = useState([]);
    
    //declarar una variable useState para actualizar/renderizar las cat obtenidas de la api.
    const [ categorias, setCategorias ] = useState([]);

    //==================== (METODO PUT "MODIFICAR")=============================
    //variable para que el formulario entienda si está en estado CREAR o MODIFICAR publicacion.
    const [ modoModificando, setModificando] = useState(false);


    //=======OTRAS VARIABLES NECESARIAS============
    //declaramos una variable objeto con todos los inputs del formulario en estado INICIAL.
    const formInicio = {
        titulo: "",
        categoria: "",
        categoriaId: "",
        fecha: "",
        imagen: "",
        resumen: "",
        detalle: ""
    };
    //declarar variabe useState para almacenar inptus del formulario y poder actualizarla/renderizarla
    const [inputs, setInputs] = useState(formInicio);
    //declaramos variable state para almacenar los errores de campos vacios. 
    const [errors, setErrors ] = useState ({});
   
    //función para gestionar el cambio o actualización de las variables state del formulario. 
    //obtiene el input modificado y lo actualiza manteniendo el resto intactas con el operador spread
    const handleChange = (e) => {
        //utilizamos desestructuring  para no declarar cada una de las constantes tipo const name = e.target.name;
        //optenemos el target de cada campo del form (para tipe text, date, textarea y select necesito name y value)
        const { name, value } = e.target

        //actualizamos el estado de las variables (prev es estado actual de las variables)
        setInputs(prev => ({
            ...prev, 
            [name]: value  //propiedad dinamica, donde name = email, tema, etc y genera el "value" (name: value) 
        }));
    }
   
    //========================FLUJO ENVIO DEL FORM (SUBMIT)===========================
    //A. (submit) función que se ejecutará al enviar el formulario
    function handleSubmit(e) {
        e.preventDefault(); //evitamos que se recargue al enviar el formulario (por defecto)

        //____________Validar los campos del formulario y mostrar avisos.___________
        //declarar una array con los campos. 
        const campos = ["titulo", "categoria","fecha", "resumen", "detalle"];

        //declarar constante para almacenar los nuevos errores detectados (en los campos del formulario).
        const newErrors = {};

        //recorrer la array y ejecutar funcion 
        campos.forEach( campo => { 
            //si el campo esta vacio  (método trim elimina espacios vacios inicio y final) 
            if (!inputs[campo].trim()) {      
                newErrors[campo] = "Campo obligatorio"; 
            }
        });  
        //***************PENDIENTE LA VALIDACIÓN DE CATEGORIA ID /RELACIONAR CATEGORIAID CON CATEGORIA*******/
        //actualizar los errores de validacion de campos ()
        setErrors(newErrors)

        //el metodo object.keys devuelve las claves(propiedades)del objeto . lenght el numero.... 
        //obtenemos el numero de campos con error si es mayor de 0
        if(Object.keys(newErrors).length > 0) {
            return;
        }

        
        //___________Si estamos en modo MODIFICAR publicación_____________
        if(modoModificando){
            //llamamos a la función para modificar los registros y le pasamos los inputs / id (a la API)
            putPost(inputs.id, inputs)        
                .then(postModificado => {    //le pasamos la info del postmodificado
                    setPosts(prev =>         //actualizamos variable pasando valor previo 
                        prev.map(post => 
                            (post.id) === (postModificado.id) //recorremos la variable que almacena los post previos 
                            ? postModificado                          //Verdadero , un post con la misma id que el postModificado, sustituye
                            : post                                    //falso , dejalo igual              
                        )                                                     
                    );
                    setInputs(formInicio); //limpiar los inputs del formulario
                    setModificando(false); //pasar a modo CREACION
            })
         
        }else {
            //postPost(inputs); //llamamos a la función para CREAR REGISTROS (POST) enviamos a la API los datos del formulario (inputs)
            //(MÉTODO POST "CREAR")
            //llamamos a la función postPost cuando el servidor devuelva los datos de la CREACIÓN DEL NUEVO REGISTRO 
            postPost(inputs)
                .then(data => {   //llegan los datos del servidor
                    setPosts(prev => [...prev, data]) //actualizamos pasando valor actual/previo y valor nuevo (renderizamos)
                    setInputs(formInicio) //limpar los inputs del formulario pasando sus valores al valor inicial.
                })
        }
    }

    //====================FUNCION PARA BORRAR FORMULARIO ===================================
    //función para actualizar la variable que almacena/renderiza los valores de los inputs, en este caso valor inicial (para borrar/limpiar)
    function handleReset () {
        setInputs(formInicio);
    }    

     
    //=============================== PASO 2. (METODO GET "LECTURA")=================================
    //cuando se monta el componente... 
    useEffect (() => {
        //llamamos a la función (servicio) que efectua la llamada a la api para solicitar la lectura de los datos. 
        getPost() 
            .then(data => {    //llegan los datos al servidor (2º objeto promesa)
                setPosts(data); //actualizamos variable postApi.
            }) 
        
        getCategories() 
            .then(data => {    //llegan los datos al servidor (2º objeto promesa)
                setCategorias(data); //actualizamos y renderizamos variable categorias para obtener los datos.
                
            }) 
    }, [])

    //===============MODIFICAR PUBLICACIÓN===============
    function modificarPost (post) {
        //console.log(post); //recibo correctamente la publicación cuando le doy al button modificar
        setInputs(post)   //actualizo la variable de los inputs y los relleno con los datos del post
        setModificando(true);   //actualizo variable y paso a modo MODIFICAR publicaciones.
    }


    //==============ELIMINAR PUBLICACIÓN ==============
    function eliminarPost (id) {
        //llamar a la funcion deletePost ... 
        deletePost(id)
            .then(() => {    //aqui no necesitamos la devolución de DATA (datos del servidor) ya que es justamente la confirmacion del registro eliminado
                setPosts(prev =>                                  //actualizamos variable pasando valor actual/previo
                    prev.filter(post => post.id !== String(id))  //filtramos la variable que almacena los post previos 
                                                                  //obtenemos todos los post excepto los de id diferente a la id eliminada (que es un String).                      
                );
                //actualizamos el estado de la variable, pasamos todos los post excepto el de la id a eliminar
            })
    }


    return (
        <main className="admin-post">
            <h1>Administración de publicaciones</h1>
            <div className="section-contenedor">
                <section className="lista-publicaciones">
                    <h2>Lista de publicaciones</h2>
                    <div>
                        {posts.map((Obpost, i) => {  //cambiar la variable a recorrer (3. METODO GET LECTURA API)
                            return ( 
                                <article className="articulo-post"  key={Obpost.id}>
                                    <div>
                                        <h3>{Obpost.titulo}</h3>
                                        <div className="texto-categorias">
                                            <p>{Obpost.categoria}</p>
                                            <p>{Obpost.categoriaId}</p>
                                        </div>
                                        <p>{Obpost.fecha}</p>
                                        <p>{Obpost.resumen}</p>
                                        <p>{Obpost.detalle}</p>
                                    </div>
                                    {/*añadimos para cada post la posibilidad de modificar o eliminar
                                    que reciben como parametros el post o la id*/}
                                    <div>
                                        <button onClick={() => modificarPost (Obpost)}>Editar Publicación</button>
                                        <button onClick={() => eliminarPost (Obpost.id)}>Eliminar Publicación</button>
                                    </div>
                            </article>
                            )
                        })}
                    </div>
                </section>
                <section className="form-container">
                    <h2>Crea una publicación</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="titulo">Titulo:</label>
                            <input 
                                id="titulo"
                                name="titulo"
                                type="text"
                                value={inputs.titulo}
                                onChange={handleChange}
                            />
                            {errors.titulo && (
                            <p className="error">{errors.titulo}</p>)}
                                                
                            <label htmlFor="categoria">Categoria:</label>
                            <select 
                                name="categoria"
                                value={inputs.categoria}
                                onChange={handleChange}
                            >
                                <option value="">Selecciona una categoría</option>
                                {/*Hago un filter para eliminar la 1º categoria de las publicaciones y recorro la nueva array para mostrar las categorias restantes */}
                                {/*Obtengo las categorias disponbibles de la mockApi haciendo un GET (arriba) y aqui un map para recorrer la array de datos devuelta por la api (state)*/}
                                {categorias
                                    .filter((categoria) => categoria.id !== 1)
                                    .map((categoria, i) => {
                                        return ( 
                                            <option
                                                key={categoria.id}
                                                value={categoria.categoria}
                                            >{categoria.nombre}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            {/*Si hay error mostrara p sino no = errors.categoria ? <p>{errors.categoria}</p> : null */}
                            {errors.categoria && (
                            <p className="error">{errors.categoria}</p>)}

                            <label htmlFor="categoriaId">CategoriaId:</label> 
                            <select 
                                name="categoriaId"                                        
                                value={inputs.categoriaId}                
                                onChange={handleChange}
                            >
                                <option value="">Selecciona una categoría</option>
                                {categorias
                                    .filter((categoria) => categoria.id !== 1)
                                    .map((categoria, i) => {
                                        return ( 
                                            <option
                                                key={categoria.id}
                                                value={categoria.id}
                                            >{categoria.id}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            {errors.categoriaId && (
                            <p className="error">{errors.categoriaId}</p>)}

                            <label htmlFor="fecha">Fecha:</label>
                            <input 
                                id="fecha"
                                name="fecha"
                                type="date"
                                value={inputs.fecha}
                                onChange={handleChange}
                            />
                            {errors.fecha && (
                            <p className="error">{errors.fecha}</p>)}

                            <label htmlFor="imagen">Imagen:</label>
                            <input 
                                id="imagen"
                                name="imagen"
                                type="text"
                                value={inputs.imagen}
                                onChange={handleChange}
                            />

                            <label htmlFor="resumen">Resumen:</label>
                            <textarea
                                id="resumen"
                                name="resumen"
                                value={inputs.resumen}
                                onChange={handleChange}
                            />
                            {errors.resumen && (
                            <p className="error">{errors.resumen}</p>)}

                            <label htmlFor="detalle">Detalle:</label>
                            <textarea
                                id="detalle"
                                name="detalle"
                                value={inputs.detalle}
                                onChange={handleChange}
                            />
                            {errors.detalle && (
                            <p className="error">{errors.detalle}</p>)}
                        </div>
                        <div>
                            <button type="submit">{modoModificando ? "Guardar Cambios" : "Crear Publicación"}</button> 
                            <button type="button" onClick={handleReset}>Borrar Formulario</button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    )
}




export default AdminPost