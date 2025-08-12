//priority: 1
//Create Live 6 Custom Recipes
//Author: Blizzor & RGB Pixl

ServerEvents.recipes((event) => {
  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      {
        item: "ars_nouveau:abjuration_essence",
      },
      {
        type: "fluid_stack",
        amount: 250,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 250,
        id: "kubejs:liquid_abjuration_essence",
      },
    ],
  });

  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      {
        item: "ars_nouveau:conjuration_essence",
      },
      {
        type: "fluid_stack",
        amount: 250,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 250,
        id: "kubejs:liquid_conjuration_essence",
      },
    ],
  });

  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      {
        item: "ars_nouveau:air_essence",
      },
      {
        type: "fluid_stack",
        amount: 250,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 250,
        id: "kubejs:liquid_air_essence",
      },
    ],
  });

  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      {
        item: "ars_nouveau:earth_essence",
      },
      {
        type: "fluid_stack",
        amount: 250,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 250,
        id: "kubejs:liquid_earth_essence",
      },
    ],
  });

  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      {
        item: "ars_nouveau:fire_essence",
      },
      {
        type: "fluid_stack",
        amount: 250,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 250,
        id: "kubejs:liquid_fire_essence",
      },
    ],
  });

  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      {
        item: "ars_nouveau:manipulation_essence",
      },
      {
        type: "fluid_stack",
        amount: 250,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 250,
        id: "kubejs:liquid_manipulation_essence",
      },
    ],
  });

  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      {
        item: "ars_nouveau:water_essence",
      },
      {
        type: "fluid_stack",
        amount: 250,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 250,
        id: "kubejs:liquid_water_essence",
      },
    ],
  });

  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      {
        item: "createfood:shredded_beetroot",
      },
      {
        item: "createfood:shredded_carrot",
      },
      {
        item: "createfood:salt",
      },
    ],
    results: [{ id: "createfood:paprika", count: 8 }],
  });

  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 1000,
        fluid: "minecraft:water",
      },
    ],
    results: [{ id: "createfood:salt", count: 16 }],
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:quartz",
      },
      {
        item: "minecraft:quartz",
      },
      {
        item: "minecraft:cobblestone",
      },
      {
        item: "minecraft:cobblestone",
      },
    ],
    results: [{ id: "minecraft:diorite", count: 2 }],
  });

  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      {
        item: "farmersdelight:tomato",
      },
      {
        item: "farmersdelight:tomato",
      },
      {
        tag: "c:salt",
      },
    ],
    results: [
      {
        amount: 1000,
        id: "kubejs:tomato_sauce",
      },
    ],
  });

  event.custom({
    type: "create:mixing",
    heat_requirement: "superheated",
    ingredients: [
      {
        item: "create_deep_dark:echo_ingot",
      },
    ],
    results: [
      {
        amount: 100,
        id: "create_deep_dark:molten_echo",
      },
      {
        chance: 0.2,
        item: {
          id: "minecraft:netherite_scrap",
        },
      },
    ],
  });
});
