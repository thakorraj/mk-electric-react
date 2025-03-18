import {Link} from 'react-router-dom';
const HeaderComponent = () => {
    return (
        <>
            <header role="banner" className="position-absolute">
                {/* Top Navigation */}
                <nav className="background-transparent background-transparent-hightlight full-width sticky">
                    <div className="s-12 l-2 custom-margin">
                        <a href="index.html" className="logo text-white text-extra-strong">
                            Mk Electric Inc
                            {/* Logo White Version */}
                            {/* <img className="logo-white" src="img/logo.png" alt=""> */}
                                {/* Logo Dark Version
                                <img className="logo-dark" src="img/logo-dark.png" alt=""> */}
                                </a>
                            </div>
                            <p className="nav-text"><span></span></p>
                            <div className="top-nav s-12 l-10">
                                <ul className="right chevron">
                                    {/* <li><Link to="/"><a href="#">Home</a></Link></li>
                                    <li><Link to="/services"><a href="#">Services</a></Link></li> */}
                                    {/* <li><a href="products.html">About Us</a></li> */}
                                    {/* <li><Link to="/about"><a href="#">About Us</a></Link></li> */}
                                    {/* <li><a href="gallery.html">Careers</a></li> */}
                                    {/* <li><Link to="/"><a href="#">Contact</a></Link></li> */}
                                </ul>
                            </div>
                        </nav>
                    </header>
      
        </>
    );
}

export {HeaderComponent};