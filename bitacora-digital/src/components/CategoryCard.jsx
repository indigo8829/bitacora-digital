import "./CategoryCard.css";


function CategoryCard ({categoria}) {
    return (
        <>
            <div className="category-card">
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

export default CategoryCard;