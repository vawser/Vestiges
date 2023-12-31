// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N : \ F R P G 2 _ 6 4 \ T o o l \ e x c e l \ e m e v d \ S p E f f e c t M u s t S u b . e m e v d                             
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

// Leydia Witch
Event(90000010, Default, function() {
    CreateBullet(150900512, 150900512, 0, 1);
    SetSpEffectLength(3);
});

// Lion Clan Mage
Event(91190010, Default, function() {
    SpawnSFX(1976, 249, 1, 0, 0, 0);
    UnknownCommand10004004(0, 7);
    UnknownCommand10009006(10, 0.1, 1);
    UnknownCommand10009007(10, 0.1, 1);
    ModifyStatAdditively(AdditiveStatType.Weight, 10, 50);
});

// Hollow Priest
Event(91060010, Default, function() {
    SpawnSFX(1972, 220, 0, 0, 0, 0);
    SpawnSFX(1973, 220, 1, 0, 0, 0);
    SetSpEffectLength(60);
});

// Hollow Priest + Blue Sentinel Targray
Event(91060020, Default, function() {
    SpawnSFX(1995, 220, 0, 0, 0, 0);
    SpawnSFX(1996, 220, 1, 0, 0, 0);
    BuffDefense(60, BuffType.AllPhysical, 500);
});

// Amana Shrine Maiden
Event(91060030, Default, function() {
    SpawnSFX(1998, 9, 0, 0, 0, 0);
    SpawnSFX(5200, 249, 1, 0, 0, 0);
    HPRestorationEffect(1, 2);
    HealSubEvent(1, 850, 450, 1, 1);
});

Event(91130010, Default, function() {
    HPRestorationEffect(0.65, 3.5);
    HealSubEvent(1, 850, 600, 1, 1);
});

Event(91180010, Default, function() {
    SpawnSFX(4070, 220, 0, 0, 0, 0);
    SpawnSFX(4071, 249, 1, 0, 0, 0);
    ApplyBuffSpellEffect();
    BuffDamageUnknown(60, BuffType.AllPhysical, 50);
});

Event(91270000, Default, function() {
    CreateBullet(112701300, 112701300, 0, 1);
    SetSpEffectLength(3);
});

Event(91270010, Default, function() {
    SetSpEffectLength(3);
});

Event(91290010, Default, function() {
    SpawnSFX(5053, 9, 0, 0, 0, 0);
    SpawnSFX(5203, 249, 1, 0, 0, 0);
    HPRestorationEffect(0.7, 2);
    HealSubEvent(1, 850, 1200, 1.5, 1);
});

Event(91290020, Default, function() {
    SpawnSFX(5070, 9, 0, 0, 0, 0);
    SpawnSFX(5219, 249, 1, 0, 0, 0);
    ApplyBuffSpellEffect();
    BuffDefense(90, BuffType.Magic, 25);
    ApplyBuffSpellEffect();
    BuffDefense(90, BuffType.Lightning, 25);
    ApplyBuffSpellEffect();
    BuffDefense(90, BuffType.Fire, 25);
    ApplyBuffSpellEffect();
    BuffDefense(90, BuffType.Dark, 25);
});

Event(91290030, Default, function() {
    SpawnSFX(5033, 249, 0, 0, 0, 0);
    SpawnSFX(5188, 249, 1, 5, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 60, 0.7);
    ModifyStatMultiplicatively(MultiplicativeStatType.SorceryPower, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.MiraclePower, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.PyromancyPower, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerStaff, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerChime, 60, 1.2);
});

Event(91310010, Default, function() {
    SpawnSFX(5051, 9, 0, 0, 0, 0);
    SpawnSFX(5201, 249, 1, 0, 0, 0);
    HPRestorationEffect(0.7, 2);
    HealSubEvent(1, 850, 650, 1, 1);
});

Event(91310020, Default, function() {
    SpawnSFX(0, 249, 1, 0, 0, 0);
    HealSubEvent(1, 850, 840, 120, 0);
});

Event(91320010, Default, function() {
    SpawnSFX(1608, 9, 1, 0, 0, 0);
    HealSubEvent(1, 851, 1120403456, 1, 1);
});

Event(91320020, Default, function() {
    SelfdamageCharacterOneoff(113200000);
});

Event(91320030, Default, function() {
    SetCharacterImmortality(false);
});

Event(92120010, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1);
});

Event(92120020, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1.5);
});

