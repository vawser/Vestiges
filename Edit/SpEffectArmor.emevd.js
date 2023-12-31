// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N   :   \   F   R   P   G   2   _   6   4   \   T   o   o   l   \   e   x   c   e   l   \   e   m   e   v   d   \   S   p   E   f   f   e   c   t   M   u   s   t   S   u   b   .   e   m   e   v   d                                                           
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

// Traveling Merchant Hat
Event(21140100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    SetSpEffectLength(0);
});

// Jester's Cap
Event(21210100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    SetSpEffectLength(0);
});

// Jester's Robes
Event(21210101, Default, function() {
    SetStateInfo(StateInfoType.PreventCriticalHits, 0);
});

// Jester's Gloves
Event(21210102, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.1);
});

// Jester's Tights
Event(21210103, Default, function() {
    SetStateInfoCategory(StateInfoCategory.FallingDamage, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 2);
});

// Moon Hat
Event(21230100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 2);
});

// Helm of Aurous
Event(21360100, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.01);
});

// Armor of Aurous
Event(21360101, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.015);
});

// Gauntlets of Aurous
Event(21360102, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.01);
});

// Leggings of Aurous
Event(21360103, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.015);
});

// Durgo's Hat
Event(21430100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Ammunition, 0, 0);
    ModifyBowProperties(0, BowType.RegularBows, 0, 1.05, 1, 1.05, 1.05, 1);
    ModifyBowProperties(0, BowType.RegularBows, 1E-45, 1.05, 1, 1.05, 1.05, 1);
    ModifyBowProperties(0, BowType.RegularBows, 3E-45, 1.05, 1, 1.05, 1.05, 1);
});

// Engraved Gauntlets
Event(21440102, Default, function() {
    SetStateInfo(StateInfoType.ChanceForCriticalAttack, 0);
});

// Flying Feline Boots
Event(21460103, Default, function() {
    SetStateInfoCategory(StateInfoCategory.FallingDamage, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 3);
});

// Moon Butterfly Hat
Event(21470100, Default, function() {
    SelfdamageCharacterAndNearbyEnemiesPeriodic(50000000, 3, -1);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
});

// Moon Butterfly Wings
Event(21470101, Default, function() {
    ModifyJump(60, 1.75, 4, 5, 0.44, 0.44, 1);
    SelfdamageCharacterAndNearbyEnemiesPeriodic(50000000, 3, -1);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 2);
});

// Moon Butterfly Cuffs
Event(21470102, Default, function() {
    SelfdamageCharacterAndNearbyEnemiesPeriodic(50000000, 3, -1);
});

// Moon Butterfly Skirt
Event(21470103, Default, function() {
    ModifyJump(60, 1.75, 4, 5, 0.44, 0.44, 1);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 1);
    SelfdamageCharacterAndNearbyEnemiesPeriodic(50000000, 3, -1);
});

// Moon Butterfly Armor - Poison
Event(21470110, Default, function() {
    CreateBullet(50000010, 50000010, 0, 1);
});

// Moon Butterfly Armor - Poison
Event(21470120, Default, function() {
    SpawnSFX(5425, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Black Witch Hat
Event(21501100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.AttunementSlots, 0, 1);
});

// Black Witch Domino Mask
Event(21502100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 0.9);
    ModifyStatMultiplicatively(MultiplicativeStatType.SorceryPower, 0, 1.03);
    ModifyStatMultiplicatively(MultiplicativeStatType.MiraclePower, 0, 1.03);
    ModifyStatMultiplicatively(MultiplicativeStatType.PyromancyPower, 0, 1.03);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerStaff, 0, 1.03);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerChime, 0, 1.03);
});

// White Priest Headpiece
Event(22060100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

// Priestess Headpiece
Event(22062100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

// Black Hollow Mage Hood
Event(22180100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
});

// White Hollow Mage Hood
Event(22182100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
});

// Lion Mage Robe
Event(22190101, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.95);
});

// Lion Mage Cuffs
Event(22190102, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.95);
});

// Lion Mage Skirt
Event(22190103, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.95);
});

// Shadow Gauntlets
Event(22230102, Default, function() {
    ModifyDamageFlatToBaseAr(0, BuffType.Bleed, 50);
    IncreaseDamageMultiplicatively(0, BuffType.Bleed, 10);
});

// Archdrake Helm
Event(22310100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
});

// Dark Mask
Event(22360100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

// Warlock Mask
Event(22370100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.025);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 2);
});

// Tseldora Cap
Event(22460100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.025);
});

// Tseldora Robe
Event(22460101, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.05);
});

// Tseldora Manchettes
Event(22460102, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.1);
});

// Tseldora Trousers
Event(22460103, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.05);
});

// Ironclad Helm
Event(22510100, Default, function() {
    SetStateInfo(StateInfoType.PreventStaggerFromHeadshots, 0);
});

