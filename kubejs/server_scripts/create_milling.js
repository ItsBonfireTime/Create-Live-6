//priority: 1
//Create Live 6 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "create:milling",
    ingredients: [{ item: "create:scoria" }],
    processing_time: 100,
    results: [
      {
        chance: 0.1,
        id: "minecraft:soul_sand",
        count: 1,
      },
    ],
  });
});
