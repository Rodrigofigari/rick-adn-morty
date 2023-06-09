import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./type-actions";

export const addCharacter = (char) => {    
    return {
        type: ADD_CHARACTER,
        payload: char
    }
}

export const deleteCharacter = (id) => {    
    return {
        type: DELETE_CHARACTER,
        payload: id
    }
}

export const filterCards = (status) => {
    return{
        type: FILTER,
        payload: status
    }
}

export const orderCards = (id) => {
    return{
        type: ORDER,
        payload: id
    }
}