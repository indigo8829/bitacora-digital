import AboutBitacora from "./components/AboutBitacora";
import ContactCta from "./components/ContactCta";
import FeacturedSection from "./components/FeaturedProjects";
import IndexHero from "./components/IndexHero";
import PersonalPresentation from "./components/PersonalPresentation";
import TopicsSection from "./components/TopicsSection";

import "./Index.css";

function Index () {
    return (
         //Contenido principal de página.
        <>
            <main className="index">
                <section className="index-a">
                    <div>
                        <IndexHero/>
                        <AboutBitacora/>
                    </div>
                    <aside>
                        <PersonalPresentation/>
                    </aside>
                </section>
                <section>
                    <TopicsSection/>
                </section>
                <section>
                    <FeacturedSection/>
                </section>
               
                <section>
                    <ContactCta/>
                </section>
            </main>           
        </>
    )
}

export default Index;