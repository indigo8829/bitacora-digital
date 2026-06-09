import ArticleCard from "./components/ArticleCard";
import mihistoriaData from "../../data/mihistoriaData";
import PersonalPresentation from "../index/components/PersonalPresentation"
import CustomButton from "../../components/CustomButton";

import "./components/MiHistoria.css"

function MiHistoria () {
    return (
        <>
            <main className="mi-historia">
                <h1>Mi historia</h1>
                <section>
                    {mihistoriaData.map((historia, i) => {
                        return (
                            <ArticleCard
                            key={i}
                            articulo={historia}
                            />
                        )
                    })}
                </section>
                <div className="index-hero-container-button">
                    <CustomButton
                    destino="/bitacora"
                    texto="Explorar la Bitácora"
                    />
                </div>
            </main>
        </>
       
    )
}

export default MiHistoria;