// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N : \ F R P G 2 _ 6 4 \ T o o l \ e x c e l \ e m e v d \ S p E f f e c t M u s t S u b . e m e v d                             
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

// Spider Fang
Event(1670010, Default, function() {
    SpawnSFX(5406, 249, 1, 0, 0, 0);
    UnknownCommand10004004(0, 5);
    UnknownCommand10009006(7, 0.7, 3);
    UnknownCommand10009007(7, 0.7, 3);
    ModifyStatAdditively(AdditiveStatType.Weight, 7, 30);
});

// Chaos Blade
Event(1720010, Default, function() {
    SelfdamageCharacterOneoff(1720000);
});

// Ruler's Sword
Event(1900000, Default, function() {
    ApplySoulScalingToWeapon(0, 10000, 1000000, 0.85, 1.3, 0);
});

// Defender Greatsword
Event(1960000, Default, function() {
    SpawnBuffSFX(5225, 0.1, 0, 1, 0, 0);
    SpawnSFX(5315, 8, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(45, BuffType.Lightning, 50);
    ModifyDamageFlatToBaseAr(45, BuffType.Lightning, 70);
});

// Watcher Greatsword
Event(1970000, Default, function() {
    SpawnBuffSFX(5178, 0.1, 0, 1, 0, 0);
    SpawnSFX(5311, 249, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(45, BuffType.Magic, 70);
    ModifyDamageFlatToBaseAr(45, BuffType.Magic, 10);
});

// Channeler's Trident
Event(1990010, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    SpawnSFX(5414, 249, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 20, 1.05);
});

// Butcher's Knife
Event(2090000, Default, function() {
    HealSubEvent(1, 852, 1090519040, 0.25, 1);
});

// Handmaid's Ladle
Event(2500000, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Vitality, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 2);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Dexterity, 0, 99, -1, -1);
});

// Dragon Tooth
Event(2680000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Magic, 5);
    BuffDefense(0, BuffType.Fire, 5);
});

// Ladder - Down Collision
Event(3400010, Default, function() {
    CreateBullet(10070, 10070, 1, 0.7);
    CreateBullet(10071, 10071, 0, 1);
    SetSpEffectLength(0.5);
});

// Work Hook
Event(3440000, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Dexterity, 0, 5);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Adaptability, 0, 99, -3, -3);
});

// Staff of Amana
Event(3810000, Default, function() {
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 10, 1, 0.1, 0);
});

// Disc Chime
Event(4110000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MiraclePower, 0, 1.03);
});

// Short Bow
Event(4200000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 0, 0.95, 1, 1, 1, 1);
});

// Long Bow
Event(4210000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 0, 1, 1, 1, 1, 1);
});

// Composite Bow
Event(4220000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 0, 0.95, 1, 0.5, 1, 1);
});

// Sea Bow
Event(4230000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 0, 1.25, 1, 1, 1, 1);
});

// Dragonrider Bow
Event(4240000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 0, 0.95, 1, 0.5, 1, 1);
});

// Bell Keeper Bow
Event(4270000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 0, 1, 1, 1, 1, 1);
});

// Bow of Want
Event(4280000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 0, 1, 1, 1, 1, 1);
});

// Hunter's Blackbow
Event(4290000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 0, 1.2, 1, 1, 1, 1);
});

// Alonne Greatbow
Event(4400000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 1E-45, 1, 1, 1, 1, 1);
});

// Dragonslayer Greatbow
Event(4420000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 1E-45, 1, 1, 1, 1, 1);
});

// Light Crossbow
Event(4600000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 3E-45, 0.85, 1, 0.5, 1, 1);
});

// Heavy Crossbow
Event(4610000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 3E-45, 1, 1, 1, 1, 1);
});

// Shield Crossbow
Event(4630000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 3E-45, 1.1, 1, 1, 1, 1);
});

// Avelyn
Event(4660000, Default, function() {
    ModifyBowProperties(0, BowType.RegularBows, 3E-45, 0.85, 1, 0.5, 1, 1);
});

// Lost Sinner's Sword
Event(5295000, Default, function() {
    SelfdamageCharacterOneoff(5295000);
});

// Lost Sinner's Sword
Event(5295010, Default, function() {
    ApplySpecialScalingToWeapon(SpecialScalingType.Sin, 30, 1, 0, 0);
});

// Pyromancy Flame
Event(5400000, Default, function() {
    SpawnBuffSFX(5423, 0.1, 0, 1, 0, 0);
    SetStateInfo(StateInfoType.Unknown23, 0);
});

// Dark Pyromancy Flame
Event(5410000, Default, function() {
    SpawnBuffSFX(5424, 0.1, 0, 1, 0, 0);
    SetStateInfo(StateInfoType.Unknown23, 0);
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 10, 0.1, 1, 0);
});

// Torch
Event(6000000, Default, function() {
    SelfdamageCharacterAndNearbyEnemiesPeriodic(1980000, 0.3, 2);
});

// Shield of the Insolent
Event(11330000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.StaminaRecovery, 0, 0);
    SpawnSFX(930, 249, 1, 50, 0, 0);
    ModifyStaminaRecovery(0, 1.05);
});

// Slumbering Dragon Shield
Event(11390000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.StaminaRecovery, 0, 0);
    SpawnSFX(930, 249, 1, 50, 0, 0);
    ModifyStaminaRecovery(0, 1.05);
});

// Drakekeeper's Greatshield
Event(11640000, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown46, 0, 1.05);
});

// Watchdragon Parma
Event(11720000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    SetStateInfo(StateInfoType.Unknown19, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown46, 0, 0.5);
});

