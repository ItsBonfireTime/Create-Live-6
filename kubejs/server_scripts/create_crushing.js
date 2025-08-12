//priority: 1
//Create Live 6 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "create:crushing",
    ingredients: [{ item: "create:scoria" }],
    processing_time: 250,
    results: [
      {
        chance: 0.25,
        id: "minecraft:soul_sand",
        count: 1,
      },
    ],
  });
});
