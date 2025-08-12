//priority: 1
//Create Live 6 Custom Recipes
//Author: RGB Pixl

ServerEvents.recipes((event) => {
  event
    .smoking("createfood:cheese_pizza", "createfood:raw_cheese_pizza")
    .xp(0.35);

  event
    .smoking("createfood:sausage_pizza", "createfood:raw_sausage_pizza")
    .xp(0.35);

  event
    .smoking(
      "createfood:sausage_mushroom_pizza",
      "createfood:raw_sausage_mushroom_pizza"
    )
    .xp(0.35);
});
