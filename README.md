# bitacora-digital
Bitácora Digital no es solo un portfolio ni un blog. Es un espacio donde convergen proyectos, aprendizajes, tecnología, innovación social, territorio y experiencias que forman parte de un proceso continuo de construcción y transformación.

# Bitácora Digital

## Proyecto Final Bootcamp Front-End React

**Desarrollado por:** Estefanía Molina Giménez

---

# Descripción del proyecto

Bitácora Digital es una aplicación web desarrollada con React que nace como un espacio personal y profesional donde recopilar experiencias, proyectos, aprendizajes, reflexiones y procesos de transformación.

Aunque técnicamente se presenta como un blog personal, el objetivo del proyecto es ir más allá del formato tradicional de blog y construir un espacio vivo donde convivan:

* Desarrollo web
* Innovación rural
* Aprendizaje continuo
* Proyectos personales y profesionales
* Reflexiones y experiencias de vida

La idea principal es documentar procesos, compartir conocimiento y mostrar una trayectoria profesional diversa en constante evolución.

---

# Objetivos del proyecto

Este proyecto ha sido desarrollado como trabajo final del Bootcamp Front-End de la Fundación Eurofirms.

Los objetivos principales han sido:

* Aplicar los conocimientos adquiridos en HTML, CSS, JavaScript y React.
* Aprender a estructurar una aplicación React de tamaño medio.
* Implementar navegación entre páginas utilizando React Router.
* Consumir datos desde APIs externas.
* Implementar operaciones CRUD completas.
* Organizar el código siguiendo una estructura modular basada en componentes y servicios.
* Mejorar la comprensión de estados, props, hooks y flujo de datos.

---

# Tecnologías utilizadas

## Front-End

* HTML5
* CSS3
* JavaScript 
* React
* React Router DOM

## Gestión de datos

* Fetch API
* MockAPI

## Control de versiones

* Git
* GitHub

---

# Funcionalidades implementadas

## Parte pública

### Home

Página principal con presentación general del proyecto y acceso a las diferentes secciones.

### Mi Historia

Espacio narrativo donde se presenta el recorrido personal y profesional de la autora.

### Bitácora

Listado dinámico de publicaciones obtenidas desde una API.

Incluye:

* Lectura de publicaciones
* Navegación a detalle de publicación
* Filtrado por categorías

### Proyectos

Sección destinada a mostrar proyectos destacados y proyectos personales.

### Hablemos

Página de contacto donde cualquier visitante puede enviar un mensaje mediante formulario.

Características:

* Validación de campos obligatorios
* Validación de política de privacidad
* Envío de datos a MockAPI
* Confirmación mediante modal

---

## Parte de administración

### Administración de publicaciones

Implementación de un CRUD completo:

#### Crear

Permite añadir nuevas publicaciones.

#### Leer

Obtiene publicaciones desde la API.

#### Editar

Permite modificar publicaciones existentes mediante método PUT.

#### Eliminar

Permite borrar publicaciones mediante método DELETE.

#### Gestión de categorías

Obtención dinámica de categorías desde la API para asociarlas a cada publicación.

---

# Conceptos React aplicados

Durante el desarrollo se han utilizado:

* useState
* useEffect
* Props
* Componentes reutilizables
* React Router
* useParams
* Renderizado condicional
* Formularios controlados
* Gestión de estado local
* Comunicación con APIs REST

---

# Estructura del proyecto

```text
src/
│
├── components/
│   ├── Header
│   ├── Footer
│   ├── Modal
│   ├── CustomButton
│   └── Componentes reutilizables
│
├── pages/
│   ├── Home
│   ├── MiHistoria
│   ├── Bitacora
│   ├── Proyectos
│   ├── Hablemos
│   └── Admin
│
├── data/
│   ├── projectsData
│   ├── mihistoriaData
│   └── otros datos estáticos
│
├── services/
│   ├── getPost
│   ├── postPost
│   ├── putPost
│   ├── deletePost
│   ├── getCategories
│   └── postContact
│
├── router/
│
├── App.jsx
│
└── main.jsx
```

---

# Decisiones técnicas tomadas

## Separación entre componentes y servicios

Se decidió mover las llamadas a la API a la carpeta services para:

