// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N : \ F R P G 2 _ 6 4 \ T o o l \ e x c e l \ e m e v d \ S p E f f e c t M u s t S u b . e m e v d                             
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

// Fountain of Recovery
Event(100000000, Default, function() {
    HealSubEvent(1, 851, 1084227584, 1, 1);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    StatusSubEvent(1, 871, 1);
    StatusSubEvent(1, 871, 2);
    StatusSubEvent(1, 871, 4);
    StatusSubEvent(1, 871, 10);
    StatusSubEvent(1, 871, 3);
    StatusSubEvent(1, 871, 6);
    StatusSubEvent(1, 871, 7);
    StatusSubEvent(1, 871, 9);
    StatusSubEvent(1, 871, 11);
    StatusSubEvent(1, 871, 5);
});

Event(100000010, Default, function() {
    SpawnSFX(872, 249, 0, 0, 0, 0);
    SpawnSFX(871, 249, 0, 0, 0, 0);
    RestoreHumanity(true);
});

Event(100000020, Default, function() {
    HealSubEventUnknown(1, 851, 1120403456, 0, 1);
    RestoreSpellUsage(100, 1);
    UnknownCommand10011002();
    RestoreSpellUsage(100, 1);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    StatusSubEvent(1, 871, 1);
    StatusSubEvent(1, 871, 2);
    StatusSubEvent(1, 871, 4);
    StatusSubEvent(1, 871, 10);
    StatusSubEvent(1, 871, 3);
    StatusSubEvent(1, 871, 3);
    StatusSubEvent(1, 871, 6);
    StatusSubEvent(1, 871, 7);
    StatusSubEvent(1, 871, 9);
    StatusSubEvent(1, 871, 11);
    StatusSubEvent(1, 871, 5);
    RestoreHumanity(false);
});

Event(100001000, Default, function() {
    HealSubEvent(1, 850, 500, 10, 1);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    StatusSubEvent(1, 871, 1);
    StatusSubEvent(1, 871, 2);
    StatusSubEvent(1, 871, 4);
    StatusSubEvent(1, 871, 5);
    StatusSubEvent(1, 871, 6);
    StatusSubEvent(1, 871, 7);
    StatusSubEvent(1, 871, 9);
});

Event(100001010, Default, function() {
    HealSubEvent(1, 850, 1000, 10, 1);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    StatusSubEvent(1, 871, 1);
    StatusSubEvent(1, 871, 2);
    StatusSubEvent(1, 871, 4);
    StatusSubEvent(1, 871, 5);
    StatusSubEvent(1, 871, 6);
    StatusSubEvent(1, 871, 7);
    StatusSubEvent(1, 871, 9);
});

Event(100001020, Default, function() {
    HealSubEvent(1, 850, 1500, 10, 1);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    StatusSubEvent(1, 871, 1);
    StatusSubEvent(1, 871, 2);
    StatusSubEvent(1, 871, 4);
    StatusSubEvent(1, 871, 5);
    StatusSubEvent(1, 871, 6);
    StatusSubEvent(1, 871, 7);
    StatusSubEvent(1, 871, 9);
});

Event(110000010, Default, function() {
    HealSubEventUnknown(1, 851, 1120403456, 0, 1);
    UnknownCommand10009008();
    UnknownCommand10011002();
    RestoreSpellUsage(100, 1);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    StatusSubEvent(1, 871, 1);
    StatusSubEvent(1, 871, 2);
    StatusSubEvent(1, 871, 4);
    StatusSubEvent(1, 871, 10);
    StatusSubEvent(1, 871, 3);
    StatusSubEvent(1, 871, 5);
    StatusSubEvent(1, 871, 6);
    StatusSubEvent(1, 871, 7);
    StatusSubEvent(1, 871, 9);
    StatusSubEvent(1, 871, 11);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.BleedBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.ToxicBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.CurseBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.IgniteBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.PetrifyBuildup, 3, 100);
});

// Curse Jar
Event(120000010, Default, function() {
    SpawnSFX(3739, 249, 1, 0, 0, 0);
    SetSpEffectLength(0.5);
});

// Curse Jar
Event(120000020, Default, function() {
    SpawnSFX(3739, 249, 1, 0, 0, 0);
    SetSpEffectLength(0.5);
});

// Curse Jar
Event(120000030, Default, function() {
    SpawnSFX(3739, 249, 1, 0, 0, 0);
    SetSpEffectLength(0.5);
});

// Nashandra Painting - Curse
Event(120000110, Default, function() {
    SpawnSFX(3739, 249, 1, 0, 0, 0);
    SetSpEffectLength(0.5);
});

// 
Event(120000210, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Weight, 3600, 100);
});

// Corrosive Pool
Event(120000310, Default, function() {
    SpawnSFX(659, 249, 1, 0, 0, 0);
    SetSpEffectLength(1.5);
});