Event(93050010, Default, function() {
    CreateBullet(130500000, 130500000, 0, 1);
    SpawnSFX(1821, 30, 1, 0, 0, 0);
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1);
    UnknownCommand10070002();
    BuffDamageUnknown(0, BuffType.Fire, 0);
});

Event(93050011, Default, function() {
    CreateBullet(130510000, 130510000, 0, 1);
    SpawnSFX(8461, 30, 1, 0, 0, 0);
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1);
    UnknownCommand10070002();
    BuffDamageUnknown(0, BuffType.Fire, 0);
});

Event(93180010, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1.35);
    BuffDamageUnknown(0, BuffType.Dark, 0);
});

Event(93180020, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1.45);
    BuffDamageUnknown(0, BuffType.Dark, 0);
});

Event(93320010, Default, function() {
    SpawnSFX(1840, 100, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 45, 1);
    BuffDamageUnknown(45, BuffType.Lightning, 250);
});

Event(93320020, Default, function() {
    SpawnSFX(1842, 220, 1, 0, 0, 0);
    HealSubEvent(1, 851, 1120403456, 3, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 3, 0.5);
});

Event(93320030, Default, function() {
    SetCharacterImmortality(false);
    SelfdamageCharacterOneoff(100010000);
});

Event(93330010, Default, function() {
    SpawnSFX(1925, 220, 1, 0, 0, 0);
    UnknownCommand10070002();
    BuffDamageUnknown(0, BuffType.Dark, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1.4);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0.6);
});

Event(93340010, Default, function() {
    SpawnSFX(1845, 100, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 45, 1);
    BuffDamageUnknown(45, BuffType.Lightning, 310);
});

Event(93340020, Default, function() {
    SpawnSFX(1847, 220, 1, 0, 0, 0);
    HealSubEvent(1, 851, 1120403456, 3, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 3, 0.5);
});

Event(93340030, Default, function() {
    SetCharacterImmortality(false);
    SelfdamageCharacterOneoff(100010000);
});

Event(95000010, Default, function() {
    ForceUnequipArmor(1, 8, 2, 3, 4);
});

Event(95010010, Default, function() {
    SpawnSFX(1958, 220, 1, 0, 0, 0);
    HealSubEventUnknown(1, 851, 1065353216, 0, 1);
    SetSpEffectLength(2);
});

Event(95061010, Default, function() {
    SetSpEffectLength(1);
});

Event(95146010, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0.03125);
});

Event(95146020, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0.0625);
});

Event(95146030, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0.125);
});

Event(95146040, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0.25);
});

Event(95146050, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0.5);
});

Event(95146060, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 1);
});

Event(96270000, Default, function() {
    SpawnSFX(3739, 249, 1, 0, 0, 0);
    SetSpEffectLength(0.5);
});

Event(96030010, Default, function() {
    SpawnSFX(655, 249, 1, 0, 0, 0);
    UnknownCommand10004004(0, 7);
    UnknownCommand10009006(20, 0.5, 1);
    UnknownCommand10009007(20, 0.5, 1);
    ModifyStatAdditively(AdditiveStatType.Weight, 20, 50);
});

Event(96080010, Default, function() {
    SpawnSFX(873, 9, 1, 0, 0, 0);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
});

Event(96191020, Default, function() {
    SetCharacterImmortality(false);
});

Event(96500010, Default, function() {
    CreateBullet(165000000, 165000000, 0, 1);
    CreateBullet(165000004, 165000004, 0, 1);
    SetSpEffectLength(3);
});

Event(96500011, Default, function() {
    CreateBullet(165000000, 165000000, 0, 1);
    SetSpEffectLength(3.7);
});

Event(96500012, Default, function() {
    CreateBullet(165000000, 165000000, 0, 1);
    SetSpEffectLength(4.4);
});

Event(96500013, Default, function() {
    CreateBullet(165000000, 165000000, 0, 1);
    SetSpEffectLength(2.4);
});

Event(96500014, Default, function() {
    CreateBullet(165000000, 165000000, 0, 1);
    SetSpEffectLength(1.8);
});

Event(96500020, Default, function() {
    CreateBullet(165000001, 165000001, 0, 1);
    CreateBullet(165000005, 165000005, 0, 1);
    SetSpEffectLength(3);
});

Event(96500021, Default, function() {
    CreateBullet(165000000, 165000001, 0, 1);
    SetSpEffectLength(3.7);
});

Event(96500022, Default, function() {
    CreateBullet(165000000, 165000001, 0, 1);
    SetSpEffectLength(4.4);
});

Event(96500023, Default, function() {
    CreateBullet(165000000, 165000001, 0, 1);
    SetSpEffectLength(2.4);
});

