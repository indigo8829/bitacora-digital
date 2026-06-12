/*
 Este fichero conecta con el recurso POST de la API.
 Realiza el ENVIO de datos  creando un nuevo REGISTRO en la API mediante el método POST. 
*/

//URL de la API recurso categories.
const ApiPost = "https://6a2ae7e7b687a7d5cbc4a4df.mockapi.io/api/post";

//declaro una variable que será el nuevo registro que voy a enviar a la API. 
const nuevoPost = {
    titulo: "dssadas",
    categoria: "sasds",
    categoriaId: 4,
    fecha: "2025-03-20",
    imagen: "",
    resumen: "asdasdasdasdsdadasdasdsda",
    detalle: "ofjdfjdfgjodfjijfsidjfsdijfisfisdfsidfjsidjf",
}

//declaro los datos de la peticion que voy a realizar a la API.
//configuración de la petición POST que necesita fetch para enviar los datos.
//creamos el objeto que enviaremos con la informacion del form y lo metemos en la petición http
const requestData = { 
    method: 'POST', // crea un nuevo registro
    body: JSON.stringify(nuevoPost), //convierte los datos en JSON.
    headers: {   //le dice al servidor que le envia el JSON. 
        'Content-Type': 'application/json; charset=UTF-8',
    },
}

//=================== API FETCH CON .THEN ()====================
//creo una funcion que devolverá la CREACION de datos en la API el recurso de POST. (y todas sus propiedades )
function postPost (nuevoPost) {
    //1. funcion fetch realiza peticion HTTP. (y devuelve una promesa (objeto promesa)) 
    return  (
        fetch(ApiPost, requestData)

            //2. then espera a que la promesa de fetch se resuelva. 
            .then((response) => {

                //muestra el objeto completo.   
                console.log("OBJETO RESPONSE COMPLETO:", response)
                //muestra la propiedad status del objeto.
                console.log("STATUS:", response.status)
                //muestra la propiedad ok del objeto.
                console.log("¿RESPUESTA OK?", response.ok)

                // 3. Comprobamos errores HTTP (en el paquete/objeto) y lanza el error al catch para capturarlo.
                if (!response.ok) {
                    throw new Error(`HTTP ERROR: ${response.status}`)
                }

                // 4. Abrimos el "paquete", convertimos el body a JSON.
                // response.json() DEVUELVE OTRA PROMESA (objeto promesa)
                return response.json()
            })

            //5. Este then recibe YA los datos convertidos.
            .then((data) => {                   //aqui recibo la devolución del objeto creado en la API con la ID.    
                
                console.log("DATOS FINALES:", data)
                //devolver los datos ya convertidos !!!
                return data

            })

            // 6. Capturamos errores del servidor.
            .catch((error) => {
                console.error("ERROR DETECTADO:", error)
            })
    )
}

export default postPost


