import Imagen from "../../img/foto cv.jpg";

let h2 = {
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  borderRadius: "10px",
  padding: "5%",
  width: "60%",
};

let styleImg = {
  height: "20%",
  width: "10%",
  borderRadius: "50%",
};

let styleDiv = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

let About = () => {
  return (
    <div style={styleDiv}>
      <img style={styleImg} src={Imagen} alt="img not found" />
      <h2 style={h2}>
        ¡Hola! Soy Rodrigo Figari, el desarrollador detrás de esta aplicación
        web.
        <br></br>
        <br></br>
        Quiero compartir este sitio que he creado utilizando HTML, CSS, JS,
        React y Redux. Para el diseño y estilo de la aplicación, utilicé una
        variedad de técnicas, incluyendo estilos en línea, styled-components y
        module.css para crear una experiencia visualmente funcional.
        <br></br>
        <br></br>
        Este proyecto fue desarrollado como parte de mi práctica en el segundo
        módulo de Soy Henry, un bootcamp de desarrollo fullstack. Pude aplicar
        mis habilidades y conocimientos para crear esta aplicación web. Espero
        que disfrutes. ¡Gracias por visitar mi sitio!
      </h2>
    </div>
  );
};

export default About;