// Ironclad Armor
Event(22510101, Default, function() {
    SetStateInfo(StateInfoType.PreventCriticalHits, 0);
});

// Old Ironclad Helm
Event(22512100, Default, function() {
    SetStateInfo(StateInfoType.PreventStaggerFromHeadshots, 0);
});

// Old Ironclad Armor
Event(22512101, Default, function() {
    SetStateInfo(StateInfoType.PreventCriticalHits, 0);
});

// Prisoner's Hood
Event(22270100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    SetSpEffectLength(0);
});

// Prisoner's Tatters
Event(22270101, Default, function() {
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    SetSpEffectLength(0);
});

// Prisoner's Hood
Event(22271100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    SetSpEffectLength(0);
});

// Prisoner's Tatters
Event(22271101, Default, function() {
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    SetSpEffectLength(0);
});

// Lion Warrior Cape
Event(23080101, Default, function() {
    SetStateInfoCategory(StateInfoCategory.FallingDamage, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 1);
});

// Lion Warrior Cuffs
Event(23080102, Default, function() {
    SetStateInfoCategory(StateInfoCategory.FallingDamage, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 1);
});

// Lion Warrior Skirt
Event(23080103, Default, function() {
    SetStateInfoCategory(StateInfoCategory.FallingDamage, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 2);
});

// Lion Warrior Helm
Event(23081100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.FallingDamage, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 1);
});

// Red Lion Warrior Cape
Event(23081101, Default, function() {
    SetStateInfoCategory(StateInfoCategory.FallingDamage, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 2);
});

// Desert Sorceress Hood
Event(23160100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 3);
});

// Dragon Sage Hood
Event(23171100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

// Velstadt's Helm
Event(23330100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Vitality, 0, 1);
});

// Leydia Black Hood
Event(25090100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

// Insolent Helm
Event(25100100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 2);
});

// King's Crown
Event(25130100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 3);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 3);
    ApplySpEffectAndEndEventIfEventFlag(100730, 25130110, 0);
});

// King's Crown
Event(25130110, Default, function() {
    SetStateInfo(StateInfoType.PreventHollowing, 0);
    SetStateInfo(StateInfoType.ImmunitytoCurse, 0);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 3);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 3);
});

// Penal Mask
Event(26260100, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.03);
});

// Penal Handcuffs
Event(26260102, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.PyromancyPower, 0, 1.075);
});

// Black Hood
Event(27680100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 2);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 2);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.9);
});

// Saint's Hood
Event(27690100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxSpellUsages, 0, 1.05);
});

// Hexer's Hood
Event(27700100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxSpellUsages, 0, 1.05);
});

// Chaos Hood
Event(27710100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 3);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.95);
});

// Nahr Alma Hood
Event(27830100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.025);
});

// Nahr Alma Robes
Event(27830101, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.1);
});

// Northwarder Hood
Event(21610100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifySpellEffectLength(1.05);
});

// Northwarder Robe
Event(21610101, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifySpellEffectLength(1.025);
});

// Northwarder Manchettes
Event(21610102, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifySpellEffectLength(1.1);
});

// Northwarder Trousers
Event(21610103, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    ModifySpellEffectLength(1.025);
});

// Crown of the Old Iron King
Event(21630100, Default, function() {
    SelfdamageCharacterAndNearbyEnemiesPeriodic(51000000, 120, -1);
    ApplySpEffectAndEndEventIfEventFlag(100730, 21630105, 0);
});

// Crown of the Old Iron King
Event(21630105, Default, function() {
    SetStateInfo(StateInfoType.PreventHollowing, 0);
    SetStateInfo(StateInfoType.ImmunitytoCurse, 0);
    SelfdamageCharacterAndNearbyEnemiesPeriodic(51000000, 120, -1);
});

// Crown of the Old Iron King - Effect
Event(21630110, Default, function() {
    RestoreSpellUsage(20, 1);
    SpawnSFX(5466, 249, 1, 0, 0, 0);
    SetSpEffectLength(2);
});

// Crown of the Ivory King
Event(21640100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPRestoration, 0, 0);
    SpawnSFX(935, 249, 1, 40, 0, 0);
    HealSubEvent(1, 850, 1, 1.5, 0);
    ApplySpEffectAndEndEventIfEventFlag(100730, 21640110, 0);
});

// Crown of the Ivory King - Effect
Event(21640110, Default, function() {
    SetStateInfo(StateInfoType.PreventHollowing, 0);
    SetStateInfo(StateInfoType.ImmunitytoCurse, 0);
    SetStateInfoCategory(StateInfoCategory.HPRestoration, 0, 0);
    SpawnSFX(935, 249, 1, 40, 0, 0);
    HealSubEvent(1, 850, 1, 1.5, 0);
});

