//Datos básicos de los proyectos

const projectsData = [
  {
    id: 1,
    titulo: "Red de fortalecimiento para alojamientos rurales",
    categoria: "Innovación social y territorio",
    descripcion:"Investigación y diseño de una propuesta colaborativa orientada al fortalecimiento de pequeños alojamientos turísticos rurales mediante cooperación, formación y creación de redes.",
    etiquetas: ["turismo rural", "innovación social", "territorio", "emprendimiento"],
    estado: "En desarrollo",
    destacado: true,
    imagen:"https://res.cloudinary.com/dkldz1egh/image/upload/v1781491000/magnific__img1-img2-img3-img4-editorial-digital-collage-repr__33345_xrqrzt.png",
  },
  {
    id: 2,
    titulo: "Bitácora Digital",
    categoria: "Tecnología y digitalización",
    descripcion:"Espacio digital donde convergen proyectos, aprendizaje, tecnología, territorio y experiencias personales documentadas como parte de un proceso continuo de construcción y transformación.",
    etiquetas: ["react", "desarrollo web", "aprendizaje", "documentación"],
    estado: "En desarrollo",
    destacado: true,
    imagen:"https://res.cloudinary.com/dkldz1egh/image/upload/v1781490726/mapa-brujula_wwsmjo.png",
  },

  {
    id: 3,
    titulo: "Castellón envejece",
    categoria: "Innovación social y territorio",
    descripcion: "Proyecto colaborativo desarrollado dentro del programa de Liderazgo e Innovación Territorial centrado en el reto demográfico y el envejecimiento de la población rural en la provincia de Castellón.",
    etiquetas: ["liderazgo", "innovación territorial", "reto demográfico", "medio rural"],
    estado: "Finalizado",
    destacado: true,
    imagen:"https://res.cloudinary.com/dkldz1egh/image/upload/v1781490435/Bifurcaci%C3%B3n_jp5q1n.png",
  },

  {
    id: 4,
    titulo: "La Cola Feliz",
    categoria: "Tecnología y digitalización",
    descripcion: "Proyecto colaborativo de desarrollo web realizado durante el proceso de formación tecnológica, enfocado en la creación de una plataforma de servicios para animales de compañía.",
    etiquetas: ["html", "css", "frontend", "trabajo en equipo"],
    estado: "Finalizado",
    destacado: true,
    imagen:"https://github.com/user-attachments/assets/0f01a587-a699-4464-b26d-1ff0af73bd6f",
  },

  {
    id: 5,
    titulo: "Obrador Amasarte",
    categoria: "Experiencias y aprendizajes",
    descripcion: "Proyecto de panadería y repostería artesanal impulsado desde el autoempleo y la búsqueda de un modelo de trabajo propio ligado a la creación y la autonomía profesional.",
    etiquetas: ["emprendimiento", "alimentación artesanal", "autoempleo", "gestión"],
    estado: "Finalizado",
    destacado: false,
    imagen:"https://res.cloudinary.com/dkldz1egh/image/upload/v1781490214/1781486196167_kf5ctx.webp",
  },

  {
    id: 6,
    titulo: "Gestión de alojamientos rurales",
    categoria: "Innovación social y territorio",
    descripcion: "Experiencia práctica de gestión de alojamientos rurales que permitió profundizar en aspectos relacionados con turismo, atención al cliente, organización operativa y realidad empresarial del medio rural.",
    etiquetas: ["turismo rural", "gestión", "territorio", "aprendizaje"],
    estado: "Finalizado",
    destacado: false,
    imagen:"https://res.cloudinary.com/dkldz1egh/image/upload/v1781491449/2023-07_Qui%C3%B1ones3_bksnqs.jpg",
  },

  {
    id: 7,
    titulo: "Proyectos de interiorismo",
    categoria: "Experiencias y aprendizajes",
    descripcion: "Proyectos de diseño e interiorismo desarrollados de forma independiente como espacios de experimentación creativa y aprendizaje profesional.",
    etiquetas: ["diseño", "interiorismo", "creatividad", "proyectos"],
    estado: "Finalizado",
    destacado: false,
    imagen:"https://res.cloudinary.com/dkldz1egh/image/upload/v1781491307/planos_h4cnpf.jpg",
  },
]

export default projectsData;