//priority: 1
//Create Live 6 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "create:splashing",
    ingredients: [{ item: "minecraft:echo_shard" }],
    results: [{ id: "minecraft:amethyst_shard" }],
  });
});
