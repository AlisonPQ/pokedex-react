import { ofType } from 'redux-observable';
import { creators, types } from './pokemon.actions';
import { from } from 'rxjs';
import { switchMap, map, catchError} from 'rxjs/operators';
import { getPokemoms } from '../../services/pokemon.service';

const getPokemomList = (actions$) => actions$.pipe(
    ofType(types.GET_POKEMON_LIST_ATTEMPTED),
    switchMap(({ payload: { limit, offset } }) => from(
        getPokemoms(limit, offset)
    ).pipe(
        map((payload) => creators.get_pokemon_list_successful(payload)),
        catchError((error) => creators.get_pokemon_list_error(error)),
    )),
);

export default getPokemomList;
