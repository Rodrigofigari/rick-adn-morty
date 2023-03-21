import { connect, useDispatch } from "react-redux";
import Fav from "./Fav";
import style from "../Cards/Cards.module.css";
import { filterCards, orderCards } from "../../redux/action";

export const Favorites = (props) => {
  const dispatch = useDispatch();

  const ordenar = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const filtrar = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div>
        <select
          style={{
            padding: "0.5rem",
            fontSize: "large",
            borderRadius: "2rem",
          }}
          onChange={ordenar}
        >
          <option hidden>Order</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          style={{
            padding: "0.5rem",
            fontSize: "large",
            borderRadius: "2rem",
            marginLeft: "0.5%",
          }}
          onChange={filtrar}
        >
          <option hidden>Filter</option>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      <div className={style.listItem}>
        {props.estateFav.map((fav) => (
          <Fav
            id={fav.id}
            key={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
          />
        ))}
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    estateFav: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
