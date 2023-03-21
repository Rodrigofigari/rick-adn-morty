import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCharacter, deleteCharacter } from "../../redux/action";
import { useState, useEffect } from "react";

export function Card({
  name,
  species,
  image,
  gender,
  onClose,
  id,
  addCharacter,
  deleteCharacter,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteCharacter(id);
    } else {
      setIsFav(true);
      addCharacter({ name, species, image, gender, onClose, id });
    }
  };

  useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === id) setIsFav(true);
    }
  }, [id, myFavorites]);

  return (
    <div className={style.card}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link className={style.link} to={`/detail/${id}`}>
          <h2
            style={{
              width: "13rem",
              height: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className={style.nombre}
          >
            {name}
          </h2>
        </Link>
        <div
          style={{
            display: "flex",
            width: "30%",
            alignItems: "center",
          }}
        >
          {isFav ? (
            <button className={style.corazon} onClick={handleFavorite}>
              ❤️
            </button>
          ) : (
            <button className={style.corazon} onClick={handleFavorite}>
              🤍
            </button>
          )}
          <button className={style.boton} onClick={() => onClose(id)}>
            X
          </button>
        </div>
      </div>
      <img src={image} alt="img not found" />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter: (char) => dispatch(addCharacter(char)),
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