* Reducir el tamaño de los componentes.
* Mejorar la legibilidad.
* Facilitar el mantenimiento del código.
* Reutilizar lógica de acceso a datos.

Ejemplo:

* getPost.js
* postPost.js
* putPost.js
* deletePost.js
* postContact.js

---

## Uso de MockAPI

Para el desarrollo del CRUD se utilizó MockAPI como backend simulado.

Esto permitió trabajar:

* Métodos GET
* Métodos POST
* Métodos PUT
* Métodos DELETE

sin necesidad de desarrollar un backend propio.

---

## Componentes reutilizables

Gran parte de la aplicación se construyó mediante componentes reutilizables para evitar duplicar código.

Ejemplos:

* ArticleCard
* ArticleCardImg
* ProjectCard
* CustomButton
* Modal

---

## Diseño orientado a contenido

La prioridad del proyecto ha sido organizar la información y construir una experiencia narrativa coherente antes que añadir funcionalidades complejas.

Por este motivo se decidió combinar:

* Contenido estático
* Contenido dinámico proveniente de la API

dependiendo de las necesidades de cada sección.

---

# Dificultades encontradas durante el desarrollo

Este proyecto ha supuesto un importante reto personal y técnico.

Algunas de las principales dificultades fueron:

* Comprender la estructura de React.
* Aprender el flujo de datos entre componentes.
* Entender el funcionamiento de useEffect.
* Gestionar formularios controlados.
* Implementar correctamente operaciones CRUD.
* Comprender la relación entre categorías y publicaciones.
* Organizar una arquitectura escalable de carpetas y componentes.
* Compatibilizar el desarrollo del proyecto con limitaciones de tiempo y problemas técnicos externos.

También supuso un reto importante aprender a leer errores, depurar código y trabajar de forma iterativa.

---

# Metodología utilizada

El proyecto se ha desarrollado siguiendo una filosofía inspirada en metodologías ágiles.

Se trabajó mediante pequeñas iteraciones:

1. Maquetación inicial.
2. Componentes reutilizables.
3. Navegación.
4. Datos estáticos.
5. Integración con APIs.
6. CRUD.
7. Mejoras progresivas.

El enfoque ha sido construir primero una versión funcional mínima (MVP) y posteriormente planificar futuras mejoras.

---

# Funcionalidades previstas para futuras versiones

Debido a las limitaciones de tiempo del bootcamp, algunas funcionalidades quedan planificadas para futuras versiones:

## Autenticación

* Login
* Logout
* Protección de rutas privadas
* Gestión de sesión mediante Context API y localStorage

## Mejoras del panel de administración

* Gestión completa de categorías
* Relación automática entre categorías y categoryId
* Validaciones más avanzadas

## Mejoras visuales

* Responsive avanzado
* Animaciones
* Optimización de accesibilidad
* Sustitución de imágenes temporales por contenido definitivo

## Mejoras funcionales

* Paginación
* Buscador
* Filtros avanzados
* Sistema de destacados
* Persistencia local mediante localStorage

---

# Cómo ejecutar el proyecto

## Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

## Abrir navegador

```text
http://localhost:5173
```

---

# Aprendizajes obtenidos

Este proyecto ha supuesto una transición desde páginas estáticas hacia aplicaciones React con gestión de datos reales.

Además de los conocimientos técnicos, ha permitido desarrollar habilidades relacionadas con:

* Resolución de problemas.
* Organización del código.
* Planificación de proyectos.
* Diseño de interfaces.
* Trabajo iterativo.
* Documentación técnica.

---

# Estado actual del proyecto

La versión entregada corresponde a una primera versión funcional (MVP).

Incluye navegación, estructura React, consumo de APIs, CRUD de publicaciones, formulario de contacto y diseño personalizado.

El proyecto continuará evolucionando tras la finalización del bootcamp incorporando nuevas funcionalidades, mejoras visuales y sistemas de autenticación.

---

# Agradecimientos

Este proyecto ha sido desarrollado durante el Bootcamp Front-End de Tech Academy.

Agradecimiento especial al equipo docente, mentoras y compañeras por el acompañamiento durante el proceso de aprendizaje.

---

© 2026 Estefanía Molina Giménez
Bitácora Digital
