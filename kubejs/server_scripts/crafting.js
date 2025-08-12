//priority: 2
//Create Live 6 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.shaped(Item.of("create:empty_blaze_burner", 1), [" B ", "BCB", " B "], {
    B: "create:iron_sheet",
    C: "minecraft:coal_block",
  });
  event.shaped(Item.of("kubejs:brass_frame", 1), [" B ", "B B", " B "], {
    B: "create:brass_sheet",
  });
  event.shaped(Item.of("backpacked:backpack", 1), ["AAA", "BCB", "AAA"], {
    A: "minecraft:rabbit_hide",
    B: "minecraft:string",
    C: "minecraft:iron_ingot",
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    category: "misc",
    key: {
      A: {
        item: "kubejs:brass_frame",
      },
      B: {
        item: "create:polished_rose_quartz",
      },
    },
    pattern: [" B ", "BAB", " B "],
    result: {
      components: {
        "portalgems:destination": {
          color: "#FFf44471",
          dimension: "mining_dimension:mining_dimension",
          position: [0, 128, 0],
        },
      },
      id: "portalgems:gem",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    category: "misc",
    key: {
      A: {
        item: "kubejs:brass_frame",
      },
      B: {
        item: "minecraft:amethyst_shard",
      },
    },
    pattern: [" B ", "BAB", " B "],
    result: {
      components: {
        "portalgems:destination": {
          color: "#FF6e4ea9",
          dimension: "ars_monde:ars_monde",
        },
      },
      id: "portalgems:gem",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    category: "misc",
    key: {
      A: {
        item: "kubejs:brass_frame",
      },
      B: {
        item: "minecraft:potato",
      },
      C: {
        item: "minecraft:glow_ink_sac",
      },
      D: {
        item: "minecraft:diamond",
      },
      E: {
        item: "minecraft:emerald",
      },
    },
    pattern: [" B ", "CAD", " E "],
    result: {
      components: {
        "portalgems:destination": {
          color: "#FF00FF00",
          dimension: "minecraft:overworld",
        },
      },
      id: "portalgems:gem",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    category: "misc",
    key: {
      A: {
        item: "kubejs:brass_frame",
      },
      B: {
        item: "minecraft:nether_star",
      },
      C: {
        item: "minecraft:glowstone_dust",
      },
      D: {
        item: "minecraft:nether_wart",
      },
      E: {
        item: "minecraft:blaze_rod",
      },
    },
    pattern: [" B ", "CAD", " E "],
    result: {
      components: {
        "portalgems:destination": {
          color: "#FFFF0000",
          dimension: "minecraft:the_nether",
        },
      },
      id: "portalgems:gem",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    category: "misc",
    key: {
      A: {
        item: "kubejs:brass_frame",
      },
      B: {
        item: "minecraft:elytra",
      },
      C: {
        item: "minecraft:dragon_breath",
      },
      D: {
        item: "minecraft:chorus_fruit",
      },
      E: {
        item: "minecraft:shulker_shell",
      },
    },
    pattern: [" B ", "CAD", " E "],
    result: {
      components: {
        "portalgems:destination": {
          color: "#FFCFFF00",
          dimension: "minecraft:the_end",
        },
      },
      id: "portalgems:gem",
    },
  });
});