// Blossom Kite Shield
Event(11730000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.StaminaRecovery, 0, 0);
    SpawnSFX(930, 249, 1, 50, 0, 0);
    ModifyStaminaRecovery(0, 1.05);
});

// Wicked Eye Greatshield
Event(11750000, Default, function() {
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 15);
});

// Blue Dagger
Event(1140000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SorceryPower, 0, 1.05);
    ModifyStatMultiplicatively(MultiplicativeStatType.MiraclePower, 0, 1.05);
    ModifyStatMultiplicatively(MultiplicativeStatType.PyromancyPower, 0, 1.05);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerStaff, 0, 1.05);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerChime, 0, 1.05);
    NerfDefense(0, BuffType.Magic, 20);
    NerfDefense(0, BuffType.Lightning, 20);
    NerfDefense(0, BuffType.Fire, 20);
    NerfDefense(0, BuffType.Dark, 20);
});

// Possessed Armor Sword
Event(1260010, Default, function() {
    SpawnBuffSFX(903, 0.1, 0, 0.9, 0, 0);
    SpawnSFX(957, 8, 1, 0, 0, 0);
    ModifyDamageFlatToBaseAr(25, BuffType.Fire, 50);
});

// Eleum Loyce
Event(1630010, Default, function() {
    SpawnSFX(5443, 249, 0, 0, 0, 0);
    HealSubEvent(1, 850, 150, 1, 1);
});

// Eleum Loyce
Event(1630011, Default, function() {
    SpawnSFX(5443, 249, 0, 0, 0, 0);
    HealSubEvent(1, 850, 200, 1, 1);
});

// Eleum Loyce
Event(1630020, Default, function() {
    SpawnSFX(5443, 249, 0, 0, 0, 0);
    HealSubEvent(1, 850, 150, 1, 1);
});

// Eleum Loyce
Event(1630021, Default, function() {
    SpawnSFX(5443, 249, 0, 0, 0, 0);
    HealSubEvent(1, 850, 250, 1, 1);
});

// Bewitched Alonne Sword
Event(1790015, Default, function() {
    SpawnBuffSFX(5444, 10, 0, 1, 0, 0);
    SetSpEffectLength(3);
});

// Bewitched Alonne Sword
Event(1790020, Default, function() {
    CreateBullet(20088921, 20088921, 0, 0);
    SpawnSFX(5317, 249, 1, 0, 0, 0);
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    SpawnBuffSFX(5441, 10, 0, 1, 0, 0);
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 0, 1.6, 1.6, 30);
});

// Majestic Greatsword
Event(1830000, Default, function() {
    ForceWeapon(0, 1831000);
});

// Sanctum Mace
Event(2760000, Default, function() {
    SelfdamageCharacterOneoff(20097100);
});

// Sanctum Mace
Event(2760010, Default, function() {
    SelfdamageCharacterOneoff(20097110);
});

// Yorgh's Spear
Event(2855000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    BuffDefense(0, BuffType.Poison, 20);
    BuffDefense(0, BuffType.Bleed, 7);
    BuffDefense(0, BuffType.Curse, 7);
    BuffDefense(0, BuffType.Petrify, 7);
    NerfDefense(0, BuffType.Magic, 7);
    NerfDefense(0, BuffType.Lightning, 7);
    NerfDefense(0, BuffType.Fire, 7);
    NerfDefense(0, BuffType.Dark, 7);
});

// Bone Fist
Event(3530000, Default, function() {
    SpawnSFX(5432, 20, 1, 0, 0, 0);
    SpawnSFX(5432, 21, 1, 0, 0, 0);
    SetSpEffectLength(0.95);
});

// Bone Fist
Event(3530010, Default, function() {
    CreateBullet(20088700, 20088700, 1, 1.8);
    SetSpEffectLength(0.5);
    ModifyProperty(PlayerPropertyType.EquippedRightHandWeaponDurability, 0, -5);
    ModifyProperty(PlayerPropertyType.EquippedLeftHandWeaponDurability, 0, -5);
});

// Azal's Staff
Event(3930000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxSpellUsages, 0, 0.25);
    ModifyStatMultiplicatively(MultiplicativeStatType.SorceryPower, 0, 1.025);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerStaff, 0, 1.025);
});

// Chime of Screams
Event(4120000, Default, function() {
    ModifyAttributeBasedOnCurrentValue(AttributeType.Faith, 6, 60, 8, 2);
});

// Curved Nil Greatsword
Event(5050000, Default, function() {
    SpawnSFX(5465, 220, 1, 30, 2, 2);
    ApplyNgScalingToWeapon(2, 10, 30, 200, 2);
    ApplyNgScalingToWeapon(2, 10, 5, 100, 1);
});

// Ivory King Ultra Greatsword
Event(5255000, Default, function() {
    SpawnBuffSFX(5481, 10, 0, 1, 0, 0);
    SetSpEffectLength(1.7);
});

// Vessel Shield
Event(11320000, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Vigor, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Strength, 0, 4);
    ModifyStatAdditively(AdditiveStatType.Dexterity, 0, 4);
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

// Loyce Shield
Event(11290000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPRestoration, 0, 0);
    SpawnSFX(935, 249, 1, 40, 0, 0);
    HPRestorationEffect(1, 2);
    HealSubEvent(1, 850, 2, 3, 0);
});

// Charred Loyce Shield
Event(11295000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPRestoration, 0, 0);
    SpawnSFX(935, 249, 1, 40, 0, 0);
    HPRestorationEffect(1, 2);
    HealSubEvent(1, 850, 2, 3, 0);
});

// Greatsword of the Forlorn
Event(1997000, Default, function() {
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 10, 0.1, 1, 0);
});

// Scythe of the Forlorn
Event(3080000, Default, function() {
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 10, 0.1, 1, 0);
});
