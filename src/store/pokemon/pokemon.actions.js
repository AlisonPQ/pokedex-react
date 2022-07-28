import { createActions } from 'redux-arc';

export const { creators, types } = createActions('pokemon', {
    get_pokemon_list_attempted: null,
    get_pokemon_list_successful: null,
    get_pokemon_list_failed: null,
}); 
