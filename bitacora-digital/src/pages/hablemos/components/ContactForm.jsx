import { useState } from "react";
import Modal from "../../../components/Modal.jsx";
import postContact from "../../../services/postContact.js";

//En el form el valor del name en el input debe coincidir con la propiedad del objeto en value.
//const apiUrl = 'https://6a298daaf59cb8f65f1d565c.mockapi.io/api/contactos';


function ContactForm () {
    //declaramos variable state para renderizar o no el modal
    const [isOpenModal, setIsOpenModal ] = useState(false);

    //declaramos variable state para almacenar los errores de campos vacios. 
    const [errors, setErrors ] = useState ({});
 
    //declaramos una variable objeto con todos los inputs del formulario en estado INICIAL.
    const formInicio = {
        name: "",
        email: "",
        tema: "",
        message: "",
        verificacion: false
    };

    //declarar variabe useState para almacenar inptus del formulario y poder actualizarla/renderizarla
    const [inputs, setInputs] = useState(formInicio);

    //declarar una variable que almacene y renderice si el formulario está disponible (sus campos o no)
    const [submittingForm, setSubmittingForm] = useState(false);


    //función para gestionar el cambio o actualización de las variables state del formulario. 
    //obtiene el input modificado y lo actualiza manteniendo el resto intactas con el operador spread
    const handleChange = (e) => {
        //utilizamos desestructuring  para no declarar cada una de las constantes tipo const name = e.target.name;
        //optenemos el target de cada campo del form
        // para tipe text y text-area necesito name y value pero para checkbox necestipo el type (tipo de input) y el booleano de checked.
        const { name, value, type, checked } = e.target

        //actualizamos el estado de las variables (prev es estado actual de las variables)
        setInputs(prev => ({
            ...prev, 
            [name]: type === "checkbox" ? checked : value  //propiedad dinamica, donde name = email, tema, etc y genera el "value" (name: value) 
        }));

        //actualizamos el estado de la variable que almacena los errores en los campos vacios (obligatorios)para que se borren al rellenarlos.
        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    }

    //-----FLUJO ENVIO DEL FORM---------
    //1. (submit) función que se ejecutará al enviar el formulario
    function handleSubmit(e) {
        e.preventDefault(); //evitamos que se recargue al enviar el formulario (por defecto)
        console.log(inputs);

        //2. validar campos del formulario y mostrar los avisos.
        //declarar constante para almacenar los nuevos errores detectados.
        const newErrors = {};
        /*if (!inputs.name.trim()) {
            newErrors.name = "El nombre es obligatorio"
        }*/
        //declarar una array con los campos. 
        const campos = ["name", "email", "tema", "message"];

        //recorrer la array y ejecutar funcion 
        campos.forEach( campo => { 
            //si el campo esta vacio  (método trim elimina espacios vacios inicio y final) 
            if (!inputs[campo].trim()) {      
                newErrors[campo] = "Campo obligatorio"; 
            }
        });   

        //3. validar checkbox solo ya que no es string
        if (!inputs.verificacion) {
            newErrors.verificacion = "Es necesario aceptar la política de privacidad, gracias";
        }
        
        //actualizar los errores de validacion de campos ()
        setErrors(newErrors)

        //el metodo object.keys devuelve las claves(propiedades)del objeto . lenght el numero.... 
        //obtenemos el numero de campos con error si es mayor de 0
        if(Object.keys(newErrors).length > 0) {
            return;
        }

        //4. deshabilitar el formulario 
        setSubmittingForm(true)

        //5. crear nuevo objeto para almacenar los valores de los inputs. (con el ...rest operator indicamos todas las propiedades del objeto)
        const nuevoContacto = {
            ...inputs, 
            createdAt: new Date().toISOString()  //recojo la fecha de envio del formulario , la convierto a año-mes-dia (formato ISO 8601) + string, (las APIs guardas fechas así).
        } 

        //6. configuración de la petición POST que necesita fetch para enviar los datos.
        //creamos el objeto que enviaremos con la informacion del form y lo metemos en la petición http
        /*const requestData = { 
            method: 'POST', // crea un nuevo registro
            body: JSON.stringify(nuevoContacto), //convierte los datos en JSON.
            headers: {   //le dice al servidor que le envia el JSON. 
                'Content-Type': 'application/json; charset=UTF-8',
            },
        }*/

        postContact(nuevoContacto)
            .then(data => {
                setInputs(formInicio)//limpiar el formulario
                setIsOpenModal(true)//cambiamos el estado del modal para mostrarlo cuando confirmemos el envio/recepcion de datos
            })            
            .finally(() => {
                setSubmittingForm(false)//habilitamos el formulario
            })

        //console.log(nuevoContacto);
        //console.log(requestData);
        //7. enviar los datos al servidor mediante fetch indicando la API y el tipo de petición
        //8. manejo de errores 
        //9. volver a habilitar los campos del form 
        /*fetch(apiUrl, requestData)

            .then(response => {
                if(response.ok){
                    return response.json()//si la respuesta del servidor es correcta devuelve el JSON.
                } else {    
                throw new Error (`Status code ${response.status}`) //sino es correcta se lanza un mensaje con el codigo del estado
                }
            })
            
            //data, objeto promesa que nos devuelve el servidor
            .then(data => {
                console.log(data);
                setInputs(formInicio)//limpiar el formulario
                setIsOpenModal(true);//cambiamos el estado del modal para mostrarlo cuando confirmemos el envio/recepcion de datos
            })
            .catch(err => {
                console.error(`[ERROR] ${err}`)//capturamos otros errores
            })
            .finally(() => {
                setSubmittingForm(false)//habilitamos el formulario
            })*/
    }

    //función para actualizar la variable que almacena/renderiza los valores de los inputs, en este caso valor inicial (para borrar/limpiar)
    function handleReset () {
        setInputs(formInicio);
    }

    return (
        <section>
            <h2>¿Te apetece escribir?</h2>
            <p>Puedes utilizar este formulario para enviarme un mensaje. Intentaré responder tan pronto como me sea posible.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input 
                        id="name"
                        placeholder="Escribe tu nombre"
                        autoComplete="off"
                        type="text" 
                        name="name"
                        value={inputs.name} 
                        onChange={handleChange}
                        disabled={submittingForm}
                    />
                    {/*Si hay error mostrara p sino no = errors.name ? <p>{errors.name}</p> : null */}
                    {errors.name && (
                        <p className="error-mensaje">{errors.name}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input 
                        id="email"
                        placeholder="Correo electronico"
                        autoComplete="off"
                        type="email" 
                        name="email"
                        value={inputs.email} 
                        onChange={handleChange}
                        disabled={submittingForm}
                    />
                    {errors.email && (
                        <p className="error-mensaje">{errors.email}</p>
                    )}
                </div>
                <div>
                    
                    <label htmlFor="tema">Asunto:</label>
                    <input 
                        id="tema"
                        type="text" 
                        name="tema"
                        value={inputs.tema} 
                        onChange={handleChange}
                        disabled={submittingForm}
                    />
                    {errors.tema && (
                        <p className="error-mensaje">{errors.tema}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={inputs.message}
                        onChange={handleChange}
                        disabled={submittingForm}
                    />
                    {errors.message && (
                        <p className="error-mensaje">{errors.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="verificacion">
                        <input 
                            id="verificacion"
                            type="checkbox"
                            name="verificacion"
                            checked={inputs.verificacion}
                            onChange={handleChange}
                            disabled={submittingForm}
                        />
                        Acepto la política de privacidad
                    </label>
                    {errors.verificacion && (
                        <p className="error-mensaje">{errors.verificacion}</p>
                    )}
                </div>

                <div>
                    <button type="submit" disabled={submittingForm} >Enviar</button> 
                    <button type="button" disabled={submittingForm} onClick={handleReset}>Borrar</button>
                </div>    
            </form>
            <Modal
                isOpen={isOpenModal}
                onClose={() => setIsOpenModal(false)}
            >
                <h2>Mensaje recibido</h2>
                <p>Gracias por contactar.</p>
                <p>Respoderé lo antes posible.</p>
            </Modal>
        </section>   
    )
}

export default ContactForm