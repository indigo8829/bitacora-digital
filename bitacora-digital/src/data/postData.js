/* 
Este fichero va a simular los datos que se pedirian del servidor a la API,
posteriormente los pasaremos a la MockAPI
*/

const postData = [
    {
        id: 1, 
        titulo: "Lo que me enseó emprender en el medio rural",
        categoria:"Experiencias y Aprendizajes",
        categoriaId: 2,
        fecha: "2026-06-05",
        imagen: "",
        resumen: "Ad vitae odio purus, convallis himenaeos sagittis mi, bibendum iaculis.",
        detalle: "Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non."
    },
    {
        id: 2, 
        titulo: "Aprendiendo React desde cero",
        categoria: "Tecnología y Digitalización",
        categoriaId: 3,
        fecha: "2026-06-05",
        imagen: "",
        resumen: "Ad vitae odio purus, convallis himenaeos sagittis mi, bibendum iaculis.",
        detalle: "Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non."
        
    },
    {
        id: 3, 
        titulo: "Hablamos de territorio",
        categoria: "Innovación Social y Territorio",
        categoriaId: 4,
        fecha: "2026-06-05",
        imagen: "",
        resumen: "Ad vitae odio purus, convallis himenaeos sagittis mi, bibendum iaculis.",
        detalle: "Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non."
    },
    {
        id: 4, 
        titulo: "Duelo, Resiliencia y Reconstrucción",
        categoria:  "Salud, Límites y Adaptación",
        categoriaId: 5,
        fecha: "2026-06-05",
        imagen: "",
        resumen: "Ad vitae odio purus, convallis himenaeos sagittis mi, bibendum iaculis.",
        detalle: "Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non.Lorem ipsum dolor sit amet consectetur adipiscing, elit fusce penatibus aptent lobortis faucibus, et fringilla tempus vehicula sem. Sodales ultrices mollis cras sociis pellentesque malesuada, ullamcorper tincidunt magnis mus habitant, aliquam congue vehicula quis cum. Id laoreet cubilia purus aliquam litora auctor augue pretium, rhoncus erat hendrerit proin donec cursus posuere, vulputate consequat facilisi interdum urna varius non."
    }
]

export default postData