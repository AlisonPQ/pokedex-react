import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';

import { history } from '../store/root.store';
import PokemonPage from './pokemon/PokemonPage';
import PokemonDetails from './pokemon/PokemonDetails';

const AppRouter = () => (
    <BrowserRouter history={history}>
        <Routes>
            <Route exact path='/' element={ <PokemonPage/> }/>
            <Route path='/pokemon/:pokemonId' element={ <PokemonDetails />}/>
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
