import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

export default function NavBar({ onSearch }) {
  let numRandmon = () => {
    return Math.floor(Math.random() * 826);
  };

  return (
    <div className={style.Links}>
      <SearchBar onSearch={onSearch} numRandmon={numRandmon} />
      <div
        style={{
          marginLeft: "5%",
          display: "flex",
          justifyContent: "space-around",
          //   border: "red solid 2px",
          width: "12%",
        }}
      >
        <NavLink className={style.active} to="/home">
          Home
        </NavLink>
        <NavLink className={style.active} to="/favorites">
          Favs
        </NavLink>
        <NavLink className={style.active} to="/about">
          About
        </NavLink>
        <NavLink className={style.active} to="/">
          LogOut
        </NavLink>
      </div>
    </div>
  );
}
