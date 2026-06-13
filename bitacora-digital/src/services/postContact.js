/*
 Este fichero conecta con el recurso POST de la API. 
 ENVIAR EL FORMULARIO DE CONTACTO
 Realiza el ENVIO de datos creando un nuevo REGISTRO en la API mediante el método POST. 
*/

//URL de la API recurso categories.
//En el form el valor del name en el input debe coincidir con la propiedad del objeto en value.
const apiUrl = 'https://6a298daaf59cb8f65f1d565c.mockapi.io/api/contactos';







//=================== API FETCH CON .THEN ()====================
//creo una funcion que devolverá la CREACION de datos en la API el recurso de POST. (y todas sus propiedades )
function postContact (nuevoContacto) {
    //1. funcion fetch realiza peticion HTTP. (y devuelve una promesa (objeto promesa)) 
    //enviar los datos al servidor mediante fetch indicando la API y el tipo de petición
    return (
        fetch(apiUrl, {
            method: 'POST', // crea un nuevo registro
            body: JSON.stringify(nuevoContacto), //convierte los datos en JSON.
            headers: {   //le dice al servidor que le envia el JSON. 
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
            //2. then espera a que la promesa de fetch se resuelva. 
            .then(response => {

                //muestra el objeto completo.   
                console.log("OBJETO RESPONSE COMPLETO:", response)
                //muestra la propiedad status del objeto.
                console.log("STATUS:", response.status)
                //muestra la propiedad ok del objeto.
                console.log("¿RESPUESTA OK?", response.ok)

                // 3. Comprobamos errores HTTP (en el paquete/objeto) y lanza el error al catch para capturarlo. 
                if(response.ok){
                    // 4. Abrimos el "paquete", convertimos el body a JSON. response.json() DEVUELVE OTRA PROMESA (objeto promesa)data.
                    return response.json()//si la respuesta del servidor es correcta devuelve el JSON.
                } else {    
                    throw new Error (`Status code ${response.status}`) //sino es correcta se lanza un mensaje con el codigo del estado
                }
            })
            
            //5. Este then recibe YA los datos convertidos.
            .then(data => {
                return data    //aqui recibo la devolución del objeto creado en la API con la ID. y devuelvo data
                
            })

            .catch(err => {
                console.error(`[ERROR] ${err}`)//capturamos otros errores
            })

    )
}

export default postContact 