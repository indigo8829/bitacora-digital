import { useState, useEffect } from "react";
import getPost from "../../services/getPost";
//import postPost from "../../services/postPost";

function AdminPost () {

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

    //función para gestionar el cambio o actualización de las variables state del formulario. 
    //obtiene el input modificado y lo actualiza manteniendo el resto intactas con el operador spread
    const handleChange = (e) => {
        //utilizamos desestructuring  para no declarar cada una de las constantes tipo const name = e.target.name;
        //optenemos el target de cada campo del form 
        const { name, value, type } = e.target

        //actualizamos el estado de las variables (prev es estado actual de las variables)
        setInputs(prev => ({
            ...prev, 
            [name]: value  //propiedad dinamica, donde name = email, tema, etc y genera el "value" (name: value) 
        }));
    }

    //1. (METODO GET "LECTURA")declarar una variable useState para actualizar/renderizar las post obtenidas de la api.
     const [ posts, setPosts ] = useState([]);
    
    //2. (METODO GET "LECTURA")
    //cuando se monta el componente... 
    useEffect (() => {
        //llamamos a la función (servicio) que efectua la llamada a la api para solicitar la lectura de los datos. 
        getPost() 
            .then(data => {    //llegan los datos al servidor (2º objeto promesa)
                setPosts(data); //actualizamos variable postApi.
            }) 
    }, [])

    /*3.(MÉTODO POST "CREAR")
    //llamamos a la función postPost 
    postPost()
        .then(data => {   //llegan los datos del servidor
            setPostApi(prev => [...prev, data]) //actualizamos pasando valor actual/previo y valor nuevo
        })*/



    return (
        <main>
            <h1>Administración de publicaciones</h1>
            <section>
                <h2>Lista de publicaciones:</h2>
                <ul>
                    {posts.map((Obpost, id) => {  //cambiar la variable a recorrer (3. METODO GET LECTURA API)
                        return (
                            <li 
                                key={Obpost.id}                       
                            >{Obpost.titulo}</li>
                        )
                    })} 
                </ul>
            </section>
            <form >
                <div>
                    <label htmlFor="titulo"></label>
                    <input 
                        id="titulo"
                        name="titulo"
                        type="text"
                        value={inputs.titulo}
                        onChange={handleChange}
                    />
                    <label htmlFor="detalle"></label>
                    <input 
                        id="detalle"
                        name="detalle"
                        type="text-area"
                        value={inputs.detalle}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Crear Publicación</button> 
                    <button type="button">Borrar Formulario</button>
                </div>

            </form>
        </main>
    )
}




export default AdminPost