// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N       :       \       F       R       P       G       2       _       6       4       \       T       o       o       l       \       e       x       c       e       l       \       e       m       e       v       d       \       S       p       E       f       f       e       c       t       M       u       s       t       S       u       b       .       e       m       e       v       d                                                                                                                       
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

// Life Ring
Event(40010000, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 1.05);
});

// Life Ring+1
Event(40010001, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 1.075);
});

// Life Ring+2
Event(40010002, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 1.125);
});

// Chloranthy Ring
Event(40020000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.StaminaRecovery, 0, 0);
    SpawnSFX(930, 249, 1, 50, 0, 0);
    ModifyStaminaRecovery(0, 1.15);
});

// Chloranthy Ring+1
Event(40020001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.StaminaRecovery, 0, 0);
    SpawnSFX(930, 249, 1, 50, 0, 0);
    ModifyStaminaRecovery(0, 1.2);
});

// Chloranthy Ring+2
Event(40020002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.StaminaRecovery, 0, 0);
    SpawnSFX(930, 249, 1, 50, 0, 0);
    ModifyStaminaRecovery(0, 1.25);
});

// Royal Soldier's Ring
Event(40030000, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.1);
});

// Royal Soldier's Ring+1
Event(40030001, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.15);
});

// Royal Soldier's Ring+2
Event(40030002, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.2);
});

// First Dragon Ring
Event(40040000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.MaxHP, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 1.03);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxStamina, 0, 1.05);
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.05);
});

// Second Dragon Ring
Event(40040001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.MaxHP, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 1.05);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxStamina, 0, 1.1);
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.1);
});

// Third Dragon Ring
Event(40040002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.MaxHP, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 1.075);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxStamina, 0, 1.125);
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.125);
});

// Ring of Steel Protection
Event(40050000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.AllPhysical, 50);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRateII, 0, 0.9);
});

// Ring of Steel Protection+1
Event(40050001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.AllPhysical, 75);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRateII, 0, 0.9);
});

// Ring of Steel Protection+2
Event(40050002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.AllPhysical, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRateII, 0, 0.875);
});

// Spell Quartz Ring
Event(40060000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Magic, 5);
});

// Spell Quartz Ring+1
Event(40060001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Magic, 8);
});

// Spell Quartz Ring+2
Event(40060002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Magic, 10);
});

// Flame Quartz Ring
Event(40070000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Fire, 5);
});

// Flame Quartz Ring+1
Event(40070001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Fire, 8);
});

// Flame Quartz Ring+2
Event(40070002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Fire, 10);
});

// Thunder Quartz Ring
Event(40080000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Lightning, 5);
});

// Thunder Quartz Ring+1
Event(40080001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Lightning, 8);
});

// Thunder Quartz Ring+2
Event(40080002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Lightning, 10);
});

// Dark Quartz Ring
Event(40090000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Dark, 5);
});

// Dark Quartz Ring+1
Event(40090001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Dark, 8);
});

// Dark Quartz Ring+2
Event(40090002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Dark, 10);
});

// Poisonbite Ring
Event(40100000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    BuffDefense(0, BuffType.Poison, 15);
});

// Bloodbite Ring
Event(40110000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    BuffDefense(0, BuffType.Bleed, 15);
});

// Bracing Knuckle Ring
Event(40120000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.WeaponDegredationRate, 0, 0.8);
    ModifyStatMultiplicatively(MultiplicativeStatType.ArmorDegradationRate, 0, 0.8);
    ModifyStatMultiplicatively(MultiplicativeStatType.RingDegradationRate, 0, 0.8);
});

// Bracing Knuckle Ring+1
Event(40120001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.WeaponDegredationRate, 0, 0.65);
    ModifyStatMultiplicatively(MultiplicativeStatType.ArmorDegradationRate, 0, 0.75);
    ModifyStatMultiplicatively(MultiplicativeStatType.RingDegradationRate, 0, 0.75);
});

