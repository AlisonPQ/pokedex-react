import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Stack, Button } from '@mui/material';
import { push } from 'connected-react-router';

import PokemonCard from './PokemonCard';
import PokemonAppBar from '../common/AppBar';
import { getPokemonAvatar, getPokemonIdFromUrl } from '../../utils/pokemon.utils';
import { creators } from '../../store/pokemon/pokemon.actions';

const mapStateToProps = ({
    pokemons,
    data: {
        pokemon_list, 
        list_loading,
        list_loaded,
        list_error
    }
}) => ({
    pokemons,
    pokemonList: pokemon_list,
    listLoading: list_loading,
    listLoaded: list_loaded,
    listError: list_error
});

const mapActionsToProps = {
    getPokemonList: creators.get_pokemon_list_attempted,
    redirect: push
  };

const PokemonPage = ({
    pokemonList, listLoading, listLoaded, listError,
    getPokemonList, redirect
}) => {

    const [offset, setOffset] = useState(0);
    const limit = 10;

    useEffect(() => {
        getPokemonList({limit: limit, offset: offset});
    }, [getPokemonList, offset]);

    return (
        <Stack>
            <PokemonAppBar label={'Pokedex'}/>
            <Stack spacing={2} direction='row' margin={1} justifyContent="center">
                <Button variant="contained" onClick={() => setOffset(offset - limit)}>Previous</Button>
                <Button variant="contained" color='secondary' onClick={() => setOffset(offset + limit)} >Next</Button>
            </Stack>
            <Grid container  alignItems="center" justifyContent="center">
                {pokemonList ? pokemonList.map((pokemon, index) => {
                    const pokemonId = getPokemonIdFromUrl(pokemon.url);
                    return <PokemonCard
                                redirect={redirect}
                                pokemonId={pokemonId}
                                key={`${index+1}`} 
                                pokemonName={pokemon.name} 
                                pokemonAvatarUrl={getPokemonAvatar(pokemonId)}/>;
                }) : null }
            </Grid>
        </Stack>
    );
}

export default connect(mapStateToProps, mapActionsToProps)(PokemonPage);