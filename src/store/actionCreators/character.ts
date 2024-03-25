import { GET_CHARACTERS, GET_CHARACTERS_ERROR, GET_CHARACTERS_SUCCESS, RESET_CHARACTERS } from "../actions/character";
import { Character } from "@/types/character";
import { Result } from "@/types/result";

export function getCharactersAction(payload?: string) {
    return {
        type: GET_CHARACTERS,
        payload
    };
}

export function getCharactersSuccessAction(payload: Result<Character>) {
    return {
        type: GET_CHARACTERS_SUCCESS,
        payload
    };
}

export function getCharactersErrorAction(payload: any) {
    return {
        type: GET_CHARACTERS_ERROR,
        payload
    };
}

export function resetCharactersAction() {
    return {
        type: RESET_CHARACTERS
    };
}