//priority: 1
//Create Live 6 Custom Recipes
//Author: Blizzor & RGB

ServerEvents.recipes((event) => {
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:liquid_manipulation_essence",
      },
      {
        item: "minecraft:andesite",
      },
    ],
    results: [
      {
        item: {
          id: "minecraft:diorite",
        },
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:liquid_manipulation_essence",
      },
      {
        item: "minecraft:diorite",
      },
    ],
    results: [
      {
        item: {
          id: "minecraft:granite",
        },
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:liquid_manipulation_essence",
      },
      {
        item: "minecraft:moss_block",
      },
    ],
    results: [
      {
        item: {
          id: "minecraft:grass_block",
        },
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:liquid_manipulation_essence",
      },
      {
        item: "minecraft:tuff",
      },
    ],
    results: [
      {
        item: {
          id: "minecraft:calcite",
        },
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:liquid_manipulation_essence",
      },
      { item: "minecraft:mycelium" },
    ],
    results: [{ item: { id: "minecraft:moss_block" } }],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:liquid_manipulation_essence",
      },
      {
        item: "minecraft:calcite",
      },
    ],
    results: [
      {
        item: {
          id: "minecraft:deepslate",
        },
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:liquid_manipulation_essence",
      },
      {
        item: "minecraft:grass_block",
      },
    ],
    results: [
      {
        item: {
          id: "minecraft:mycelium",
        },
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:liquid_manipulation_essence",
      },
      {
        item: "minecraft:granite",
      },
    ],
    results: [
      {
        item: {
          id: "minecraft:andesite",
        },
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:liquid_manipulation_essence",
      },
      {
        item: "minecraft:deepslate",
      },
    ],
    results: [
      {
        item: {
          id: "minecraft:tuff",
        },
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:ars_fire_fluid",
      },
      {
        tag: "c:stones",
      },
    ],
    results: [
      {
        item: {
          id: "minecraft:magma_block",
        },
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:ars_conjuration_fluid",
      },
      {
        tag: "c:sands",
      },
    ],
    results: [
      {
        item: {
          id: "minecraft:soul_sand",
        },
      },
    ],
  });

  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 10,
        fluid: "kubejs:ars_conjuration_fluid",
      },
      {
        tag: "c:stones",
      },
    ],
    results: [
      {
        item: {
          id: "minecraft:end_stone",
        },
      },
    ],
  });

  //Pizza mit Tomatensauce
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 500,
        fluid: "kubejs:tomato_sauce",
      },
      {
        item: "createfood:pizza_dough",
      },
    ],
    results: [
      {
        item: {
          id: "createfood:pizza_dough_tomato_sauce",
        },
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        type: "fluid_stack",
        amount: 1000,
        fluid: "create:honey",
      },
      {
        item: "create:empty_blaze_burner",
      },
    ],
    results: [
      {
        item: {
          id: "create:blaze_burner",
        },
      },
    ],
  });
});
