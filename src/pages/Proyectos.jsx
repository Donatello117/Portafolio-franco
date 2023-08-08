import "./Proyectos.css";


export const Proyectos = () => {
  return (
    <div className="container-Proy">
      <h1>PROYECTOS</h1>
      <div className="Grid-proy">
        {proy.map(({ imagen, titulo, descripcion }) => (
          <div className="Card-proy">
            <div className="img">{imagen}</div>
            <div className="title">{titulo}</div>
            <div className="description">{descripcion}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
//proyectos
const proy = [
  {
    imagen: <h1>imagen</h1>,
    titulo: <h4>lorem</h4>,
    descripcion: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur ad
        sit sint, sunt fugit provident neque minus eveniet accusamus debitis
        maxime consectetur architecto officia rem, laudantium voluptatibus,
        harum dolore.
      </p>
    ),
  },
  // {
  //   imagen: <h1>imagen</h1>,
  //   titulo: <h4>lorem</h4>,
  //   descripcion: (
  //     <p>
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur ad
  //       sit sint, sunt fugit provident neque minus eveniet accusamus debitis
  //       maxime consectetur architecto officia rem, laudantium voluptatibus,
  //       harum dolore.
  //     </p>
  //   ),
  // },
];