Event(130000010, Default, function() {
    UnknownCommand10070002();
    BuffDefense(0, BuffType.Petrify, 100);
});

Event(140001000, Default, function() {
    ModifyProperty(PlayerPropertyType.EquippedRightHandWeaponDurability, 0, -7);
    ModifyProperty(PlayerPropertyType.EquippedLeftHandWeaponDurability, 0, -7);
    ModifyProperty(PlayerPropertyType.EquippedArmorDurability, 0, -7);
    ModifyProperty(PlayerPropertyType.EquippedRingsDurability, 0, -7);
    CreateBullet(310070030, 310070030, 0, 1);
});

Event(140001010, Default, function() {
    SpawnSFX(659, 249, 1, 0, 0, 0);
    SetSpEffectLength(1.5);
});

Event(150000000, Default, function() {
    SetSpEffectLength(3);
});

Event(150101000, Default, function() {
    SpawnSFX(3739, 249, 1, 0, 0, 0);
    SetSpEffectLength(0.5);
});

Event(150200000, Default, function() {
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    StatusSubEvent(1, 871, 1);
    StatusSubEvent(1, 871, 2);
    StatusSubEvent(1, 871, 4);
    StatusSubEvent(1, 871, 10);
    StatusSubEvent(1, 871, 3);
    StatusSubEvent(1, 871, 5);
    StatusSubEvent(1, 871, 6);
    StatusSubEvent(1, 871, 7);
    StatusSubEvent(1, 871, 9);
    StatusSubEvent(1, 871, 11);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.BleedBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.ToxicBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.CurseBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.IgniteBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.PetrifyBuildup, 3, 100);
});

Event(150300000, Default, function() {
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    StatusSubEvent(1, 871, 1);
    StatusSubEvent(1, 871, 2);
    StatusSubEvent(1, 871, 4);
    StatusSubEvent(1, 871, 10);
    StatusSubEvent(1, 871, 3);
    StatusSubEvent(1, 871, 5);
    StatusSubEvent(1, 871, 6);
    StatusSubEvent(1, 871, 7);
    StatusSubEvent(1, 871, 9);
    StatusSubEvent(1, 871, 11);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.BleedBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.ToxicBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.CurseBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.IgniteBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.PetrifyBuildup, 3, 100);
});

// Cleric's Parma
Event(160000000, Default, function() {
    SpawnSFX(290, 249, 1, 0, 0, 0);
    SpawnRepelSFX(0.4, 0, 5451);
    SpawnRepelSFX(0.4, 1, 5451);
    SpawnRepelSFX(0.4, 2, 5451);
    SpawnRepelSFX(0.4, 3, 5451);
});

// Cleric's Parma
Event(160000100, Default, function() {
    SpawnSFX(290, 249, 1, 0, 0, 0);
    SpawnRepelSFX(0.3, 0, 5451);
    SpawnRepelSFX(0.3, 1, 5451);
    SpawnRepelSFX(0.3, 2, 5451);
    SpawnRepelSFX(0.3, 3, 5451);
});

// Magic Shield
Event(160000010, Default, function() {
    SpawnSFX(290, 249, 1, 0, 0, 0);
    SpawnRepelSFX(0.55, 0, 5451);
    SpawnRepelSFX(0.55, 1, 5451);
    SpawnRepelSFX(0.55, 2, 5451);
    SpawnRepelSFX(0.55, 3, 5451);
});

// Magic Shield
Event(160000110, Default, function() {
    SpawnSFX(290, 249, 1, 0, 0, 0);
    SpawnRepelSFX(0.3, 0, 5451);
    SpawnRepelSFX(0.3, 1, 5451);
    SpawnRepelSFX(0.3, 2, 5451);
    SpawnRepelSFX(0.3, 3, 5451);
});

// Golden Wing Shield
Event(160001010, Default, function() {
    SpawnSFX(290, 249, 1, 0, 0, 0);
    SpawnRepelSFX(0.4, 0, 5451);
    SpawnRepelSFX(0.4, 1, 5451);
    SpawnRepelSFX(0.4, 2, 5451);
    SpawnRepelSFX(0.4, 3, 5451);
});

// Golden Wing Shield
Event(160001110, Default, function() {
    SpawnSFX(290, 249, 1, 0, 0, 0);
    SpawnRepelSFX(0.3, 0, 5451);
    SpawnRepelSFX(0.3, 1, 5451);
    SpawnRepelSFX(0.3, 2, 5451);
    SpawnRepelSFX(0.3, 3, 5451);
});

Event(170000000, Default, function() {
    UnknownCommand10070002();
    SetStateInfo(StateInfoType.Unknown61, 1);
});

Event(170001000, Default, function() {
    UnknownCommand10070002();
    SetStateInfo(StateInfoType.Unknown55, 0);
});

Event(170100000, Default, function() {
    SetSpEffectLength(4.8);
});
