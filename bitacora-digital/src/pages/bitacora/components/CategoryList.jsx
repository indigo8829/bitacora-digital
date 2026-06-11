/*-------LISTADO DE CATEGORIAS (COMO GALERIA)--------*/

import CategoryCard from "./CategoryCard";
//import categoriesData from "../../../data/categoriesData";
import "./CategoryList.css";
import { useEffect } from "react";
import { useState } from "react";
import getCategories from "../../../services/getCategories";

function CategoryList ({clickCategoryCallBack}) {

    //declarar una variable useState para actualizar/renderizar las cat obtenidas de la api.
    const [ categories, setCategories ] = useState([]);

    //se monta el componente
    useEffect (() => {
        //llamamos a la función (servicio) que efectua la llamada a la api para solicitar la lectura de los datos. 
        getCategories() 
            .then(data => {    //llegan los datos al servidor (2º objeto promesa)
                setCategories(data); //actualizamos categories.
            }) 
    }, [])

    return (
        //Capturamos la llamada del hijo y se la pasamos al padre por props.
        <>
            <nav className="category-list">
                {categories.map((ObjetoCategoria, i) => {
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

export default CategoryList;