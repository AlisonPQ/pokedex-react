const getPokemonAvatar = (pokemonId) => {
    const numberTo = `${pokemonId}`.padStart(3, '0');
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numberTo}.png`;
}

const getPokemonIdFromUrl = (url) => {
    const parseUrl = url.split('/');
    const id = parseUrl[parseUrl.length - 2];
    return +id;
}

export {
    getPokemonAvatar,
    getPokemonIdFromUrl,
};
