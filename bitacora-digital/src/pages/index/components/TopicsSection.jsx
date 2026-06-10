// componente padre de las tarjetas de las categorias de la página de inicio

import TopicCard from "./TopicCard"
import categoriesData from "../../../data/categoriesData";
import "./TopicsSection.css"
import CustomButton from "../../../components/CustomButton";


function TopicsSection () {
    const temas = categoriesData.filter((ObjCategoria) => ObjCategoria.id !== 1);

    return (
        <>
            <div className="topics-section">
                <div>
                    <h2>Los Temas que encontraras aquí</h2>
                </div>
                <div className="contenedor-topic-cards">
                    {temas.map((tema,i) => {
                        return (
                            <TopicCard
                                key={i}
                                categoria={tema}
                            />
                        )
                    })}
                </div>
                <div className="index-hero-container-button">
                    <CustomButton
                    destino="/bitacora"
                    texto="Explorar la Bitácora"
                    />
                </div>
            </div>
        </>
    )
}

export default TopicsSection