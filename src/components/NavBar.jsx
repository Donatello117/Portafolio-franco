import "./NavBar.css";
import {SobreMi} from "../pages";
import logo from "../assets/LogoII.png";


export const NavBar = () => {
  // const navToggle = document.querySelector(".nav-toggle");
  // const navMenu = document.querySelector(".nav-menu");

  // navToggle.addEventListener("click", () => {
  //   navMenu.classList.toggle("nav-menu_visible");

  //   if (navMenu.classList.toggle("nav-menu_visible")) {
  //     navToggle.setAttribute("aria-label", "cerra menu");
  //   } else {
  //     navToggle.setAttribute("aria-label", "Abrir menu");
  //   }
  // });

  return (
    <div className="Container">
      <div className="nav-bar">
        <div class="bar"></div>
        <div className="nav">
          <img src={logo} className="logo-image"/>
          <div className="nav-menu">
            <li className="nav-menu-item" onClick={SobreMi}>Sobre mi</li>
            <li className="nav-menu-item">Tecnologias</li>
            <li className="nav-menu-item">Proyectos</li>
            <li className="nav-menu-item">contacto</li>
          </div>
        </div>
      </div>
    </div>
  );
};
