import styled from "styled-components";
import "./Tegnologias.css";
import {
  SiJavascript,
  SiFirebase,
  SiRedux,
  SiMui,
  SiBootstrap,
  SiNetlify,
  SiVite,
  SiPython,
} from "react-icons/si";
import { DiNpm } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaJava } from "react-icons/fa";

export const Tegnologias = () => {
  return (
      <div className="container">
        <div className="titulo">
          <h1>TECNOLOGIAS</h1>
        </div>
        <div className="grid">
          {Lenguajes.map(({ icon, label }) => (
            <div className="card">
              <div className="icon">{icon}</div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </div>
  );
};
//iconos
const Lenguajes = [
  {
    icon: <IoLogoCss3 />,
    label: <h5>CSS</h5>,
  },
  {
    icon: <AiFillHtml5 />,
    label: <h5>HTML</h5>,
  },
  {
    icon: <SiJavascript />,
    label: <h5>javascript</h5>,
  },
  {
    icon: <FaReact />,
    label: <h5>react</h5>,
  },
  {
    icon: <SiFirebase />,
    label: <h5>Firebase</h5>,
  },
  {
    icon: <BsGit />,
    label: <h5>git</h5>,
  },
  {
    icon: <DiNpm />,
    label: <h5>NPM</h5>,
  },
  {
    icon: <SiRedux />,
    label: <h5>redux</h5>,
  },
  {
    icon: <SiMui />,
    label: <h5>MUI</h5>,
  },
  {
    icon: <SiBootstrap />,
    label: <h5>Bootstrap</h5>,
  },
  {
    icon: <SiNetlify />,
    label: <h5>Netlify</h5>,
  },
  {
    icon: <SiVite />,
    label: <h5>Vite</h5>,
  },
  // {
  //   icon: <FaJava />,
  //   label: <h5>Java</h5>,
  // },
  // {
  //   icon: <SiPython />,
  //   label: <h5>Python</h5>,
  // },
  // {
  //   icon: <SiPython />,
  //   label: <h5></h5>,
  // },
  // {
  //   icon: <SiPython />,
  //   label: <h5></h5>,
  // },
];
