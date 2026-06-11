/*
 Este fichero conecta con el recurso POST de la API.
 Realiza la solicitud de datos y la lectura de los datos mediante el método GET. 
*/

//URL de la API recurso categories.
const ApiPost = "https://6a2ae7e7b687a7d5cbc4a4df.mockapi.io/api/post";

//=================== API FETCH CON .THEN ()====================
console.log("PASO 1. se va a iniciar la petición.")

//creo una funcion que devolverá la lectura de datos en la API el recurso de CATEGORIAS. (y todas sus propiedades )
function getPost () {
    //1. funcion fetch realiza peticion HTTP. (y devuelve una promesa (objeto promesa)) 
    return  (
        fetch(ApiPost)

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
                    throw new Error('HTTP ERROR: ${response.status}')
                }

                // 4. Abrimos el "paquete", convertimos el body a JSON.
                // response.json() DEVUELVE OTRA PROMESA (objeto promesa)
                return response.json()
            })

            //5. Este then recibe YA los datos convertidos.
            .then((data) => {
                
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

export default getPost