Event(96500024, Default, function() {
    CreateBullet(165000000, 165000001, 0, 1);
    SetSpEffectLength(1.8);
});

Event(96530000, Default, function() {
    UnknownCommand10070002();
    BuffDamageUnknown(3600, BuffType.Fire, 250);
});

Event(96540000, Default, function() {
    BuffDamageUnknown(2, BuffType.Fire, 150);
    CreateBullet(165401000, 165401000, 0, 1);
});

Event(96570000, Default, function() {
    UnknownCommand10070002();
    UnknownCommand100016(4, 165700000, 165700000, 20);
    SetStateInfo(StateInfoType.Unknown49, 0);
});

Event(96590000, Default, function() {
    HealSubEvent(1, 851, 1114636288, 1, 1);
});

Event(96650000, Default, function() {
    UnknownCommand10070002();
    SetStateInfo(StateInfoType.Unknown33, 60);
    SetStateInfo(StateInfoType.Unknown50, 60);
    ModifyStatAdditively(AdditiveStatType.Unknown19, 60, 41);
    ModifyProperty(PlayerPropertyType.Unknown18, 60, 31);
    SetStateInfo(StateInfoType.Unknown54, 60);
    SetStateInfo(StateInfoType.Unknown34, 60);
    SetStateInfo(StateInfoType.Unknown39, 60);
    SetStateInfo(StateInfoType.Unknown40, 60);
    SetStateInfo(StateInfoType.Unknown41, 60);
    SetStateInfo(StateInfoType.Unknown43, 60);
    SetStateInfo(StateInfoType.Unknown44, 60);
    SetStateInfo(StateInfoType.Unknown46, 60);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0.4);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 0.7);
    SetStateInfo(StateInfoType.PreventCriticalHits, 0);
    SetStateInfo(StateInfoType.Unknown52, 60);
    SetStateInfo(StateInfoType.Unknown51, 60);
    SetStateInfo(StateInfoType.Unknown53, 60);
});

Event(96650010, Default, function() {
    CreateBullet(166500000, 166500000, 0, 1);
    SetSpEffectLength(5);
});

Event(96560000, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Wetness, 0, 7);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1);
    SetCharacterImmortality(true);
});

Event(96560010, Default, function() {
    BuffDamageUnknown(0, BuffType.AllPhysical, 0);
});

Event(96560020, Default, function() {
    HealSubEvent(1, 851, 1120403456, 0.1, 1);
});

Event(96560100, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Wetness, 0, 7);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0.5);
    ModifyStatAdditively(AdditiveStatType.Poise, 0, 30);
});

Event(96560110, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Wetness, 0, 7);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1.25);
});

Event(96560200, Default, function() {
    SpawnSFX(8346, 249, 1, 0, 0, 0);
    CreateBullet(320090000, 320090000, 0, 1);
    SetSpEffectLength(5);
});

Event(96560210, Default, function() {
    SpawnSFX(8346, 249, 1, 0, 0, 0);
    CreateBullet(320090000, 320090000, 0, 1);
    SetSpEffectLength(5);
    SetCharacterImmortality(false);
});

Event(96560220, Default, function() {
    SpawnSFX(8347, 249, 1, 0, 0, 0);
    CreateBullet(320090000, 320090000, 0, 1);
    SetSpEffectLength(5);
});

Event(96560300, Default, function() {
    UnknownCommand10070002();
    SpawnSFX(8348, 249, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1);
});

Event(96560310, Default, function() {
    UnknownCommand10070002();
    SpawnSFX(8348, 249, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1);
});

Event(96560320, Default, function() {
    UnknownCommand10070002();
    SpawnSFX(8349, 249, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1);
});

Event(96560400, Default, function() {
    SpawnSFX(8346, 249, 1, 0, 0, 0);
    SetSpEffectLength(5);
});

Event(96560410, Default, function() {
    SpawnSFX(8346, 249, 1, 0, 0, 0);
    SetSpEffectLength(5);
});

Event(96560420, Default, function() {
    SpawnSFX(8347, 249, 1, 0, 0, 0);
    SetSpEffectLength(5);
});

Event(96620000, Default, function() {
    CreateBullet(166201000, 166201000, 0, 1);
    BuffDamageUnknown(3, BuffType.AllPhysical, 0);
});

Event(96660000, Default, function() {
    CreateBullet(166604000, 166604000, 0, 1);
    BuffDamageUnknown(3, BuffType.AllPhysical, 0);
});

Event(96660010, Default, function() {
    HealSubEvent(1, 851, 1114636288, 1, 1);
});

