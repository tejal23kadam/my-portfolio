import React, { useEffect, useRef, useState } from 'react'
import { sectionIds } from './sectionIds';
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
    //function to detrmine the active section while scrolling

    const determineActiveSection = () => {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
            const section = document.getElementById(sectionIds[i]);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    //set active link
                    setActiveLink(sectionIds[i]);
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
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
                <nav id="navmenu" className="navmenu" >
                     {/* <ul>
                    {sectionIds.map((sectionId, i) => (
                        <li key={i} onClick={() => scrollToSection(sectionId)}>
                            <Link to="/" className={activeLink === sectionId ? "active" : ""}>{sectionId}</Link>
                        </li>
                    ))}
                </ul>  */}
                    <ul  >
                        <li key={0} onClick={() => scrollToSection('hero')}>
                            <Link to="/" className={activeLink === "hero" ? "active" : ""}><i class="bi bi-house navicon"></i>Home</Link>
                        </li>
                        <li key={1} onClick={() => scrollToSection('about')}>
                            <Link to="/" className={activeLink === "about" ? "active" : ""}><i class="bi bi-person navicon"></i>About</Link>
                        </li>
                        <li key={2} onClick={() => scrollToSection('skills')}>
                            <Link to="/" className={activeLink === "skills" ? "active" : ""}><i class="bi bi-gear navicon"></i>Skills</Link>
                        </li>
                        <li key={3} onClick={() => scrollToSection('services')}>
                            <Link to="/" className={activeLink === "services" ? "active" : ""}><i class="bi bi-hdd-stack navicon"></i>Services</Link>
                        </li>
                        <li key={3} onClick={() => scrollToSection('resume')}>
                            <Link to="/" className={activeLink === "resume" ? "active" : ""}><i class="bi bi-file-earmark-text navicon"></i>Resume</Link>
                        </li>
                        <li key={4} onClick={() => scrollToSection('portfolio')}>
                            <Link to="/" className={activeLink === "portfolio" ? "active" : ""}><i class="bi bi-images navicon"></i>Portfolio</Link>
                        </li>
                        <li key={5} onClick={() => scrollToSection('contact')}>
                            <Link to="/" className={activeLink === "contact" ? "active" : ""}><i class="bi bi-telephone navicon"></i>contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default NavBar 