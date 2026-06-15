/* 
Este fichero va a simular los datos que se pedirian del servidor a la API,
posteriormente los pasaremos a la MockAPI
*/

const categoriesData = [
    {
        id: 1, 
        nombre: "Todas las publicaciones",
        descripcion: "todas las publicaciones sin clasificar por categoría",
        imagen: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781488170/categorias_c6c8jl.png",
        icon: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781489096/top-categorias_ynk3ui.png"
       
    },
    {
        id: 2, 
        nombre: "Experiencias y Aprendizajes",
        descripcion: "Lecciones, descubrimientos, errores, cambios de rumbo y aprendizajes que nacen de la práctica, la observación y la experiencia acumulada a lo largo de la vida.",
        imagen: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781488593/experiencias_ws3idj.png",
        icon: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781489106/top-experiencias_dq97tu.png"
    },
    {
        id: 3, 
        nombre: "Tecnología y Digitalización",
        descripcion: "Desarrollo web, herramientas digitales, procesos de aprendizaje tecnológico y proyectos que exploran nuevas formas de construir en el entorno digital.",
        imagen: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781488624/teconologia_jmgi5q.png",
        icon: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781489112/top-tecnologia_wcsyqo.png"
    },
    {
        id: 4, 
        nombre: "Innovación Social y Territorio",
        descripcion: "Reflexiones, iniciativas y proyectos vinculados al medio rural, el desarrollo territorial, el emprendimiento y la búsqueda de soluciones con impacto social.",
        imagen: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781488651/innovacion_uyrjid.png",
        icon: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781489127/top-innovacion_yysj7b.png"
    },
    {
        id: 5, 
        nombre: "Salud, Límites y Adaptación",
        descripcion: "Una mirada honesta sobre cómo convivimos con los límites, nos adaptamos a las circunstancias y seguimos construyendo proyectos y propósito en contextos complejos.",
        imagen: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781488284/salud_lx0a8m.png",
        icon: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781489116/top-salud_xkt0mf.png"
    }
]

export default categoriesData