Event(96700000, Default, function() {
    UnknownCommand10070002();
    SetStateInfo(StateInfoType.Unknown28, 0);
});

Event(96710010, Default, function() {
    CreateBullet(167100000, 167100000, 0, 1);
    SetSpEffectLength(3);
});

Event(96710011, Default, function() {
    CreateBullet(167100001, 167100001, 0, 1);
    SetSpEffectLength(3);
});

Event(96710012, Default, function() {
    CreateBullet(167100002, 167100002, 0, 1);
    SetSpEffectLength(3);
});

Event(96710013, Default, function() {
    CreateBullet(167100003, 167100003, 0, 1);
    SetSpEffectLength(3);
});

Event(96710020, Default, function() {
    UnknownCommand10070002();
    SetStateInfo(StateInfoType.Unknown49, 0);
});

Event(96711010, Default, function() {
    CreateBullet(167110000, 167110000, 0, 1);
    SetSpEffectLength(3);
});

Event(96711011, Default, function() {
    CreateBullet(167110001, 167110001, 0, 1);
    SetSpEffectLength(3);
});

Event(96711012, Default, function() {
    CreateBullet(167110002, 167110002, 0, 1);
    SetSpEffectLength(3);
});

Event(96711013, Default, function() {
    CreateBullet(167110003, 167110003, 0, 1);
    SetSpEffectLength(3);
});

Event(96740000, Default, function() {
    ModifyProperty(PlayerPropertyType.Unknown30, 0, 30);
    ModifyProperty(PlayerPropertyType.Unknown31, 0, 50);
    ModifyProperty(PlayerPropertyType.Unknown32, 0, 20);
    SpawnSFX(867, 220, 1, 0, 0, 0);
    SetSpEffectLength(5);
});

Event(96720000, Default, function() {
    CreateBullet(167200000, 167200000, 0, 1);
    BuffDamageUnknown(30, BuffType.AllPhysical, 0);
});

Event(96720010, Default, function() {
    ModifyProperty(PlayerPropertyType.EquippedRightHandWeaponDurability, 0, -2);
    ModifyProperty(PlayerPropertyType.EquippedLeftHandWeaponDurability, 0, -2);
    ModifyProperty(PlayerPropertyType.EquippedArmorDurability, 0, -2);
    ModifyProperty(PlayerPropertyType.EquippedRingsDurability, 0, -1);
    CreateBullet(167200001, 167200001, 0, 1);
});

Event(96720020, Default, function() {
    SpawnSFX(659, 249, 1, 0, 0, 0);
    SetSpEffectLength(1.5);
});

Event(96750000, Default, function() {
    SpawnSFX(8304, 220, 1, 0, 0, 0);
    HealSubEvent(1, 851, 1092616192, 2, 1);
    SetSpEffectLength(3);
});

Event(96750010, Default, function() {
    BuffDamageUnknown(20, BuffType.Fire, 100);
});

Event(96750100, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Wetness, 0, 7);
});

Event(96750110, Default, function() {
    ModifyProperty(PlayerPropertyType.Wetness, 0.1, 10);
});

Event(96780000, Default, function() {
    UnknownCommand10070002();
    SpawnSFX(8636, 255, 1, 0, 0, 0);
    SetSpEffectLength(0);
});

Event(96780100, Default, function() {
    SoulSubEvent(1, 930, 1, 5255);
});

Event(96790000, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Unknown18, 60, 40);
    SetStateInfo(StateInfoType.Unknown55, 0);
    SetStateInfo(StateInfoType.Unknown56, 0);
    SetStateInfo(StateInfoType.Unknown57, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0.8);
});

Event(96790010, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Unknown18, 60, 41);
    SetStateInfo(StateInfoType.Unknown55, 0);
    SetStateInfo(StateInfoType.Unknown56, 0);
    SetStateInfo(StateInfoType.Unknown57, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0.8);
});

Event(96790020, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Unknown18, 60, 42);
    SpawnSFX(8651, 200, 1, 0, 0, 0);
    SpawnSFX(8651, 201, 1, 0, 0, 0);
    SpawnSFX(8651, 202, 1, 0, 0, 0);
    SpawnSFX(8651, 203, 1, 0, 0, 0);
    SpawnSFX(8650, 204, 1, 0, 0, 0);
    SpawnSFX(8650, 205, 1, 0, 0, 0);
    SpawnSFX(8650, 206, 1, 0, 0, 0);
    SpawnSFX(8650, 207, 1, 0, 0, 0);
});

