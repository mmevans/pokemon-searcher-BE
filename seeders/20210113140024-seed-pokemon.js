const Pokemon = require("./seed-files/pokemon");
const { Op } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    Pokemon.pokemon.map((pokemon) => console.log(pokemon.id));
    const pokemonList = Pokemon.pokemon.map((pokemon) => ({
      height: pokemon.height,
      weight: pokemon.weight,
      id: pokemon.id,
      pokemon_name: pokemon.name,
      abilities: JSON.stringify(pokemon.abilities),
      moves: JSON.stringify(pokemon.moves),
      stats: JSON.stringify(pokemon.stats),
      types: JSON.stringify(pokemon.types),
      sprites: JSON.stringify(pokemon.sprites),
    }));

    await queryInterface.bulkInsert("Pokemon", pokemonList);
  },
  down: async (queryInterface, Sequelize) => {
    const pokemonIds = Pokemon.pokemon.map((pokemon) => pokemon.id);

    await queryInterface.bulkDelete(
      "Pokemon",
      { id: { [Op.in]: pokemonIds } },
      {}
    );
  },
};