// Bracing Knuckle Ring+2
Event(40120002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.WeaponDegredationRate, 0, 0.5);
    ModifyStatMultiplicatively(MultiplicativeStatType.ArmorDegradationRate, 0, 0.65);
    ModifyStatMultiplicatively(MultiplicativeStatType.RingDegradationRate, 0, 0.65);
});

// Cursebite Ring
Event(40130000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    BuffDefense(0, BuffType.Curse, 40);
});

// Ash Knuckle Ring
Event(40135000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    BuffDefense(0, BuffType.Petrify, 40);
});

// Dispelling Ring
Event(40140000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Magic, 6);
    BuffDefense(0, BuffType.Lightning, 6);
    BuffDefense(0, BuffType.Fire, 6);
    BuffDefense(0, BuffType.Dark, 6);
});

// Ring of Resistance
Event(40150000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    BuffDefense(0, BuffType.Poison, 12);
    BuffDefense(0, BuffType.Bleed, 12);
    BuffDefense(0, BuffType.Unknown7, 12);
    BuffDefense(0, BuffType.Curse, 12);
    BuffDefense(0, BuffType.Petrify, 12);
});

// Ring of Blades
Event(40160000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    ModifyDamageFlatToBaseAr(0, BuffType.AllPhysical, 20);
});

// Ring of Blades+1
Event(40160001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    ModifyDamageFlatToBaseAr(0, BuffType.AllPhysical, 35);
});

// Ring of Blades+2
Event(40160002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    ModifyDamageFlatToBaseAr(0, BuffType.AllPhysical, 50);
});

// Ring of Knowledge
Event(40210000, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 5);
});

// Ring of Prayer
Event(40220000, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 5);
});

// Stone Ring
Event(40230000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    ModifyStatAdditively(AdditiveStatType.AttackPoiseDamage, 0, 30);
});

// Red Tearstone Ring
Event(40260000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.LowHP, 1, 30);
    SpawnSFX(931, 220, 1, 10, 1, 30);
    ModifyStatAdditively(AdditiveStatType.CurrentHPRatio, 0, 30);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingPhysicalDamageRate, 0, 1.2);
});

// Blue Tearstone Ring
Event(40280000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.LowHP, 1, 30);
    SpawnSFX(932, 220, 1, 20, 1, 30);
    ModifyStatAdditively(AdditiveStatType.CurrentHPRatio2, 0, 30);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingPhysicalDamageRate, 0, 0.65);
});

// Ring of Giants
Event(40290000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Poise, 0, 0);
    SpawnSFX(933, 220, 1, 30, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Poise, 0, 10);
});

// Ring of Giants+1
Event(40290001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Poise, 0, 0);
    SpawnSFX(933, 220, 1, 30, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Poise, 0, 20);
});

// Ring of Giants+2
Event(40290002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Poise, 0, 0);
    SpawnSFX(933, 220, 1, 30, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Poise, 0, 30);
});

// Old Leo Ring
Event(40295000, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.ThrustCounterattackDamageRate, 0, 1.125);
});

// Ring of Soul Protection
Event(40300000, Default, function() {
    SetDeathStateInfo(DeathStateInfo.PreventHollowing, 1);
    SetDeathStateInfo(DeathStateInfo.PetrificationImmunity, 0);
    SetStateInfoCategory(StateInfoCategory.HollowingState, 0, 0);
    SetStateInfo(StateInfoType.PreventHollowingOnDeathandPetrification, 0);
});

// Ring of Life Protection
Event(40310000, Default, function() {
    SetDeathStateInfo(DeathStateInfo.PreventHollowing, 1);
    SetStateInfoCategory(StateInfoCategory.HollowingState, 0, 0);
    SetStateInfo(StateInfoType.PreventHollowingOnDeath, 0);
});

// Lingering Dragoncrest Ring
Event(40320000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifySpellEffectLength(1.15);
});

// Lingering Dragoncrest Ring+1
Event(40320001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifySpellEffectLength(1.25);
});

