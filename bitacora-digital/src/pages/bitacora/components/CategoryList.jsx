/*-------LISTADO DE CATEGORIAS (COMO GALERIA)--------*/

import CategoryCard from "./CategoryCard";
//import categoriesData from "../../../data/categoriesData";
import "./CategoryList.css";
import { useState, useEffect } from "react";
import getCategories from "../../../services/getCategories";

function CategoryList ({clickCategoryCallBack}) {

    //1. (METODO GET "LECTURA")declarar una variable useState para actualizar/renderizar las post obtenidas de la api.
    //declarar una variable useState para actualizar/renderizar las cat obtenidas de la api.
    const [ categories, setCategories ] = useState([]);

    //2. (METODO GET "LECTURA")
    //se monta el componente...
    useEffect (() => {
        //llamamos a la función (servicio) que efectua la llamada a la api para solicitar la lectura de los datos. 
        getCategories() 
            .then(data => {    //llegan los datos al servidor (2º objeto promesa)
                setCategories(data); //actualizamos y renderizamos variable categories.
            }) 
    }, [])

    return (
        //Capturamos la llamada del hijo y se la pasamos al padre por props.
        <>
            <nav className="category-list">
                {categories.map((ObjetoCategoria, i) => {  //cambiar la variable a recorrer (3. METODO GET LECTURA API)
                    return (
                        <CategoryCard 
                            key={i}
                            categoria={ObjetoCategoria}
                            clickCategoryCallBack={clickCategoryCallBack}/>
                    )
                })}  
            </nav>
             
        </>
    )
}

export default CategoryList