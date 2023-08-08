import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./Contacto.css";


export const Contacto = () => {
  return (
    <div className="container">
      <h1>CONTACTO</h1>
      <div className="contactos">
        {contac.map(({ icon, nombre }) => (
          <div className="card">
            <div className="icono">{icon}</div>
            <div className="nombre">{nombre}</div>
          </div>
        ))}
        <div className="world"></div>
      </div>
    </div>
  );
};

const contac = [
  {
    icon: <BsLinkedin />,
    nombre: <h5>Linkedin</h5>,
  },
  {
    icon: <AiOutlineMail />,
    nombre: <h5>mail</h5>,
  },
  {
    icon: <BsGithub />,
    nombre: <h5>GitHub</h5>,
  },
];