// Lingering Dragoncrest Ring+2
Event(40320002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifySpellEffectLength(1.4);
});

// Clear Bluestone Ring
Event(40330000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.8);
});

// Clear Bluestone Ring+1
Event(40330001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.65);
});

// Clear Bluestone Ring+2
Event(40330002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.6);
});

// Northern Ritual Band
Event(40340000, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxSpellUsages, 0, 1.1);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 0.8);
});

// Northern Ritual Band+1
Event(40340001, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxSpellUsages, 0, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 0.75);
});

// Northern Ritual Band+2
Event(40340002, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxSpellUsages, 0, 1.3);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 0.5);
});

// Southern Ritual Band
Event(40350000, Default, function() {
    ModifyStatAdditively(AdditiveStatType.AttunementSlots, 0, 1);
});

// Southern Ritual Band+1
Event(40350001, Default, function() {
    ModifyStatAdditively(AdditiveStatType.AttunementSlots, 0, 2);
});

// Southern Ritual Band+2
Event(40350002, Default, function() {
    ModifyStatAdditively(AdditiveStatType.AttunementSlots, 0, 3);
});

// Covetous Gold Serpent Ring
Event(40360000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    SetSpEffectLength(0);
});

// Covetous Gold Serpent Ring+1
Event(40360001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    SetSpEffectLength(0);
});

// Covetous Gold Serpent Ring+2
Event(40360002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    SetSpEffectLength(0);
});

// Covetous Silver Serpent Ring
Event(40370000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.1);
});

// Covetous Silver Serpent Ring+1
Event(40370001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.2);
});

// Covetous Silver Serpent Ring+2
Event(40370002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.3);
});

// Ring of the Evil Eye
Event(40390000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 30);
    ModifyProperty(PlayerPropertyType.Unknown22, 0, 934);
    ModifyProperty(PlayerPropertyType.Unknown23, 0, 249);
});

// Ring of the Evil Eye+1
Event(40390001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 50);
    ModifyProperty(PlayerPropertyType.Unknown22, 0, 934);
    ModifyProperty(PlayerPropertyType.Unknown23, 0, 249);
});

// Ring of the Evil Eye+2
Event(40390002, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 80);
    ModifyProperty(PlayerPropertyType.Unknown22, 0, 934);
    ModifyProperty(PlayerPropertyType.Unknown23, 0, 249);
});

// Ring of Restoration
Event(40400000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPRestoration, 0, 0);
    SpawnSFX(935, 249, 1, 40, 0, 0);
    HPRestorationEffect(1, 2);
    HealSubEvent(1, 850, 3, 1.5, 0);
});

// Ring of Binding
Event(40410000, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHPInHollowState, 0, 0.5);
});

// Silvercat Ring
Event(40420000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.FallingDamage, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 4);
});

// Redeye Ring
Event(40430000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.TargetPriority, 0, 0);
    SpawnSFX(937, 7, 1, 0, 0, 0);
    ModifyEnemyAggroToPlayer(2);
});

// Gower's Ring of Protection
Event(40440000, Default, function() {
    SpawnSFX(938, 3, 1, 0, 0, 0);
    SetStateInfo(StateInfoType.PreventCriticalHits, 0);
    SetStateInfo(StateInfoType.Unknown25, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown61, 0, 0.8);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown62, 0, 0.15);
});

// Slumbering Dragoncrest Ring
Event(40460000, Default, function() {
    SpawnSFX(939, 5, 1, 0, 0, 0);
    SpawnSFX(939, 6, 1, 0, 0, 0);
    SetStateInfo(StateInfoType.SilenceFootstepSound, 0);
});

// Hawk Ring
Event(40470000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Ammunition, 0, 0);
    ModifyBowProperties(0, BowType.RegularBows, 0, 1.075, 1, 1.075, 1.075, 1);
    ModifyBowProperties(0, BowType.RegularBows, 1E-45, 1.075, 1, 1.075, 1.075, 1);
    ModifyBowProperties(0, BowType.RegularBows, 3E-45, 1.075, 1, 1.075, 1.075, 1);
});

