import { combineEpics } from 'redux-observable';
import appInfoLoadEpic from './app-info/app-info.epics';
import pokemonEpic from './pokemon/pokemon.epics';

const rootEpic = combineEpics(
  appInfoLoadEpic,
  pokemonEpic,
);

export default rootEpic;
