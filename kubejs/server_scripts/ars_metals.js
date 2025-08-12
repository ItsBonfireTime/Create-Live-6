//priority: 1
//Create Live 6 Custom Recipes
//Author: Blizzor
// replacing every gold recipe with brass

ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "ars_nouveau" },
    "minecraft:gold_ingot",
    "create:brass_ingot"
  );
  event.replaceInput(
    { mod: "ars_nouveau" },
    "minecraft:gold_block",
    "create:brass_block"
  );
  event.replaceInput(
    { mod: "ars_nouveau" },
    "minecraft:gold_nugget",
    "create:brass_nugget"
  );
  event.replaceInput(
    { mod: "ars_elemental" },
    "minecraft:gold_ingot",
    "create:brass_ingot"
  );
  event.replaceInput(
    { mod: "ars_elemental" },
    "minecraft:gold_block",
    "create:brass_block"
  );
  event.replaceInput(
    { mod: "ars_elemental" },
    "minecraft:gold_nugget",
    "create:brass_nugget"
  );
});