// Old Sun Ring
Event(40480000, Default, function() {
    SpawnSFX(940, 220, 1, 30, 0, 0);
    SetStateInfoCategory(StateInfoCategory.Explosion, 0, 0);
    RandomlySpawnBulletAfterTakingDamageDurabilitybasedRandomness(30, 10, 10, 40480000, 40480000);
});

// Illusory Ring of a Conqueror
Event(40500000, Default, function() {
    SetStateInfo(StateInfoType.HideLeftWeapon, 0);
});

// King's Ring
Event(40510000, Default, function() {
    ModifyDamageFlatToBaseAr(0, BuffType.Fire, 5);
});

// Ring of the Dead
Event(40520000, Default, function() {
    SetStateInfo(StateInfoType.HumanFormWhenHollow, 0);
    SpawnSFX(869, 249, 0, 0, 0, 0);
});

// Ring of Thorns
Event(40530000, Default, function() {
    RandomlySpawnBulletAfterTakingDamageFlatRandomness(30, 10, 50, 500, 40530000, 40530000);
});

// Ring of Thorns+1
Event(40530001, Default, function() {
    RandomlySpawnBulletAfterTakingDamageFlatRandomness(50, 9, 50, 400, 40530000, 40530000);
});

// Ring of Thorns+2
Event(40530002, Default, function() {
    RandomlySpawnBulletAfterTakingDamageFlatRandomness(70, 8, 50, 300, 40530000, 40530000);
});

// Delicate String
Event(40540000, Default, function() {
    ResetInvasionCooldownTimer();
});

// White Ring
Event(40550000, Default, function() {
    ModifyProperty(PlayerPropertyType.Unknown18, 0, 2);
    UnknownCommand10013005(0);
});

// Ring of Whispers
Event(40610000, Default, function() {
    PlaySEWhenEnemiesNearbyPlayer(35, 5, 5, 6, 10, 100000027);
});

// Illusory Ring of the Exalted
Event(40620000, Default, function() {
    SetStateInfo(StateInfoType.HideRightWeapon, 0);
});

// Crest of the Rat
Event(40700000, Default, function() {
    InitiatePassiveServermediatedMultiplayerItem(PassiveServerItemType.CrestoftheRat);
    ModifyDamageFlatToBaseAr(0, BuffType.Poison, 50);
});

// Bell Keeper's Seal
Event(40710000, Default, function() {
    InitiatePassiveServermediatedMultiplayerItem(PassiveServerItemType.BellKeepersSoul);
});

// Guardian's Seal
Event(40720000, Default, function() {
    InitiatePassiveServermediatedMultiplayerItem(PassiveServerItemType.GuardiansSeal);
});

// Crest of Blood
Event(40730000, Default, function() {
    ModifyDamageFlatToBaseAr(0, BuffType.Bleed, 50);
});

// Blue Seal
Event(40740000, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 1.03);
});

// Abyss Seal
Event(40750000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyProperty(PlayerPropertyType.HexSelfDamageStaff, 0, 30);
    ModifyProperty(PlayerPropertyType.HexSelfDamageChime, 0, 30);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerStaff, 0, 1.075);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerChime, 0, 1.075);
});

// Vanquisher's Seal
Event(40760000, Default, function() {
    ReplaceFistsWithAlternateWeapon(0, 3406000, 3407000, 3408000);
});

// Sun Seal
Event(40770000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MiraclePower, 0, 1.05);
});

// Ancient Dragon Seal
Event(40780000, Default, function() {
    ModifyEstusUsage(EstusModificationType.Boostby50, 0);
});

// Life Ring+3
Event(40010003, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 1.15);
});

// Spell Quartz Ring+3
Event(40060003, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Magic, 15);
});

// Flame Quartz Ring+3
Event(40070003, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Fire, 15);
});

// Thunder Quartz Ring+3
Event(40080003, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Lightning, 15);
});

