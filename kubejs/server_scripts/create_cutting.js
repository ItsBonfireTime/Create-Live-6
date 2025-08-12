//priority: 1
//Create Live 6 Custom Recipes
//Author: RGB Pixl

ServerEvents.recipes((event) => {
  event.custom({
    type: "create:cutting",
    ingredients: [{ item: "createfood:cheese_pizza" }],
    processingTime: 20,
    results: [{ id: "createfood:cheese_pizza_slice", count: 4 }],
  });

  event.custom({
    type: "create:cutting",
    ingredients: [{ item: "createfood:sausage_pizza" }],
    processingTime: 20,
    results: [{ id: "createfood:sausage_pizza_slice", count: 4 }],
  });

  event.custom({
    type: "create:cutting",
    ingredients: [{ item: "createfood:sausage_mushroom_pizza" }],
    processingTime: 20,
    results: [{ id: "createfood:sausage_mushroom_pizza_slice", count: 4 }],
  });
});
