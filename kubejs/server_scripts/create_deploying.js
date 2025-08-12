//priority: 1
//Create Live 6 Custom Recipes
//Author: RGB Pixl

ServerEvents.recipes((event) => {
  event.custom({
    type: "create:deploying",
    ingredients: [
      {
        item: "createfood:pizza_dough_tomato_sauce",
      },
      {
        item: "createfood:cheese_slice",
      },
    ],
    results: [{ id: "createfood:raw_cheese_pizza" }],
  });

  event.custom({
    type: "create:deploying",
    ingredients: [
      {
        item: "createfood:raw_cheese_pizza",
      },
      {
        item: "createfood:spicy_breakfast_sausages",
      },
    ],
    results: [{ id: "createfood:raw_sausage_pizza" }],
  });

  event.custom({
    type: "create:deploying",
    ingredients: [
      {
        item: "createfood:raw_sausage_pizza",
      },
      {
        tag: "c:mushrooms",
      },
    ],
    results: [{ id: "createfood:raw_sausage_mushroom_pizza" }],
  });
});
