import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const [character, setCharacter] = useState({});
  let { detailId } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });

    return setCharacter({}); // --> esto hace que cada vez que el componente se desmonte borra la info del estado??
  }, [detailId]); // Para que esta la dependencia??

  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        padding: "3%",
      }}
    >
      <div className={style.contenedor}>
        <img
          className={style.imgStyle}
          src={character.image}
          alt="img not found"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2 className={style.titulos}>{character.name}</h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              "justify-content": "space-around",
            }}
          >
            <h4 className={style.titulos}> {character.status}</h4>
            <h4 className={style.titulos}> {character.species}</h4>
            <h4 className={style.titulos}> {character.gender}</h4>
          </div>
        </div>
        <br></br>

        <Link to="/home">
          {" "}
          <button className={style.button}>Back To Home</button>{" "}
        </Link>
      </div>
    </div>
  );
}
