// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N   :   \   F   R   P   G   2   _   6   4   \   T   o   o   l   \   e   x   c   e   l   \   e   m   e   v   d   \   S   p   E   f   f   e   c   t   M   u   s   t   S   u   b   .   e   m   e   v   d                                                           
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

// Homing Soulmass
Event(31070000, Default, function() {
    ApplySpEffectBasedOnIntelligence(15, 24, 30, 40, 31070090);
});

// Homing Soulmass - Applied on INT Breakpoint - 1
Event(31070090, Default, function() {
    BatchCreateBullets(6, 30, 31070010, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 2
Event(31070091, Default, function() {
    BatchCreateBullets(6, 30, 31070011, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 3
Event(31070092, Default, function() {
    BatchCreateBullets(6, 30, 31070012, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 4
Event(31070093, Default, function() {
    BatchCreateBullets(6, 30, 31070013, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 5
Event(31070094, Default, function() {
    BatchCreateBullets(6, 30, 31070014, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 6
Event(31070095, Default, function() {
    BatchCreateBullets(6, 30, 31070015, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 7
Event(31070096, Default, function() {
    BatchCreateBullets(6, 30, 31070016, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 8
Event(31070097, Default, function() {
    BatchCreateBullets(6, 30, 31070017, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 9
Event(31070098, Default, function() {
    BatchCreateBullets(6, 30, 31070018, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 10
Event(31070099, Default, function() {
    BatchCreateBullets(6, 30, 31070019, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 11
Event(31070100, Default, function() {
    BatchCreateBullets(6, 30, 31070020, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 12
Event(31070101, Default, function() {
    BatchCreateBullets(6, 30, 31070021, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 13
Event(31070102, Default, function() {
    BatchCreateBullets(6, 30, 31070022, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 14
Event(31070103, Default, function() {
    BatchCreateBullets(6, 30, 31070023, 31070010);
});

// Homing Soulmass - Applied on INT Breakpoint - 15
Event(31070104, Default, function() {
    BatchCreateBullets(6, 30, 31070024, 31070010);
});

// Homing Crystal Soulmass
Event(31080000, Default, function() {
    ApplySpEffectBasedOnIntelligence(24, 30, 40, 50, 31080090);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 1
Event(31080090, Default, function() {
    BatchCreateBullets(6, 30, 31080010, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 2
Event(31080091, Default, function() {
    BatchCreateBullets(6, 30, 31080011, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 3
Event(31080092, Default, function() {
    BatchCreateBullets(6, 30, 31080012, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 4
Event(31080093, Default, function() {
    BatchCreateBullets(6, 30, 31080013, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 5
Event(31080094, Default, function() {
    BatchCreateBullets(6, 30, 31080014, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 6
Event(31080095, Default, function() {
    BatchCreateBullets(6, 30, 31080015, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 7
Event(31080096, Default, function() {
    BatchCreateBullets(6, 30, 31080016, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 8
Event(31080097, Default, function() {
    BatchCreateBullets(6, 30, 31080017, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 9
Event(31080098, Default, function() {
    BatchCreateBullets(6, 30, 31080018, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 10
Event(31080099, Default, function() {
    BatchCreateBullets(6, 30, 31080019, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 11
Event(31080100, Default, function() {
    BatchCreateBullets(6, 30, 31080020, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 12
Event(31080101, Default, function() {
    BatchCreateBullets(6, 30, 31080021, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 13
Event(31080102, Default, function() {
    BatchCreateBullets(6, 30, 31080022, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 14
Event(31080103, Default, function() {
    BatchCreateBullets(6, 30, 31080023, 31080010);
});

// Homing Crystal Soulmass - Applied on INT Breakpoint - 15
Event(31080104, Default, function() {
    BatchCreateBullets(6, 30, 31080024, 31080010);
});

// Magic Weapon - Right Hand
Event(31180000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5177, 0.1, 0, 1, 0, 0);
    SpawnSFX(5310, 21, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 15, 0.7, 1.5, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(90, BuffType.Magic, 15);
    ModifyDamageFlatToBaseAr(90, BuffType.Magic, 30);
});

// Magic Weapon - Left Hand
Event(31181000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5177, 0.1, 0, 1, 0, 0);
    SpawnSFX(5310, 20, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 15, 0.7, 1.5, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(90, BuffType.Magic, 15);
    ModifyDamageFlatToBaseAr(90, BuffType.Magic, 30);
});

// Great Magic Weapon - Right Hand
Event(31190000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5178, 0.1, 0, 1, 0, 0);
    SpawnSFX(5311, 21, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 27, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(90, BuffType.Magic, 20);
    ModifyDamageFlatToBaseAr(90, BuffType.Magic, 30);
});

// Great Magic Weapon - Left Hand
Event(31191000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5178, 0.1, 0, 1, 0, 0);
    SpawnSFX(5311, 20, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 27, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(90, BuffType.Magic, 20);
    ModifyDamageFlatToBaseAr(90, BuffType.Magic, 30);
});

// Crystal Magic Weapon - Right Hand
Event(31200000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5179, 0.1, 0, 1, 0, 0);
    SpawnSFX(5312, 21, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 14, 42, 0.3, 1.1, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(90, BuffType.Magic, 30);
    ModifyDamageFlatToBaseAr(90, BuffType.Magic, 15);
});

// Crystal Magic Weapon - Left Hand
Event(31201000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5179, 0.1, 0, 1, 0, 0);
    SpawnSFX(5312, 20, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 14, 42, 0.3, 1.1, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(90, BuffType.Magic, 30);
    ModifyDamageFlatToBaseAr(90, BuffType.Magic, 15);
});

// Strong Magic Shield - Right Hand
Event(31210000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5180, 0.1, 0, 1, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 27, 0.7, 2, 1, 1, 1, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.ShieldStability, 30, 5);
    ModifyStatMultiplicatively(MultiplicativeStatType.PhysicalAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.MagicAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.LightningAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.FireAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.DarkAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.BleedAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.CurseAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.PetrifyAbsorption, 30, 100);
});

// Strong Magic Shield - Left Hand
Event(31211000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5180, 0.1, 0, 1, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 27, 0.7, 2, 1, 1, 1, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.ShieldStability, 30, 5);
    ModifyStatMultiplicatively(MultiplicativeStatType.PhysicalAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.MagicAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.LightningAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.FireAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.DarkAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.BleedAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.CurseAbsorption, 30, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.PetrifyAbsorption, 30, 100);
});

// Huish
Event(31230000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5182, 5, 1, 0, 0, 0);
    SpawnSFX(5182, 6, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 22, 0.65, 1.25, 1, 1, 1, 1);
    SetStateInfo(StateInfoType.SilenceFootstepSound, 90);
});

// Fall Control
Event(31240000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5183, 5, 1, 0, 0, 0);
    SpawnSFX(5183, 6, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 22, 0.65, 1.25, 1, 1, 1, 1);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 90, 100);
});

// Hidden Weapon - Right Hand
Event(31250001, Default, function() {
    SpawnBuffSFX(5184, 0.1, 0, 1, 0, 0);
    SetSpEffectLength(1);
});

// Hidden Weapon - Right Hand
Event(31250002, Default, function() {
    ApplyBuffSpellEffect();
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 21, 0.85, 1.25, 1, 1, 1, 1);
    SetStateInfo(StateInfoType.HideLeftWeapon, 90);
});

// Hidden Weapon - Left Hand
Event(31251001, Default, function() {
    SpawnBuffSFX(5184, 0.1, 0, 1, 0, 0);
    SetSpEffectLength(1);
});

// Hidden Weapon - Left Hand
Event(31251002, Default, function() {
    ApplyBuffSpellEffect();
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 21, 0.85, 1.25, 1, 1, 1, 1);
    SetStateInfo(StateInfoType.HideRightWeapon, 90);
});

// Repair
Event(31260000, Default, function() {
    SpawnSFX(5185, 249, 0, 0, 0, 0);
    ModifyProperty(PlayerPropertyType.EquippedLeftHandWeaponDurability, 0, 20);
    ModifyProperty(PlayerPropertyType.EquippedRightHandWeaponDurability, 0, 20);
    ModifyProperty(PlayerPropertyType.EquippedArmorDurability, 0, 30);
    ModifyProperty(PlayerPropertyType.EquippedRingsDurability, 0, 10);
});

// Cast Light
Event(31270000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5186, 10, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 21, 0.75, 1.5, 1, 1, 1, 1);
    ModifyProperty(PlayerPropertyType.Unknown19, 45, 50);
});

// Chameleon
Event(31280000, Default, function() {
    SpawnSFX(5032, 249, 0, 0, 0, 0);
    SelfdamageCharacterOneoff(32230050);
    SelfdamageCharacterOneoff(32080050);
});

// Chameleon - Assign Object
Event(31280010, Default, function() {
    ApplyRandomSpEffect(31280001, 31280002, 31280003, 31280004, 31280005);
});

// Chameleon - Assign Object 1
Event(31280001, Default, function() {
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 0, 5187);
});

// Chameleon - Assign Object 2
Event(31280002, Default, function() {
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 1, 5187);
});

// Chameleon - Assign Object 3
Event(31280003, Default, function() {
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 2, 5187);
});

// Chameleon - Assign Object 4
Event(31280004, Default, function() {
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 3, 5187);
});

// Chameleon - Assign Object 5
Event(31280005, Default, function() {
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 4, 5187);
});

// Unleash Magic
Event(31290000, Default, function() {
    SpawnSFX(5033, 249, 0, 0, 0, 0);
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Unleash Magic
Event(31290001, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5188, 249, 1, 5, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 29, 87, 0.5, 2, 1, 1, 1, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 60, 0.7);
    ModifyStatMultiplicatively(MultiplicativeStatType.SorceryPower, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.MiraclePower, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.PyromancyPower, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerStaff, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerChime, 60, 1.2);
});

// Heal
Event(32010000, Default, function() {
    CreateBulletBasedOnAttribute(32010010, 32010010, AttributeType.Faith, 12, 22, 32, 42);
});

// Heal - Base
Event(32010010, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 12, 22, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 300, 1, 1);
    SpawnSFX(5200, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Heal - Breakpoint 1
Event(32010011, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 12, 22, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 450, 1, 1);
    SpawnSFX(5200, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Heal - Breakpoint 2
Event(32010012, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 12, 22, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 500, 1, 1);
    SpawnSFX(5200, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Heal - Breakpoint 3
Event(32010013, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 12, 22, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 550, 1, 1);
    SpawnSFX(5200, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Heal - Breakpoint 4
Event(32010014, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 12, 22, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 600, 1, 1);
    SpawnSFX(5200, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Med Heal
Event(32020000, Default, function() {
    CreateBulletBasedOnAttribute(32020010, 32020010, AttributeType.Faith, 15, 18, 28, 38);
});

// Med Heal - Base
Event(32020010, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 18, 28, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 400, 1.25, 1);
    SpawnSFX(5201, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Med Heal - Breakpoint 1
Event(32020011, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 18, 28, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 600, 1.25, 1);
    SpawnSFX(5201, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Med Heal - Breakpoint 2
Event(32020012, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 18, 28, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 800, 1.25, 1);
    SpawnSFX(5201, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Med Heal - Breakpoint 3
Event(32020013, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 18, 28, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 825, 1.25, 1);
    SpawnSFX(5201, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Med Heal - Breakpoint 4
Event(32020014, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 18, 28, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 850, 1.25, 1);
    SpawnSFX(5201, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Great Heal Excerpt
Event(32030000, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 10, 14, 0.5, 1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 1300, 1.5, 1);
    SpawnSFX(5202, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Great Heal
Event(32040000, Default, function() {
    CreateBulletBasedOnAttribute(32040010, 32040010, AttributeType.Faith, 18, 28, 38, 48);
});

// Great Heal - Base
Event(32040010, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 28, 38, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 600, 1.75, 1);
    SpawnSFX(5203, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Great Heal - Breakpoint 1
Event(32040011, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 28, 38, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 1000, 1.75, 1);
    SpawnSFX(5203, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Great Heal - Breakpoint 2
Event(32040012, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 28, 38, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 1100, 1.75, 1);
    SpawnSFX(5203, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Great Heal - Breakpoint 3
Event(32040013, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 28, 38, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 1200, 1.75, 1);
    SpawnSFX(5203, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Great Heal - Breakpoint 4
Event(32040014, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 28, 38, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 1300, 1.75, 1);
    SpawnSFX(5203, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Soothing Sunlight
Event(32050000, Default, function() {
    CreateBulletBasedOnAttribute(32050010, 32050010, AttributeType.Faith, 32, 42, 52, 62);
});

// Soothing Sunlight - Base
Event(32050010, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 52, 62, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 500, 1.75, 1);
    SpawnSFX(5204, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Soothing Sunlight - Breakpoint 1
Event(32050011, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 52, 62, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 600, 1.75, 1);
    SpawnSFX(5204, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Soothing Sunlight - Breakpoint 2
Event(32050012, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 52, 62, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 700, 1.75, 1);
    SpawnSFX(5204, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Soothing Sunlight - Breakpoint 3
Event(32050013, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 52, 62, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 1000, 1.75, 1);
    SpawnSFX(5204, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Soothing Sunlight - Breakpoint 4
Event(32050014, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 52, 62, 1, 1.1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 1100, 1.75, 1);
    SpawnSFX(5204, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Replenishment
Event(32060000, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Replenishment
Event(32060010, Default, function() {
    SpawnSFX(5226, 249, 1, 25, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 10, 16, 0.5, 1, 1, 1, 1, 1);
    HealSubEvent(1, 850, 840, 120, 0);
});

// Resplendent Life
Event(32070000, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Resplendent Life
Event(32070010, Default, function() {
    SpawnSFX(5206, 249, 1, 25, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 15, 35, 0.5, 1.3, 1, 1, 1, 1);
    HealSubEvent(1, 850, 840, 60, 0);
});

// Bountiful Sunlight
Event(32080000, Default, function() {
    CreateBulletBasedOnAttribute(32080010, 32080010, AttributeType.Faith, 18, 28, 38, 48);
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Bountiful Sunlight - Base
Event(32080010, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 38, 48, 1, 1.1, 1, 1, 1, 1);
    SpawnSFX(5207, 249, 1, 0, 0, 0);
    SpawnSFX(5206, 249, 1, 25, 0, 0);
    HealSubEvent(1, 850, 400, 100, 0);
});

// Bountiful Sunlight - Breakpoint 1
Event(32080011, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 38, 48, 1, 1.1, 1, 1, 1, 1);
    SpawnSFX(5207, 249, 1, 0, 0, 0);
    SpawnSFX(5206, 249, 1, 25, 0, 0);
    HealSubEvent(1, 850, 500, 100, 0);
});

// Bountiful Sunlight - Breakpoint 2
Event(32080012, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 38, 48, 0.9, 1, 1, 1, 1, 1);
    SpawnSFX(5207, 249, 1, 0, 0, 0);
    SpawnSFX(5206, 249, 1, 25, 0, 0);
    HealSubEvent(1, 850, 750, 125, 0);
});

// Bountiful Sunlight - Breakpoint 3
Event(32080013, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 38, 48, 0.9, 1, 1, 1, 1, 1);
    SpawnSFX(5207, 249, 1, 0, 0, 0);
    SpawnSFX(5206, 249, 1, 25, 0, 0);
    HealSubEvent(1, 850, 880, 125.71429, 0);
});

// Bountiful Sunlight - Breakpoint 4
Event(32080014, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 38, 48, 0.9, 1, 1, 1, 1, 1);
    SpawnSFX(5207, 249, 1, 0, 0, 0);
    SpawnSFX(5206, 249, 1, 25, 0, 0);
    HealSubEvent(1, 850, 1250, 178.57143, 0);
});

// Body Buff Related
Event(32080050, Default, function() {
    SetSpEffectLength(0.5);
});

// Caressing Prayer
Event(32090000, Default, function() {
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    StatusSubEvent(1, 871, 11);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 1, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 1, 100);
    SpawnSFX(5208, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

// Caressing Prayer
Event(32170011, Default, function() {
    SpawnSFX(5216, 249, 1, 0, 0, 0);
    SetSpEffectLength(2);
});

// Magic Barrier
Event(32190000, Default, function() {
    CreateBulletBasedOnAttribute(32190010, 32190010, AttributeType.Faith, 10, 14, 24, 34);
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Magic Barrier - Base
Event(32190010, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5069, 9, 0, 0, 0, 0);
    ApplyChrfullbodysfx(501010, 1);
    SpawnSFX(5218, 150, 1, 0, 0, 0);
    SpawnSFX(5218, 151, 1, 0, 0, 0);
    SpawnSFX(5218, 152, 1, 0, 0, 0);
    SpawnSFX(5218, 153, 1, 0, 0, 0);
    BuffDefense(60, BuffType.Magic, 10);
    BuffDefense(60, BuffType.Lightning, 10);
    BuffDefense(60, BuffType.Fire, 10);
    BuffDefense(60, BuffType.Dark, 10);
});

// Magic Barrier - Breakpoint 1
Event(32190011, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5069, 9, 0, 0, 0, 0);
    ApplyChrfullbodysfx(501010, 1);
    SpawnSFX(5218, 150, 1, 0, 0, 0);
    SpawnSFX(5218, 151, 1, 0, 0, 0);
    SpawnSFX(5218, 152, 1, 0, 0, 0);
    SpawnSFX(5218, 153, 1, 0, 0, 0);
    BuffDefense(70, BuffType.Magic, 15);
    BuffDefense(70, BuffType.Lightning, 15);
    BuffDefense(70, BuffType.Fire, 15);
    BuffDefense(70, BuffType.Dark, 15);
});

// Magic Barrier - Breakpoint 2
Event(32190012, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5069, 9, 0, 0, 0, 0);
    ApplyChrfullbodysfx(501010, 1);
    SpawnSFX(5218, 150, 1, 0, 0, 0);
    SpawnSFX(5218, 151, 1, 0, 0, 0);
    SpawnSFX(5218, 152, 1, 0, 0, 0);
    SpawnSFX(5218, 153, 1, 0, 0, 0);
    BuffDefense(80, BuffType.Magic, 15);
    BuffDefense(80, BuffType.Lightning, 15);
    BuffDefense(80, BuffType.Fire, 15);
    BuffDefense(80, BuffType.Dark, 15);
});

// Magic Barrier - Breakpoint 3
Event(32190013, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5069, 9, 0, 0, 0, 0);
    ApplyChrfullbodysfx(501010, 1);
    SpawnSFX(5218, 150, 1, 0, 0, 0);
    SpawnSFX(5218, 151, 1, 0, 0, 0);
    SpawnSFX(5218, 152, 1, 0, 0, 0);
    SpawnSFX(5218, 153, 1, 0, 0, 0);
    BuffDefense(90, BuffType.Magic, 15);
    BuffDefense(90, BuffType.Lightning, 15);
    BuffDefense(90, BuffType.Fire, 15);
    BuffDefense(90, BuffType.Dark, 15);
});

// Magic Barrier - Breakpoint 4
Event(32190014, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5069, 9, 0, 0, 0, 0);
    ApplyChrfullbodysfx(501010, 1);
    SpawnSFX(5218, 150, 1, 0, 0, 0);
    SpawnSFX(5218, 151, 1, 0, 0, 0);
    SpawnSFX(5218, 152, 1, 0, 0, 0);
    SpawnSFX(5218, 153, 1, 0, 0, 0);
    BuffDefense(95, BuffType.Magic, 15);
    BuffDefense(95, BuffType.Lightning, 15);
    BuffDefense(95, BuffType.Fire, 15);
    BuffDefense(95, BuffType.Dark, 15);
});

// Great Magic Barrier
Event(32200000, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Great Magic Barrier
Event(32200010, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5070, 9, 0, 0, 0, 0);
    ApplyChrfullbodysfx(501020, 1);
    SpawnSFX(5219, 150, 1, 0, 0, 0);
    SpawnSFX(5219, 151, 1, 0, 0, 0);
    SpawnSFX(5219, 152, 1, 0, 0, 0);
    SpawnSFX(5219, 153, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 14, 42, 0.2, 1, 1, 1, 1, 1);
    BuffDefense(90, BuffType.Magic, 25);
    BuffDefense(90, BuffType.Lightning, 25);
    BuffDefense(90, BuffType.Fire, 25);
    BuffDefense(90, BuffType.Dark, 25);
});

// Homeward
Event(32210000, Default, function() {
    SpawnSFX(5071, 9, 0, 0, 0, 0);
    SpawnSFX(5220, 249, 1, 0, 0, 0);
    WarpPlayer(0, -1, -1);
});

// Guidance
Event(32220000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5221, 249, 1, 20, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 18, 0.7, 2, 1, 1, 1, 1);
    SetSpEffectLength(60);
});

// Sacred Oath
Event(32230000, Default, function() {
    CreateBulletBasedOnAttribute(32230010, 32230010, AttributeType.Faith, 15, 20, 25, 35);
    SelfdamageCharacterOneoff(32080050);
});

// Sacred Oath - Base
Event(32230010, Default, function() {
    SpawnSFX(5222, 249, 1, 6, 0, 0);
    ModifyDamageFlatToBaseAr(40, BuffType.AllPhysical, 50);
    BuffDefense(40, BuffType.AllPhysical, 75);
    BuffDamageUnknown(40, BuffType.AllPhysical, 50);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRateII, 40, 0.9);
});

// Sacred Oath - Breakpoint 1
Event(32230011, Default, function() {
    SpawnSFX(5222, 249, 1, 6, 0, 0);
    ModifyDamageFlatToBaseAr(45, BuffType.AllPhysical, 50);
    BuffDefense(45, BuffType.AllPhysical, 75);
    BuffDamageUnknown(45, BuffType.AllPhysical, 50);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRateII, 45, 0.9);
});

// Sacred Oath - Breakpoint 2
Event(32230012, Default, function() {
    SpawnSFX(5222, 249, 1, 6, 0, 0);
    ModifyDamageFlatToBaseAr(50, BuffType.AllPhysical, 50);
    BuffDefense(50, BuffType.AllPhysical, 75);
    BuffDamageUnknown(50, BuffType.AllPhysical, 50);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRateII, 50, 0.9);
});

// Sacred Oath - Breakpoint 3
Event(32230013, Default, function() {
    SpawnSFX(5222, 249, 1, 6, 0, 0);
    ModifyDamageFlatToBaseAr(60, BuffType.AllPhysical, 50);
    BuffDefense(60, BuffType.AllPhysical, 75);
    BuffDamageUnknown(60, BuffType.AllPhysical, 50);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRateII, 60, 0.9);
});

// Sacred Oath - Breakpoint 4
Event(32230014, Default, function() {
    SpawnSFX(5222, 249, 1, 6, 0, 0);
    ModifyDamageFlatToBaseAr(65, BuffType.AllPhysical, 50);
    BuffDefense(65, BuffType.AllPhysical, 75);
    BuffDamageUnknown(65, BuffType.AllPhysical, 50);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRateII, 65, 0.9);
});

// Body Buff Related
Event(32230050, Default, function() {
    SetSpEffectLength(0.5);
});

// Unveil
Event(32240000, Default, function() {
    SpawnUnveilOrb();
});

// Perseverance
Event(32250000, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Perseverance
Event(32250010, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5224, 249, 1, 9, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 25, 0.65, 2, 1, 1, 1, 1);
    BuffDefense(60, BuffType.Poison, 15);
    BuffDefense(60, BuffType.Bleed, 15);
    BuffDefense(60, BuffType.Unknown7, 15);
    BuffDefense(60, BuffType.Curse, 30);
    BuffDefense(60, BuffType.Petrify, 30);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.BleedBuildup, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.ToxicBuildup, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.CurseBuildup, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.IgniteBuildup, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 60, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.PetrifyBuildup, 60, 1.2);
});

// Sunlight Blade - Right Hand
Event(32260000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5225, 0.1, 0, 1, 0, 0);
    SpawnSFX(5315, 21, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 18, 54, 0.3, 1.1, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(90, BuffType.Lightning, 30);
    ModifyDamageFlatToBaseAr(90, BuffType.Lightning, 15);
});

// Sunlight Blade - Left Hand
Event(32261000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5225, 0.1, 0, 1, 0, 0);
    SpawnSFX(5315, 20, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 18, 54, 0.3, 1.1, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(90, BuffType.Lightning, 30);
    ModifyDamageFlatToBaseAr(90, BuffType.Lightning, 15);
});

// Firestorm
Event(33050003, Default, function() {
    CreateBullet(33050004, 33050004, 0, 1);
    SetSpEffectLength(3);
});

// Fire Tempest
Event(33060003, Default, function() {
    CreateBullet(33060004, 33060004, 0, 1);
    SetSpEffectLength(3);
});

// Chaos Storm
Event(33070003, Default, function() {
    CreateBullet(33070004, 33070004, 0, 1);
    SetSpEffectLength(3);
});

// Flame Weapon - Right Hand
Event(33170000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5256, 0.1, 0, 1, 0, 0);
    SpawnSFX(5316, 21, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Fire, 20);
    SetStateInfo(StateInfoType.Unknown23, 90);
    ModifyDamageFlatToBaseAr(90, BuffType.Fire, 15);
});

// Flame Weapon - Left Hand
Event(33171000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5256, 0.1, 0, 1, 0, 0);
    SpawnSFX(5316, 20, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Fire, 20);
    SetStateInfo(StateInfoType.Unknown23, 90);
    ModifyDamageFlatToBaseAr(90, BuffType.Fire, 15);
});

// Flash Sweat
Event(33180000, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Flash Sweat
Event(33180010, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5257, 249, 1, 9, 0, 0);
    BuffDefense(90, BuffType.Fire, 30);
});

// Iron Flesh
Event(33190000, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Iron Flesh
Event(33190010, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5258, 249, 1, 9, 0, 0);
    ModifyProperty(PlayerPropertyType.Wetness, 25, 4);
    ModifyStatAdditively(AdditiveStatType.Unknown19, 25, 3);
    BuffDefense(25, BuffType.AllPhysical, 100);
    BuffDefense(25, BuffType.Magic, 20);
    BuffDefense(25, BuffType.Lightning, 20);
    BuffDefense(25, BuffType.Fire, 20);
    BuffDefense(25, BuffType.Dark, 20);
    BuffDefense(25, BuffType.Poison, 20);
    BuffDefense(25, BuffType.Bleed, 20);
    BuffDefense(25, BuffType.Curse, 20);
    BuffDefense(25, BuffType.Petrify, 20);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 25, 0.6);
    ModifyProperty(PlayerPropertyType.Unknown33, 25, 100);
    ModifyStatAdditively(AdditiveStatType.Weight, 25, 65);
    UnknownCommand10009006(25, 0.9, 1);
});

// Warmth
Event(33200000, Default, function() {
    SpawnSFX(5259, 249, 0, 0, 0, 0);
    HealSubEvent(1, 850, 150, 1, 1);
    SetSpEffectLength(3);
});

// Immolation
Event(33210000, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Immolation
Event(33210005, Default, function() {
    ApplyBuffSpellEffect();
    SelfdamageCharacterAndNearbyEnemiesPeriodic(33210010, 1, -1);
    SpawnSFX(5260, 249, 1, 9, 0, 0);
    SetStateInfo(StateInfoType.Unknown23, 30);
    SetSpEffectLength(30);
});

// Immolation
Event(33210010, Default, function() {
    CreateBullet(33210020, 33210020, 0, 1);
    CreateBullet(33210021, 33210021, 0, 1);
    CreateBullet(33210022, 33210022, 0, 1);
});

// Dead Again
Event(34050000, Default, function() {
    CreateBulletsForDeadAgain(10, 5, 34050010, 34050010, 34050010, 34050010);
});

// Affinity
Event(34040000, Default, function() {
    ApplySpEffectBasedOnIntelligence(30, 40, 50, 60, 34040090);
});

// Affinity - Applied on INT Breakpoint - 1
Event(34040090, Default, function() {
    BatchCreateBullets(8, 30, 34040010, 34040010);
});

// Affinity - Applied on INT Breakpoint - 2
Event(34040091, Default, function() {
    BatchCreateBullets(8, 30, 34040011, 34040010);
});

// Affinity - Applied on INT Breakpoint - 3
Event(34040092, Default, function() {
    BatchCreateBullets(8, 30, 34040012, 34040010);
});

// Affinity - Applied on INT Breakpoint - 4
Event(34040093, Default, function() {
    BatchCreateBullets(8, 30, 34040013, 34040010);
});

// Affinity - Applied on INT Breakpoint - 5
Event(34040094, Default, function() {
    BatchCreateBullets(8, 30, 34040014, 34040010);
});

// Affinity - Applied on INT Breakpoint - 6
Event(34040095, Default, function() {
    BatchCreateBullets(8, 30, 34040015, 34040010);
});

// Affinity - Applied on INT Breakpoint - 7
Event(34040096, Default, function() {
    BatchCreateBullets(8, 30, 34040016, 34040010);
});

// Affinity - Applied on INT Breakpoint - 8
Event(34040097, Default, function() {
    BatchCreateBullets(8, 30, 34040017, 34040010);
});

// Affinity - Applied on INT Breakpoint - 9
Event(34040098, Default, function() {
    BatchCreateBullets(8, 30, 34040018, 34040010);
});

// Affinity - Applied on INT Breakpoint - 10
Event(34040099, Default, function() {
    BatchCreateBullets(8, 30, 34040019, 34040010);
});

// Affinity - Applied on INT Breakpoint - 11
Event(34040100, Default, function() {
    BatchCreateBullets(8, 30, 34040020, 34040010);
});

// Affinity - Applied on INT Breakpoint - 12
Event(34040101, Default, function() {
    BatchCreateBullets(8, 30, 34040021, 34040010);
});

// Affinity - Applied on INT Breakpoint - 13
Event(34040102, Default, function() {
    BatchCreateBullets(8, 30, 34040022, 34040010);
});

// Affinity - Applied on INT Breakpoint - 14
Event(34040103, Default, function() {
    BatchCreateBullets(8, 30, 34040023, 34040010);
});

// Affinity - Applied on INT Breakpoint - 15
Event(34040104, Default, function() {
    BatchCreateBullets(8, 30, 34040024, 34040010);
});

// Dark Weapon - Right Hand
Event(34060000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5285, 0.1, 0, 1, 0, 0);
    SpawnSFX(5317, 21, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 24, 0.3, 1.1, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(90, BuffType.Dark, 30);
    ModifyDamageFlatToBaseAr(90, BuffType.Dark, 15);
});

// Dark Weapon - Left Hand
Event(34061000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5285, 0.1, 0, 1, 0, 0);
    SpawnSFX(5317, 20, 1, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 24, 0.3, 1.1, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(90, BuffType.Dark, 30);
    ModifyDamageFlatToBaseAr(90, BuffType.Dark, 15);
});

// Whisper of Despair
Event(34070000, Default, function() {
    CreateBulletBasedOnAttribute(34070010, 34070010, AttributeType.Intelligence, 14, 24, 34, 44);
});

// Whisper of Despair - Base
Event(34070010, Default, function() {
    SpawnSFX(5286, 249, 1, 4, 0, 0);
    NerfDefense(20, BuffType.AllPhysical, 200);
});

// Whisper of Despair - Breakpoint 1
Event(34070011, Default, function() {
    SpawnSFX(5286, 249, 1, 4, 0, 0);
    NerfDefense(30, BuffType.AllPhysical, 200);
});

// Whisper of Despair - Breakpoint 2
Event(34070012, Default, function() {
    SpawnSFX(5286, 249, 1, 4, 0, 0);
    NerfDefense(40, BuffType.AllPhysical, 200);
});

// Whisper of Despair - Breakpoint 3
Event(34070013, Default, function() {
    SpawnSFX(5286, 249, 1, 4, 0, 0);
    NerfDefense(50, BuffType.AllPhysical, 200);
});

// Whisper of Despair - Breakpoint 4
Event(34070014, Default, function() {
    SpawnSFX(5286, 249, 1, 4, 0, 0);
    NerfDefense(60, BuffType.AllPhysical, 200);
});

// Repel
Event(34080000, Default, function() {
    SetStateInfo(StateInfoType.BecomeInvulnerable, 1.75);
    SpawnRepelSFX(1.9, 0, 5287);
    SpawnRepelSFX(1.9, 1, 5287);
    SpawnRepelSFX(1.9, 2, 5287);
    SpawnRepelSFX(1.9, 3, 5287);
});

// Twisted Barricade
Event(34090000, Default, function() {
    SpawnRepelSFX(1.9, 0, 5298);
    SpawnRepelSFX(1.9, 1, 5298);
    SpawnRepelSFX(1.9, 2, 5298);
    SpawnRepelSFX(1.9, 3, 5298);
});

// Numbness
Event(34100000, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Numbness
Event(34100010, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5288, 249, 1, 5, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 21, 61, 1, 4.5, 1, 1, 1, 1);
    ModifyProperty(PlayerPropertyType.Unknown20, 20, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRate, 20, 0.85);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRateII, 20, 0.8);
});

// Resonant Flesh - Level 5
Event(35060000, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Resonant Flesh - Level 4
Event(35060001, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Resonant Flesh - Level 3
Event(35060002, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Resonant Flesh - Level 2
Event(35060003, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Resonant Flesh - Level 1
Event(35060004, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Resonant Flesh - Level 5
Event(35060010, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5294, 249, 1, 5, 0, 0);
    SpawnSFX(5145, 249, 0, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 30, 0.9, 3, 1, 1, 1, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 60, 1.2);
});

// Resonant Flesh - Level 4
Event(35060011, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5294, 249, 1, 5, 0, 0);
    SpawnSFX(5145, 249, 0, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 30, 0.9, 3, 1, 1, 1, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 60, 1.1);
});

// Resonant Flesh - Level 3
Event(35060012, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5294, 249, 1, 5, 0, 0);
    SpawnSFX(5145, 249, 0, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 30, 0.9, 3, 1, 1, 1, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 50, 1.05);
});

// Resonant Flesh - Level 2
Event(35060013, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5294, 249, 1, 5, 0, 0);
    SpawnSFX(5145, 249, 0, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 30, 0.9, 3, 1, 1, 1, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 40, 1.025);
});

// Resonant Flesh - Level 1
Event(35060014, Default, function() {
    ApplyBuffSpellEffect();
    SpawnSFX(5294, 249, 1, 5, 0, 0);
    SpawnSFX(5145, 249, 0, 0, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 30, 0.9, 3, 1, 1, 1, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 30, 1.025);
});

// Resonant Weapon - Right Hand - Level 5
Event(35070000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, 0, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(60, BuffType.Dark, 35);
    ModifyDamageFlatToBaseAr(60, BuffType.Dark, 0);
});

// Resonant Weapon - Right Hand - Level 4
Event(35070001, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, 0, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(60, BuffType.Dark, 30);
    ModifyDamageFlatToBaseAr(60, BuffType.Dark, 0);
});

// Resonant Weapon - Right Hand - Level 3
Event(35070002, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, 0, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(30, BuffType.Dark, 15);
    ModifyDamageFlatToBaseAr(30, BuffType.Dark, 0);
});

// Resonant Weapon - Right Hand - Level 2
Event(35070003, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, 0, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(20, BuffType.Dark, 10);
    ModifyDamageFlatToBaseAr(20, BuffType.Dark, 0);
});

// Resonant Weapon - Right Hand - Level 1
Event(35070004, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, 0, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(10, BuffType.Dark, 10);
    ModifyDamageFlatToBaseAr(10, BuffType.Dark, 0);
});

// Resonant Weapon - Left Hand - Level 5
Event(35071000, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, 0, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(60, BuffType.Dark, 35);
    ModifyDamageFlatToBaseAr(60, BuffType.Dark, 0);
});

// Resonant Weapon - Left Hand - Level 4
Event(35071001, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, 0, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(60, BuffType.Dark, 30);
    ModifyDamageFlatToBaseAr(60, BuffType.Dark, 0);
});

// Resonant Weapon - Left Hand - Level 3
Event(35071002, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, 0, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(30, BuffType.Dark, 15);
    ModifyDamageFlatToBaseAr(30, BuffType.Dark, 0);
});

// Resonant Weapon - Left Hand - Level 2
Event(35071003, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, 0, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(20, BuffType.Dark, 10);
    ModifyDamageFlatToBaseAr(20, BuffType.Dark, 0);
});

// Resonant Weapon - Left Hand - Level 1
Event(35071004, Default, function() {
    ApplyBuffSpellEffect();
    SpawnBuffSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, 0, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    IncreaseDamageMultiplicatively(10, BuffType.Dark, 10);
    ModifyDamageFlatToBaseAr(10, BuffType.Dark, 0);
});

// Profound Still
Event(35090000, Default, function() {
    CreateBulletBasedOnAttribute(35090010, 35090010, AttributeType.Faith, 32, 42, 52, 62);
});

// Profound Still - Base
Event(35090010, Default, function() {
    SpawnSFX(5297, 249, 1, 4, 0, 0);
    StatusSubEvent(1, 872, 5, 1092616192, 0, 0, 0, 0);
});

// Profound Still - Breakpoint 1
Event(35090011, Default, function() {
    SpawnSFX(5297, 249, 1, 4, 0, 0);
    StatusSubEvent(1, 872, 5, 1097859072, 0, 0, 0, 0);
});

// Profound Still - Breakpoint 2
Event(35090012, Default, function() {
    SpawnSFX(5297, 249, 1, 4, 0, 0);
    StatusSubEvent(1, 872, 5, 1099431936, 0, 0, 0, 0);
});

// Profound Still - Breakpoint 3
Event(35090013, Default, function() {
    SpawnSFX(5297, 249, 1, 4, 0, 0);
    StatusSubEvent(1, 872, 5, 1101004800, 0, 0, 0, 0);
});

// Profound Still - Breakpoint 4
Event(35090014, Default, function() {
    SpawnSFX(5297, 249, 1, 4, 0, 0);
    StatusSubEvent(1, 872, 5, 1103626240, 0, 0, 0, 0);
});

// Outcry
Event(33320003, Default, function() {
    CreateBullet(33320004, 33320004, 0, 1);
    SetSpEffectLength(3);
});

// Dark Greatsword
Event(34300022, Default, function() {
    CreateBullet(34300030, 34300030, 6, 1);
});

// Denial
Event(32300000, Default, function() {
    SelfdamageCharacterOneoff(32080050);
    SelfdamageCharacterOneoff(32230050);
});

// Denial
Event(32300005, Default, function() {
    ApplyBuffSpellEffect();
    SetStateInfoCategory(StateInfoCategory.HollowingState, 0, 0);
    SpawnSFX(5666, 220, 1, 20, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 14, 44, 0.25, 1, 1, 1, 1, 1);
    ApplySpEffectWhenCharacterDies(240, 32300010);
});

// Denial
Event(32300010, Default, function() {
    CreateBullet(32300010, 32300010, 0, 1);
});

// Promised Walk of Peace
Event(35300000, Default, function() {
    CreateBulletBasedOnAttribute(35300010, 35300010, AttributeType.Faith, 30, 40, 50, 60);
});

// Promised Walk of Peace - Base
Event(35300010, Default, function() {
    SpawnSFX(5691, 249, 1, 4, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown60, 15, 1.1);
    ModifyProperty(PlayerPropertyType.Unknown25, 15, 10);
    UnknownCommand10009006(15, 0.8, 1);
    UnknownCommand10009006(15, 0.5, 2);
    UnknownCommand10009007(15, 0.5, 1);
    UnknownCommand10009007(15, 0.5, 2);
});

// Promised Walk of Peace - Breakpoint 1
Event(35300011, Default, function() {
    SpawnSFX(5691, 249, 1, 4, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown60, 15, 1.2);
    ModifyProperty(PlayerPropertyType.Unknown25, 15, 20);
    UnknownCommand10009006(15, 0.8, 1);
    UnknownCommand10009006(15, 0.5, 2);
    UnknownCommand10009007(15, 0.5, 1);
    UnknownCommand10009007(15, 0.5, 2);
});

// Promised Walk of Peace - Breakpoint 2
Event(35300012, Default, function() {
    SpawnSFX(5691, 249, 1, 4, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown60, 15, 1.3);
    ModifyProperty(PlayerPropertyType.Unknown25, 15, 30);
    UnknownCommand10009006(15, 0.8, 1);
    UnknownCommand10009006(15, 0.5, 2);
    UnknownCommand10009007(15, 0.5, 1);
    UnknownCommand10009007(15, 0.5, 2);
});

// Promised Walk of Peace - Breakpoint 3
Event(35300013, Default, function() {
    SpawnSFX(5691, 249, 1, 4, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown60, 15, 1.4);
    ModifyProperty(PlayerPropertyType.Unknown25, 15, 40);
    UnknownCommand10009006(15, 0.8, 1);
    UnknownCommand10009006(15, 0.5, 2);
    UnknownCommand10009007(15, 0.5, 1);
    UnknownCommand10009007(15, 0.5, 2);
});

// Promised Walk of Peace - Breakpoint 4
Event(35300014, Default, function() {
    SpawnSFX(5691, 249, 1, 4, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown60, 15, 1.5);
    ModifyProperty(PlayerPropertyType.Unknown25, 15, 50);
    UnknownCommand10009006(15, 0.8, 1);
    UnknownCommand10009006(15, 0.5, 2);
    UnknownCommand10009007(15, 0.5, 1);
    UnknownCommand10009007(15, 0.5, 2);
});
