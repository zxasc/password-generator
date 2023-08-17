import { createSlice } from '@reduxjs/toolkit'

export const generatorSlice = createSlice({
    name: 'generator',
    initialState: {
        password: 'password',
        length: 16,
        entropy: 10,
        characters: [
            {id: 'uppercase', enabled: true, set: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']},
            {id: 'lowercase', enabled: true, set: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']},
            {id:'numbers', enabled: false, set: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}, 
            {id:'symbols', enabled: false, set: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', '{', ']', '}', '|', '\\', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?', '`', '~']}
        ],
    },
    reducers: {
        changePassword: (state, action) => {
            return {
                ...state, 
                password: action.payload
            }; 
        },
        changeLength: (state, action) => {
            return {
                ...state, 
                length: action.payload
            };
        },
        changeEntropy: (state, action) => {
            return {
                ...state, 
                entropy: action.payload
            };
        },
        toggleCharacters: (state, action) => {
            return {
                ...state,
                characters: state.characters.map(character => {
                    if(character.id !== action.payload.id) {
                        return character
                    }
                    return {
                        ...character,
                        enabled: action.payload.checked
                    }
                })
            };
        },
    },
})

export const { changePassword, changeLength, changeEntropy, toggleCharacters } = generatorSlice.actions

export const selectGenerator = (state) => state.generator

export default generatorSlice.reducer