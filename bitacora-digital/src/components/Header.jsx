import NavBar from "./NavBar.jsx"
import "./Header.css"

function Header () {
    return (
        //Logotipo, nombre y barra de navegación principal
        <>
            <header className="header-container">
                <div>
                    <img src="https://picsum.photos/200" alt="" />
                </div>
                <h1>Bitácora Digital</h1>
                <NavBar/>
            </header>

        </>
    )
}

export default Header;