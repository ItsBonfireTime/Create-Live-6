//Create Live 6 Custom Items
//Author: Blizzor & RGB Pixl

StartupEvents.registry("item", (event) => {
  event.create("brass_frame").displayName("Brass Frame").maxStackSize(1);
  event
    .create("tung_tung", "sword")
    .displayName("Tung Tung")
    .maxStackSize(1)
    .attackDamageBaseline(1)
    .speedBaseline(5);
});
