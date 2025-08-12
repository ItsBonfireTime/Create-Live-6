//priority: 1
//Create Live 6 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ item: "create_chocolate:dark_chocolate_fence" }],
    result: [
      {
        item: {
          count: 1,
          id: "kubejs:tung_tung",
        },
      },
    ],
    tool: {
      tag: "c:tools/knife",
    },
  });
});
