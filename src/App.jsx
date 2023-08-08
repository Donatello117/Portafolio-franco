import { NavBar } from "./components";
import {
  Contacto,
  Proyectos,
  Servicios,
  SobreMi,
  Tegnologias,
} from "./pages";

export const PortafoliosApp = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Servicios />
        <SobreMi />
        <Tegnologias />
        <Proyectos />
        <Contacto />
      </div>
    </div>
  );
};
