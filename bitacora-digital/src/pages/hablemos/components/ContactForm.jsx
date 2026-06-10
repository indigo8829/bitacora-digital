import { useState } from "react";


//el valor del name en el input debe coincidir con la propiedad del objeto en value.

function ContactForm () {
    //declaramos una variable objeto con todos los inputs del formulario en estado INICIAL.
    //recojo la fecha de envio del formulario , la convierto a año-mes-dia (formato ISO 8601) + string, (las APIs guardas fechas así).
    const formInicio = {
        name: "",
        email: "",
        tema: "",
        message: "",
        createdAt: new Date().toISOString(),
        verificacion: false
    };
    //declarar variabe useState para almacenar inptus del formulario y poder actualizarla/renderizarla
    const [inputs, setInputs] = useState(formInicio);

    //declarar una variable que almacene y renderice el envio o no del formulario.
    const [submittingForm, setSubmittingForm] = useState(false);


    //función para gestionar el evento de cambio de las variables state
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setInputs(prev => ({
            ...prev, 
            [name]: type === "checkbox" ? checked : value
        }));
    }

    //
    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);

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
                </div>

                <div>
                    <button type="submit" disabled={submittingForm}>Enviar</button> 
                    <button type="button" disabled={submittingForm} onClick={handleReset}>Borrar</button>
                </div>    
            </form>
        </section>
        
    )
}

export default ContactForm;