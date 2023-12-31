// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N   :   \   F   R   P   G   2   _   6   4   \   T   o   o   l   \   e   x   c   e   l   \   e   m   e   v   d   \   S   p   E   f   f   e   c   t   M   u   s   t   S   u   b   .   e   m   e   v   d                                                           
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

//
Event(900000, Default, function() {
    UnknownCommand10004005(0);
    UnknownCommand10004005(1);
});

// Poison
Event(900100, Default, function() {
    StatusSubEvent(1, 872, 0, 1102053376, 9010, 1050253722, 650, 249);
});

// Bleed
Event(900200, Default, function() {
    SelfdamageCharacterOneoff(9020);
});

// Bleed + Stamina Debuff
Event(900210, Default, function() {
    SpawnSFX(651, 249, 1, 0, 0, 0);
    ModifyStaminaRecovery(10, 0.7);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxStamina, 10, 0.75);
    UnknownCommand10009006(3, 0.5, 2);
    UnknownCommand10009006(3, 0.7, 1);
    StatusSubEvent(1, 872, 1, 1092616192, 0, 0, 0, 0);
});

// 
Event(900301, Default, function() {
    SpawnSFX(660, 249, 0, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 60, 0.95);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 60, 1.05);
});

// Curse
Event(900400, Default, function() {
    SpawnSFX(653, 249, 0, 0, 0, 0);
    StatusSubEvent(1, 872, 3, 1073741824, 0, 0, 0, 0);
    ModifyStatAdditively(AdditiveStatType.HollowingLevel, 0, 1);
});

// Fireball Impact - Knockback + Burn
Event(900500, Default, function() {
    SelfdamageCharacterOneoff(9051);
    SelfdamageCharacterAndNearbyEnemiesPeriodic(9050, 0.2, -1);
    StatusSubEvent(1, 872, 4, 1073741824, 0, 0, 0, 0);
});

// Toxic
Event(900600, Default, function() {
    UnknownCommand10004004(1, 10);
    StatusSubEvent(1, 872, 8, 1101004800, 9010, 1045220557, 650, 249);
});

// Wetness 
Event(900700, Default, function() {
    UnknownCommand10004004(1, 20);
    StatusSubEvent(1, 872, 9, 1127481344, 0, 0, 0, 0);
});

// Wetness - Water
Event(900800, Default, function() {
    StatusSubEvent(1, 872, 6, 1133903872, 0, 0, 0, 0);
    UnknownCommand10070002();
    BuffDefense(300, BuffType.Fire, 30);
    NerfDefense(300, BuffType.Lightning, 15);
});

// Wetness - Poison
Event(900900, Default, function() {
    SelfdamageCharacterAndNearbyEnemiesPeriodic(9090, 0.45, -1);
    UnknownCommand10004004(1, 20);
    StatusSubEvent(1, 872, 11, 1110704128, 0, 0, 0, 0);
});

// Heal
Event(901000, Default, function() {
    HealSubEvent(1, 850, 3000, 1, 0);
});

// White Smoke Aura
Event(901100, Default, function() {
    ApplyChrfullbodysfx(400010, 0);
});

// Wetness - Ash
Event(901110, Default, function() {
    ModifyStatAdditively(AdditiveStatType.Unknown19, 3600, 19);
    ModifyProperty(PlayerPropertyType.Wetness, 3600, 6);
});

// 
Event(902000, Default, function() {
    StatusSubEvent(1, 872, 12, 1114636288, 0, 0, 0, 0);
});

// 
Event(902100, Default, function() {
    StatusSubEvent(1, 872, 13, 1114636288, 0, 0, 0, 0);
});

// 
Event(902200, Default, function() {
    StatusSubEvent(1, 872, 14, 1114636288, 0, 0, 0, 0);
});

// 
Event(902300, Default, function() {
    StatusSubEvent(1, 872, 15, 1084227584, 0, 0, 0, 0);
    UnknownCommand10070002();
    BuffDefense(300, BuffType.Fire, 10);
    NerfDefense(300, BuffType.Lightning, 10);
});

// 
Event(902400, Default, function() {
    StatusSubEvent(1, 872, 14, 1114636288, 0, 0, 0, 0);
});
