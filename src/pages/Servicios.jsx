import "./Servicios.css";
import foto from "../assets/Foto.png";


export const Servicios = () => {
  return (
      <div className="container-Servicio">
        <div className="rectangulo">
          <div className="texto">
            <h4>Mi nombre es</h4>
            <h1>FRANCO ANTILIPI</h1>
            <p>
              Soy un desarrollador fronted con habilidades en Javascript, HTML,
              CSS, React, Firebase y bases de datos SQL. Siempre estoy buscando
              aprender y mejorar mis habilidades para crear soluciones web de
              alta calidad.
            </p>
          </div>
          <img src={foto} className="foto-franco" />
        </div>
      </div>
  );
};