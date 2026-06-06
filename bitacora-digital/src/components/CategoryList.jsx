/*-------LISTADO DE CATEGORIAS (COMO GALERIA)--------*/

import CategoryCard from "../components/CategoryCard";
import categoriesData from "../data/categoriesData";
import "./CategoryList.css";

function CategoryList ({clickCategoryCallBack}) {

    return (
        //Capturamos la llamada del hijo y se la pasamos al padre por props.
        <>
            <div className="category-list">
                {categoriesData.map((ObjetoCategoria, i) => {
                    return (
                        <CategoryCard 
                            key={i}
                            categoria={ObjetoCategoria}
                            clickCategoryCallBack={clickCategoryCallBack}/>
                    )
                })}  
            </div>
             
        </>
    )
}

export default CategoryList;