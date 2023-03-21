import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { deleteCharacter } from "../src/redux/action";

import { Routes, Route, useLocation } from "react-router-dom";

function App(props) {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [cache, setCache] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const username = "rickandmorty@mail.com";
  const password = "rickandmorty";

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else alert("El usuario y constrasela no son validos");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function onSearch(character) {
    if (cache.includes(character))
      return alert("Personaje duplicado no se puede");
    else {
      setCache([...cache, character]);
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else if (!character) {
            alert("Ingresar un numero de Id");
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    }
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
    setCache(cache.filter((num) => num !== id));
    props.deleteCharacter(id);
  }

  return (
    <div className="App">
      {pathname !== "/" ? <NavBar onSearch={onSearch} /> : null}
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:detailId" element={<Detail />} />
        <Route exact path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
  };
};

export default connect(null, mapDispatchToProps)(App);
