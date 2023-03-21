import styled from "styled-components";
import React from "react";
import { useState } from "react";

const DivInput = styled.input`
  border-radius: 5px;
  padding: 11px;
  width: 170px;
  margin-right: 2px;
`;

const DivButon = styled.button`
  border-radius: 5px;
  margin: 2px;
  padding: 10px;
  background-color: aquamarine;
  font-size: medium;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: #262623c9;
    color: beige;
  }
`;

export default function SearchBar({ onSearch, numRandmon }) {
  const [character, setCharacter] = useState("");

  let inputChange = (event) => {
    const valor = event.target.value;
    setCharacter(valor);
  };

  function enter(e) {
    if (e.keyCode === 13) {
      onSearch(character);
      setCharacter("");
    }
  }
  window.onkeydown = enter;

  return (
    <div>
      <DivInput
        type="number"
        value={character}
        placeholder="Ingresar ID del personaje"
        onChange={inputChange}
      />

      <DivButon
        onClick={() => {
          onSearch(character);
          setCharacter("");
        }}
      >
        Agregar
      </DivButon>

      <DivButon
        onClick={() => {
          onSearch(numRandmon());
        }}
      >
        Agregar Random
      </DivButon>
    </div>
  );
}
