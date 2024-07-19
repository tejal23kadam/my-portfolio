import React, { useEffect, useState } from 'react'
import { navSections }  from './navSections';
import { Link } from 'react-router-dom';

function NavBar() {

    //state to track the active link and scroll state
    const [activeLink, setActiveLink] = useState("hero");
    const [isScrolled, setIsScrolled] = useState(false);

    //function to smoothly scroll to a section by its Id

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            //adjust margin top value ad needed
            const marginTop = 0; 
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({ top: scrollToY, behavior: "smooth" });
        }
    }
   
    //map an array of object to a single dimantion array for section name
    const newArraySecName= navSections.map((section) => (section.secName ))   

    //function to detrmine the active section while scrolling 
    const determineActiveSection = () => {
        for (let i = newArraySecName.length - 1; i >= 0; i--) {
            const section = document.getElementById(newArraySecName[i]);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    //set active link
                    setActiveLink(newArraySecName[i]);
                    break;
                }
            }
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
            determineActiveSection();
        };
        window.addEventListener("scroll", handleScroll);
        //remove the scroll event listner when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // code for responsive design that shows and hides left side navbar 
    
    const [isOpen, setIsOpen] = useState(false);
    const [showHide, setShowHide] = useState("header");
    const toggle = () => {
        setIsOpen(!isOpen);
        !isOpen ? setShowHide("header") : setShowHide("leftZero");
        showHide !== "header" ? setShowHide("header") : setShowHide("leftZero");
    }
    return (
        <div id="header" className="header dark-background d-flex flex-column">
            <i className="headerToggle d-xl-none " onClick={toggle}>
                <span className={isOpen ? 'bi bi-x' : 'bi bi-list'}></span>
            </i>
            <div className={showHide}>
                <div className="profile-img">
                    <img src={require('../sections/img/Cropped_Image.png')} alt="" className="img-fluid rounded-circle" />
                </div>
                <h1 className="sitename">Tejal Kadam</h1>
                <div class="social-links text-center">
                    <Link to="/"  className="facebook"><i class="bi bi-facebook"></i></Link>        
                    <Link to="/"  className="instagram"><i class="bi bi-instagram"></i></Link>            
                    <Link to="/"  className="google-plus"><i class="bi bi-skype"></i></Link>  
                    <Link to="/"  className="linkedin"><i class="bi bi-linkedin"></i></Link>                      
                </div>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        {navSections.map((section, i) => (
                            <li key={i} onClick={() => scrollToSection(section.secName)}>
                                <Link to="/" className={activeLink === section.secName ? "active" : ""}><i class={section.icon}></i>{section.secName}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default NavBar 