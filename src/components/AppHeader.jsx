import { NavLink } from "react-router-dom";


const AppHeader = () => {


    const navLinks = [
        {
            titolo: "Home",
            url: "/"
        },
        {
            titolo: "About",
            url: "/about"
        },
        {
            titolo: "AllPosts",
            url: "/posts"
        },

        {
            titolo: "Upload",
            url: "/posts/upload"
        }, 
    ];





    return (
        <header>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {navLinks.map((curEl, index) => (
                                <li key={index} className="nav-item">
                                    <NavLink className="nav-link " aria-current="page" to={curEl.url}> {curEl.titolo}</NavLink></li>

                            ))}


                        </ul>
                    </div>
                </div>
            </nav>

        </header>

    )
}

export default AppHeader    