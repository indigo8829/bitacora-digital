/*-------LISTADO DE CATEGORIAS (COMO GALERIA)--------*/

import CategoryCard from "../components/CategoryCard";
import categoriesData from "../data/categoriesData";
import "./CategoryList.css";

function CategoryList () {

    return (
        <>
            <div className="category-list">
                {categoriesData.map((ObjetoCategoria, i) => {
                    return (
                        <CategoryCard 
                            key={i}
                            categoria={ObjetoCategoria}/>
                    )
                })}  
            </div>
             
        </>
    )
}

export default CategoryList;