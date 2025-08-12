//Create Live 6 Custom Fluids
//Author: Blizzor & RGB Pixl

StartupEvents.registry("fluid", (event) => {
  event
    .create("liquid_abjuration_essence", "thin")
    .tint(0xe560d4)
    .displayName("Liquid Abjuration Essence");
  event
    .create("liquid_conjuration_essence", "thin")
    .tint(0x4e99b1)
    .displayName("Liquid Cojuration Essence");
  event
    .create("liquid_air_essence", "thin")
    .tint(0xd4f22b)
    .displayName("Liquid Air Essence");
  event
    .create("liquid_earth_essence", "thin")
    .tint(0x2ec22e)
    .displayName("Liquid Earth Essence");
  event
    .create("liquid_fire_essence", "thin")
    .tint(0xfb4a26)
    .displayName("Liquid Fire Essence");
  event
    .create("liquid_manipulation_essence", "thin")
    .tint(0xf79e31)
    .displayName("Liquid Manipulation Essence");
  event
    .create("liquid_water_essence", "thin")
    .tint(0x7063ae)
    .displayName("Liquid Water Essence");
  event
    .create("tomato_sauce", "thick")
    .tint(0xcc3300)
    .displayName("Tomato Sauce");
});
