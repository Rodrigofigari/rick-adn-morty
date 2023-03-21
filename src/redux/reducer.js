import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./type-actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const Reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.myFavorites, actions.payload],
        allCharacters: [...state.allCharacters, actions.payload],
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== actions.payload
        ),
        allCharacters: state.myFavorites.filter(
          (character) => character.id !== actions.payload
        ),
      };
    case FILTER:
      return actions.payload === "All"
        ? { ...state, myFavorites: [...state.allCharacters] }
        : {
            ...state,
            myFavorites: state.allCharacters.filter(
              (character) => character.gender === actions.payload
            ),
          };
    case ORDER:
      return {
        ...state,
        myFavorites:
          actions.payload === "Ascendente"
            ? [...state.allCharacters].sort((a, b) => a.id - b.id)
            : [...state.allCharacters].sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default Reducer;
