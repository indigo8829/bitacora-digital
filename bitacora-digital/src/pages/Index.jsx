import AboutBitacora from "../components/AboutBitacora";
import ContactCta from "../components/ContactCta";
import FeacturedSection from "../components/FeaturedProjects";
import IndexHero from "../components/IndexHero";
import PersonalPresentation from "../components/PersonalPresentation";
import TopicsSection from "../components/TopicsSection";

import "./Index.css";

function Index () {
    return (
         //Contenido principal de página.
        <>
            <main className="index">
                <h1>Inicio</h1>
                <section>
                    <IndexHero/>
                </section>
                <section>
                    <AboutBitacora/>
                </section>
                <section>
                    <TopicsSection/>
                </section>
                <section>
                    <FeacturedSection/>
                </section>
                <aside>
                    <PersonalPresentation/>
                </aside>
                <section>
                    <ContactCta/>
                </section>
            </main>           
        </>
    )
}

export default Index;