Event(96790030, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Unknown18, 60, 43);
    SpawnSFX(8648, 200, 1, 0, 0, 0);
    SpawnSFX(8648, 201, 1, 0, 0, 0);
    SpawnSFX(8648, 202, 1, 0, 0, 0);
    SpawnSFX(8648, 203, 1, 0, 0, 0);
    SpawnSFX(8647, 204, 1, 0, 0, 0);
    SpawnSFX(8647, 205, 1, 0, 0, 0);
    SpawnSFX(8647, 206, 1, 0, 0, 0);
    SpawnSFX(8647, 207, 1, 0, 0, 0);
});

Event(96790100, Default, function() {
    SpawnSFX(8656, 220, 0, 0, 0, 0);
    SpawnSFX(8657, 220, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 60, 0.5);
    HealSubEvent(1, 851, 1108082688, 60, 1);
});

Event(96800000, Default, function() {
    SpawnSFX(8448, 100, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 60, 1.35);
});

Event(96810000, Default, function() {
    UnknownCommand10070002();
    SetStateInfo(StateInfoType.Unknown28, 0);
});

Event(96850000, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Wetness, 0, 8);
    BuffDamageUnknown(0, BuffType.Poison, 20);
});

Event(96880000, Default, function() {
    SpawnSFX(8619, 201, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 21, 0.75, 1.5, 1, 1, 1, 1);
    SetSpEffectLength(45);
});

Event(96880100, Default, function() {
    SetSpEffectLength(1);
});

Event(96880200, Default, function() {
    SetSpEffectLength(1);
});

Event(96900000, Default, function() {
    SetSpEffectLength(1);
});

Event(96920000, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 1, 0.3);
    CreateBullet(169200500, 169200500, 0, 1);
    CreateBullet(169200501, 169200501, 0, 1);
    SetSpEffectLength(1);
});

Event(96920010, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 1, 0.1);
    CreateBullet(169200510, 169200510, 0, 1);
    CreateBullet(169200511, 169200511, 0, 1);
    SetSpEffectLength(1);
});

Event(96920020, Default, function() {
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 1, 1);
    SetSpEffectLength(1);
});

Event(96920030, Default, function() {
    SetSpEffectLength(1);
});

Event(96920040, Default, function() {
    SetSpEffectLength(1);
});

Event(96920050, Default, function() {
    SetSpEffectLength(1);
});

Event(96940000, Default, function() {
    UnknownCommand10070002();
    SpawnSFX(24040, 7, 1, 0, 0, 0);
    SetSpEffectLength(1);
});

Event(96960000, Default, function() {
    UnknownCommand10070002();
    SetStateInfo(StateInfoType.Unknown60, 60);
    SetStateInfo(StateInfoType.Unknown55, 0);
    SetStateInfo(StateInfoType.Unknown57, 0);
});

Event(97420010, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0);
});

Event(97440010, Default, function() {
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0);
});

Event(97690010, Default, function() {
    SpawnSFX(5206, 249, 1, 0, 0, 0);
    HealSubEvent(1, 850, 840, 60, 0);
});

Event(98350010, Default, function() {
    UnknownCommand10070002();
    SpawnSFX(954, 249, 1, 0, 0, 0);
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 0, 1.5);
    UnknownCommand10070002();
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 0, 0.75);
});

Event(98382000, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Unknown18, 60, 209);
    SetStateInfo(StateInfoType.Unknown55, 0);
});

Event(98660010, Default, function() {
    SpawnSFX(24045, 10, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 21, 0.75, 1.5, 1, 1, 1, 1);
    SetSpEffectLength(45);
});

Event(98720010, Default, function() {
    CreateBullet(72230011, 192230011, 0, 0);
});

Event(98720011, Default, function() {
    SpawnSFX(5222, 249, 1, 6, 0, 0);
    BuffDamageUnknown(65, BuffType.AllPhysical, 50);
    BuffDefense(65, BuffType.AllPhysical, 75);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 65, 0.9);
});

Event(98830000, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Unknown18, 60, 40);
    SetStateInfo(StateInfoType.Unknown55, 0);
    SetStateInfo(StateInfoType.Unknown56, 0);
    SetStateInfo(StateInfoType.Unknown57, 0);
});

Event(98830010, Default, function() {
    UnknownCommand10070002();
    ModifyProperty(PlayerPropertyType.Unknown18, 60, 41);
    SetStateInfo(StateInfoType.Unknown55, 0);
    SetStateInfo(StateInfoType.Unknown56, 0);
    SetStateInfo(StateInfoType.Unknown57, 0);
});
