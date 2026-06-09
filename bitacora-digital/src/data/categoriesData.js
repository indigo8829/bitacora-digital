/* 
Este fichero va a simular los datos que se pedirian del servidor a la API,
posteriormente los pasaremos a la MockAPI
*/

const categoriesData = [
    {
        id: 1, 
        nombre: "Todas las publicaciones",
        descripcion: "todas las publicaciones sin clasificar por categoría",
        imagen: "https://picsum.photos/200"
    },
    {
        id: 2, 
        nombre: "Experiencias y Aprendizajes",
        descripcion: "Lecciones, descubrimientos, errores, cambios de rumbo y aprendizajes que nacen de la práctica, la observación y la experiencia acumulada a lo largo de la vida.",
        imagen: "https://picsum.photos/200"
    },
    {
        id: 3, 
        nombre: "Tecnología y Digitalización",
        descripcion: "Desarrollo web, herramientas digitales, procesos de aprendizaje tecnológico y proyectos que exploran nuevas formas de construir en el entorno digital.",
        imagen: "https://picsum.photos/200"
    },
    {
        id: 4, 
        nombre: "Innovación Social y Territorio",
        descripcion: "Reflexiones, iniciativas y proyectos vinculados al medio rural, el desarrollo territorial, el emprendimiento y la búsqueda de soluciones con impacto social.",
        imagen: "https://picsum.photos/200"
    },
    {
        id: 5, 
        nombre: "Salud, Límites y Adaptación",
        descripcion: "Una mirada honesta sobre cómo convivimos con los límites, nos adaptamos a las circunstancias y seguimos construyendo proyectos y propósito en contextos complejos.",
        imagen: "https://picsum.photos/200"
    }
]

export default categoriesData