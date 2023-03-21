import styled from "styled-components";
import style from "../Card/Card.module.css";
import { Link } from "react-router-dom";

const H2name = styled.h2`
  width: 60%;
  color: black;
  background-color: rgb(233, 238, 240);
  border-radius: 5px;
  box-shadow: 0 0 20px rgb(134, 154, 134);
  width: 60%;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    background-color: rgb(34, 38, 39);
    color: rgb(233, 238, 240);
    cursor: pointer;
  }
`;

const Fav = (props) => {
  return (
    <div className={style.card}>
      <Link
        style={{
          textDecoration: "none",
        }}
        to={`/detail/${props.id}`}
      >
        <H2name> {props.name} </H2name>
      </Link>
      <img src={props.image} alt="img not found" />
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
    </div>
  );
};

export default Fav;
