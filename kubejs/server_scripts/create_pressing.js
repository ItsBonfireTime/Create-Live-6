//priority: 1
//Create Live 6 Custom Recipes
//Author: RGB Pixl & Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "create:pressing",
    ingredients: [{ item: "createfood:salt_dough" }],
    results: [{ id: "createfood:pizza_dough", amount: 1 }],
  });
  event.custom({
    type: "create:pressing",
    ingredients: [{ item: "create:item_vault" }],
    results: [{ id: "create_sa:vault_component", amount: 1 }],
  });
});
