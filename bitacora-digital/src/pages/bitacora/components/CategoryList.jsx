/*-------LISTADO DE CATEGORIAS (COMO GALERIA)--------*/

import CategoryCard from "./CategoryCard";
import categoriesData from "../../../data/categoriesData";
import "./CategoryList.css";

function CategoryList ({clickCategoryCallBack}) {

    return (
        //Capturamos la llamada del hijo y se la pasamos al padre por props.
        <>
            <nav className="category-list">
                {categoriesData.map((ObjetoCategoria, i) => {
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