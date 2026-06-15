/* 
Este fichero va a simular los datos que se pedirian del servidor a la API,
posteriormente los pasaremos a la MockAPI
*/

const postData = [
    {
        id: 1, 
        titulo: "Escuchar antes de proponer soluciones",
        categoria: "Innovación Social y Territorio",
        categoriaId: "4",
        fecha: "2026-06-13",
        imagen: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781494705/innovacion_2_qoj4pr.png",
        resumen: "Una reflexión nacida del trabajo realizado en innovación rural sobre la importancia de comprender la realidad antes de intentar transformarla.",
        detalle: "Durante mucho tiempo entendí la innovación como la capacidad de generar ideas.\nPensaba que innovar consistía en encontrar soluciones nuevas para problemas existentes.\nSin embargo, en los últimos meses, trabajando sobre desafíos vinculados al territorio y al medio rural, he empezado a ver las cosas de otra manera.\nMuchas veces las soluciones llegan demasiado pronto.\nAparecen antes de comprender realmente qué está ocurriendo.\nAntes de escuchar.\nAntes de observar.\nAntes de entender por qué determinadas dinámicas llevan años repitiéndose.\nHe descubierto que detrás de muchos problemas territoriales no hay una única causa ni una única respuesta.\nExisten factores económicos, sociales, culturales, institucionales y humanos que se entrelazan formando sistemas complejos.\nPor eso cada vez me interesa menos la búsqueda de soluciones rápidas y más la capacidad de formular buenas preguntas.\n¿Qué está sosteniendo realmente este problema?\n¿Qué necesidades no estamos viendo?\n¿Qué voces faltan en la conversación?\n¿Qué ocurre cuando observamos el territorio desde la experiencia de quienes viven allí?\nQuizás innovar no sea únicamente imaginar futuros diferentes.\nQuizás innovar también consista en aprender a escuchar con suficiente profundidad como para comprender el presente.\nPorque solo cuando entendemos cómo funciona un sistema podemos empezar a transformarlo de forma consciente.\nY esa transformación casi siempre comienza mucho antes de diseñar una solución.\n", 
    },
    {
        id: 2, 
        titulo: "El problema no era la tecnología",
        categoria: "Tecnología y Digitalización",
        categoriaId: "2",
        fecha: "2026-06-09",
        imagen: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781494637/tecnologia_xikg7b.png",
        resumen: "Aprender tecnología no consiste solo en dominar herramientas. A veces el verdadero desafío es descubrir que detrás de muchos problemas técnicos hay problemas de organización, comprensión o contexto.",
        detalle: "Durante los últimos años he dedicado muchas horas a aprender herramientas digitales, desarrollo web, automatizaciones, inteligencia artificial y distintas formas de construir proyectos en internet.\nAl principio pensaba que la parte difícil era la tecnología.\nCreía que cuando entendiera los lenguajes, las plataformas o las herramientas, todo lo demás encajaría por sí solo.\nPero poco a poco fui descubriendo algo curioso.\nMuchas veces el problema no era técnico.\nEl problema era no tener claro qué quería construir.\nO intentar resolver con una herramienta un problema que en realidad era de organización.\nO dedicar días a buscar una solución compleja cuando una más sencilla habría sido suficiente.\nLa tecnología tiene algo fascinante: da la sensación de que todo puede solucionarse con una nueva aplicación, una nueva plataforma o una nueva funcionalidad.\nSin embargo, cuanto más aprendo, más valor doy a las preguntas previas.\n¿Qué necesidad existe realmente?\n¿Qué problema estamos intentando resolver?\n¿Para quién?\n¿Tiene sentido hacerlo?\nLa tecnología sigue siendo una herramienta extraordinaria.\nPero una herramienta sigue siendo una herramienta.\nPor sí sola no aporta dirección, propósito ni criterio.\nEsas partes siguen dependiendo de las personas.\nY quizás ese haya sido uno de los aprendizajes más importantes de mi proceso de digitalización: entender que aprender tecnología no consiste únicamente en dominar herramientas, sino también en desarrollar la capacidad de decidir cuándo utilizarlas y cuándo no.\n"       
    },
    {
        id: 3, 
        titulo: "Aprender cuando no puedes seguir el ritmo",
        categoria: "Salud, Límites y Adaptación",
        categoriaId: "5",
        fecha: "2026-06-06",
        imagen: "https://res.cloudinary.com/dkldz1egh/image/upload/v1781494603/salud_xchdhp.png",
        resumen: "A veces el mayor desafío no es aprender algo nuevo, sino hacerlo cuando tus circunstancias no te permiten avanzar al ritmo que el mundo considera normal. Una reflexión sobre aprendizaje, límites y adaptación.",
        detalle: "Durante mucho tiempo pensé que aprender consistía en avanzar.\nEstudiar, practicar, mejorar, acumular experiencia y seguir adelante.\nEra una idea sencilla y bastante lógica. El problema llegó cuando mi realidad dejó de encajar con esa definición.\nHay situaciones en las que el aprendizaje deja de parecer una línea ascendente. No avanzas más rápido. No produces más. No consigues más resultados. A veces simplemente intentas mantenerte a flote.\nCuando la salud impone límites, muchas de las referencias habituales desaparecen. Ya no puedes medir tu progreso por las horas dedicadas, ni por la cantidad de trabajo realizado, ni por la velocidad a la que alcanzas objetivos.\nY, sin embargo, sigues aprendiendo.\nAprendes a observar tus propios límites sin ignorarlos ni luchar constantemente contra ellos.\nAprendes a distinguir entre insistir y desgastarte.\nAprendes a adaptar proyectos, expectativas y ritmos.\nAprendes que la flexibilidad no siempre es una elección estratégica; a veces es una necesidad.\nEn los últimos años he descubierto que gran parte de lo que sé no proviene de cursos, libros o formaciones. Proviene de haber tenido que reconstruir formas de trabajar, aprender y participar en proyectos dentro de un contexto que no estaba diseñado para personas con limitaciones importantes.\nNo es un aprendizaje espectacular ni especialmente visible.\nPero probablemente sea uno de los más valiosos.\nPorque me ha enseñado que avanzar no siempre significa ir más lejos.\nA veces significa encontrar una forma sostenible de continuar.\n"

    }

]

export default postData