// Crown of the Sunken King
Event(21650100, Default, function() {
    ModifyAttributeBasedOnCurrentValue(AttributeType.Vitality, 0, 99, -1, -1);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Vigor, 0, 99, -1, -1);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Strength, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Dexterity, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
    ApplySpEffectAndEndEventIfEventFlag(100730, 21650110, 0);
});

// Crown of the Sunken King - Effect
Event(21650110, Default, function() {
    SetStateInfo(StateInfoType.PreventHollowing, 0);
    SetStateInfo(StateInfoType.ImmunitytoCurse, 0);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Vitality, 0, 99, -1, -1);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Vigor, 0, 99, -1, -1);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Strength, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Dexterity, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

// Old Bell Helm
Event(21660100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Spell, 0, 0);
    SetStateInfo(StateInfoType.PreventDamageFromHeadshots, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MiraclePower, 0, 1.015);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerChime, 0, 1.015);
});

// Hollow Skin
Event(21670100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.Resist, 0, 0);
    SetSpEffectLength(0);
});

// Pharros Mask
Event(21680100, Default, function() {
    ModifyProperty(PlayerPropertyType.Wetness, 0, 10);
});

// Flower Skirt
Event(21690103, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Vigor, 0, 2);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
});

// Symbol of Avarice
Event(21710100, Default, function() {
    SetStateInfoCategory(StateInfoCategory.SoulGain, 0, 0);
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.025);
    SelfdamageCharacterAndNearbyEnemiesPeriodic(51040000, 2, -1);
});

// Sanctum Knight Leggings
Event(26650103, Default, function() {
    SetStateInfoCategory(StateInfoCategory.FallingDamage, 0, 0);
    SpawnSFX(5446, 5, 1, 0, 0, 0);
    SpawnSFX(5446, 6, 1, 0, 0, 0);
    SetStateInfo(StateInfoType.SilenceFootstepSound, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 2);
});

// Sanctum Soldier Gauntlet
Event(26660102, Default, function() {
    ModifyDamageFlatToBaseAr(0, BuffType.Poison, 50);
});

// Sanctum Priestess Tiara
Event(26700100, Default, function() {
    SelfdamageCharacterAndNearbyEnemiesPeriodic(51020000, 7, -1);
});

// Sanctum Priestess Tiara
Event(26700110, Default, function() {
    StatusSubEvent(1, 870, 5, 1089470464);
});

// Loyce Helm
Event(26880100, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26880200, 26880210);
});

// Loyce Armor
Event(26880101, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26880201, 26880211);
});

// Loyce Gauntlets
Event(26880102, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26880202, 26880212);
});

// Loyce Leggings
Event(26880103, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26880203, 26880213);
});

// Loyce Helm - Effect
Event(26880210, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

// Loyce Armor - Effect
Event(26880211, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 20);
});

// Loyce Gauntlets - Effect
Event(26880212, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

// Loyce Leggings - Effect
Event(26880213, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

// Charred Loyce Helm
Event(26890100, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26890200, 26890210);
});

// Charred Loyce Armor
Event(26890101, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26890201, 26890211);
});

// Charred Loyce Gauntlets
Event(26890102, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26890202, 26890212);
});

// Charred Loyce Leggings
Event(26890103, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26890203, 26890213);
});

// Charred Loyce Helm - Effect
Event(26890210, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

// Charred Loyce Armor - effect
Event(26890211, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 20);
});

// Charred Loyce Gauntlets - Effect
Event(26890212, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

// Charred Loyce Leggings - Effect
Event(26890213, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

// Ivory King Helm
Event(26900100, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26900200, 26900210);
});

// Ivory King Armor
Event(26900101, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26900201, 26900211);
});

// Ivory King Gauntlets
Event(26900102, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26900202, 26900212);
});

// Ivory King Leggings
Event(26900103, Default, function() {
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26900203, 26900213);
});

// Ivory King Helm - effect
Event(26900210, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

// Ivory King Armor - Effect
Event(26900211, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 20);
});

// Ivory King Gauntlets - Effect
Event(26900212, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

// Ivory King Leggings - Effect
Event(26900213, Default, function() {
    SetStateInfoCategory(StateInfoCategory.HPAbsorb, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

// Peasant Hat
Event(22480100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 2);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

// Peasant Attire
Event(22480101, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 2);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

// Peasant Long Gloves
Event(22480102, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 2);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

// Peasant Trousers
Event(22480103, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 2);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

// Vengarl's Helm
Event(23070100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Vitality, 0, 2);
});

// Looking Glass Mask
Event(25040100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

// Agdayne's Cuffs
Event(25060102, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

// Cale's Helm
Event(27510100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Dexterity, 0, 2);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
});

// Mad Warrior Mask
Event(27550100, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 2);
});
