import axios from 'axios';

const getPokemoms = async (limit, offset) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await axios.get(url);
    return res.data['results'];
}

export {
    getPokemoms,
};