// Dark Quartz Ring+3
Event(40090003, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Dark, 15);
});

// Simpleton's Ring
Event(41000000, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 5);
    SetStateInfo(StateInfoType.HidePlayerWhenRolling, 0);
});

// Strength Ring
Event(41010000, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Strength, 0, 5);
});

// Dexterity Ring
Event(41020000, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Dexterity, 0, 5);
});

// Ivory Warrior Ring
Event(41030000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    SpawnSFX(5449, 220, 1, 45, 0, 0);
    ModifyStatAdditively(AdditiveStatType.AntiStabilityModifier, 0, 20);
    ModifyStatAdditively(AdditiveStatType.Unknown22, 0, 4);
});

// Sorcery Clutch Ring
Event(41040000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    ModifyDamageFlatToBaseAr(0, BuffType.Magic, 30);
    NerfDefense(0, BuffType.AllPhysical, 80);
});

// Lightning Clutch Ring
Event(41050000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    ModifyDamageFlatToBaseAr(0, BuffType.Lightning, 30);
    NerfDefense(0, BuffType.AllPhysical, 80);
});

// Fire Clutch Ring
Event(41060000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    ModifyDamageFlatToBaseAr(0, BuffType.Fire, 30);
    NerfDefense(0, BuffType.AllPhysical, 80);
});

// Dark Clutch Ring
Event(41070000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    ModifyDamageFlatToBaseAr(0, BuffType.Dark, 30);
    NerfDefense(0, BuffType.AllPhysical, 80);
});

// Baneful Bird Ring
Event(41090000, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.ShieldStability, 0, 5);
});

// Flynn's Ring
Event(41100000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Damage, 0, 0);
    ApplyEquipLoadbasedFlatDamageToWeapon(60, 80, 100, 0, 50, 10, 1);
});

// Ring of the Embedded
Event(41110000, Default, function() {
    ModifyAttributeBasedOnCurrentValue(AttributeType.Vigor, 6, 60, 7, 3);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Endurance, 6, 60, 7, 3);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Vitality, 6, 60, 7, 3);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 1.085);
});

// Ring of the Living
Event(41120000, Default, function() {
    SetStateInfo(StateInfoType.Unknown27, 0);
    UnknownCommand10013005(0);
});

// Yorgh's Ring
Event(41130000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    SpawnSFX(5450, 220, 1, 23, 0, 0);
    AddSpellDeflectChance(50, 5451);
});

// Poisonbite Ring+1
Event(40100001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    BuffDefense(0, BuffType.Poison, 30);
});

// Bloodbite Ring+1
Event(40110001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    BuffDefense(0, BuffType.Bleed, 30);
});

// Dispelling Ring+1
Event(40140001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Defense, 0, 0);
    BuffDefense(0, BuffType.Magic, 12);
    BuffDefense(0, BuffType.Lightning, 12);
    BuffDefense(0, BuffType.Fire, 12);
    BuffDefense(0, BuffType.Dark, 12);
});

// Ring of Resistance+1
Event(40150001, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    BuffDefense(0, BuffType.Poison, 20);
    BuffDefense(0, BuffType.Bleed, 20);
    BuffDefense(0, BuffType.Unknown7, 20);
    BuffDefense(0, BuffType.Curse, 20);
    BuffDefense(0, BuffType.Petrify, 20);
});

// Agape Ring
Event(42000000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulAcquisition, 0, 0);
    SetStateInfo(StateInfoType.PreventSoulGain, 0);
});

// Ring of Fortune
Event(41140000, Default, function() {
    SetStateInfo(StateInfoType.ChanceForCriticalAttack, 0);
});

// Butterfly Band
Event(41150000, Default, function() {
    ModifyJump(60, 2.5, 4, 5, 0.44, 0.44, 1);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 2);
});

// Witch's Ring
Event(41160000, Default, function() {
    SelfdamageCharacterAndNearbyEnemiesPeriodic(51000000, 120, -1);
});

// Ring of Alacrity
Event(41170000, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 15);
});
