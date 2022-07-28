import { createReducers } from 'redux-arc';
import { types } from './pokemon.actions';

const INITIAL_STATE = {
    pokemon_list: [],
    list_loading: false,
    list_loaded: false,
    list_error: false,
};

const onGetPokemonListAttempted = (state) => ({
    ...state,
    list_loading: true,
    list_loaded: false,
    list_error: false,
});

const onGetPokemonListSuccessful = (state, action) => {
    const { payload } = action;

    return {
        ...state,
        pokemon_list: payload,
        list_loading: false,
        list_loaded: true,
        list_error: false,
    };
};

const onGetPokemonListFailed = (state) => ({
    ...state,
    list_loading: false,
    list_loaded: false,
    list_error: true,
});

const HANDLES = {
    [types.GET_POKEMON_LIST_ATTEMPTED]: onGetPokemonListAttempted,
    [types.GET_POKEMON_LIST_SUCCESSFUL]: onGetPokemonListSuccessful,
    [types.GET_POKEMON_LIST_FAILED]: onGetPokemonListFailed,
};

export default createReducers(INITIAL_STATE, HANDLES);
