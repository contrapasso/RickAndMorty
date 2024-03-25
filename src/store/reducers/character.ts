import { ICharacter } from "@/types/interfaces/ICharacter";
import { createReducer } from "@reduxjs/toolkit";
import { GET_CHARACTERS_ERROR, GET_CHARACTERS_SUCCESS, RESET_CHARACTERS } from "../actions/character";
import { Result } from "@/types/result";

interface ReducerState {
  characters: Result<ICharacter> | null
}

const initialState: ReducerState = {
  characters: null,
}


export const character = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_CHARACTERS_SUCCESS, (state, action: any) => {
      state.characters = action.payload;
    })
    .addCase(GET_CHARACTERS_ERROR, (state, action: any) => {
      state.characters = action.payload;
    })
    .addCase(RESET_CHARACTERS, (state) => {
      state.characters = initialState.characters;
    });
})