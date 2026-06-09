/*------- SUBCOMPONENTE:
INFORMACIÓN DE CADA CATEGORIA PARA EL COMPONENTE -> LISTADO DE CATEGORIAS (GALERIA)--------*/

import "./CategoryCard.css";


function CategoryCard ({categoria, clickCategoryCallBack}) {
    return(
        //Avisame cuando hagan click en una categoria e indicame cual. (enviaselo al padre )
        <>
            <div className="category-card"
            onClick={() => {clickCategoryCallBack(categoria.id)}}
            >
                <div>
                    <img src={categoria.imagen} alt={categoria.nombre} />
                </div>
                <div>
                    <h2>{categoria.nombre}</h2>
                </div>
            </div>
        </>
    )
}

export default CategoryCard