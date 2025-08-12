//priority: 1
//Create Live 6 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "ars_nouveau:imbuement",
    input: {
      tag: "c:gems/amethyst",
    },
    output: {
      count: 1,
      id: "ars_nouveau:source_gem",
    },
    pedestalItems: [],
    source: 500,
  });
});
