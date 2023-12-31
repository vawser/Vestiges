// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N   :   \   F   R   P   G   2   _   6   4   \   T   o   o   l   \   e   x   c   e   l   \   e   m   e   v   d   \   S   p   E   f   f   e   c   t   M   u   s   t   S   u   b   .   e   m   e   v   d                                                           
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

// Lifegem
Event(60010000, Default, function() {
    HPRestorationEffect(1, 2.8);
    HealSubEvent(1, 850, 300, 10.0, 1); // 500 HP over 11.1 secs
});

// Radiant Lifegem
Event(60020000, Default, function() {
    HPRestorationEffect(1, 2.8);
    HealSubEvent(1, 850, 600, 20.0, 1); // 850 HP over 18.8 secs
});

// Old Radiant Lifegem
Event(60030000, Default, function() {
    HPRestorationEffect(1, 2.8);
    HealSubEvent(1, 850, 900, 30.0, 1); // 1300 HP over 28.8 secs
});

// Elizabeth Mushroom
Event(60035000, Default, function() {
    SpawnSFX(893, 249, 1, 6, 0, 0);
    HPRestorationEffect(1, 2);
    HealSubEvent(1, 850, 3000, 60.0, 0); // 2000 HP over 44.4 secs
});

// Amber Herb
Event(60040000, Default, function() {
    RestoreSpellUsage(35, 1);
});

// Twilight Herb
Event(60050000, Default, function() {
    RestoreSpellUsage(50, 1);
});

// Wilted Dusk Herb
Event(60060000, Default, function() {
    RestoreSpellUsage(70, 1);
});

// Poison Moss
Event(60070000, Default, function() {
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    SpawnSFX(862, 249, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 3, 100);
});

// Monastery Charm
Event(60090000, Default, function() {
    SpawnSFX(873, 9, 1, 0, 0, 0);
    HealSubEvent(1, 850, 850, 4.2, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 3, 100);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 3, 100);
});

// Dragon Charm
Event(60100000, Default, function() {
    SpawnSFX(874, 9, 1, 0, 0, 0);
    HealSubEvent(1, 850, 1500, 7.5, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 3, 100);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 3, 100);
});

// Divine Blessing
Event(60105000, Default, function() {
    HealSubEvent(1, 851, 1120403456, 10, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.BleedBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.PetrifyBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.CurseBuildup, 3, 100);
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

// Rouge Water
Event(60110000, Default, function() {
    HealSubEvent(1, 850, 850, 18.8, 1);
    RestoreSpellUsage(50, 1);
});

// Crimson Water
Event(60120000, Default, function() {
    HealSubEvent(1, 850, 1500, 33.3, 1);
    RestoreSpellUsage(70, 1);
});

// Human Effigy
Event(60151000, Default, function() {
    RestoreHumanity(true);
});

// Estus Flask
Event(60155000, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 550, 1.8, 1);
});

// Estus Flask
Event(60155001, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 600, 2, 1);
});

// Estus Flask
Event(60155002, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 650, 2.1, 1);
});

// Estus Flask
Event(60155003, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 700, 2.3, 1);
});

// Estus Flask
Event(60155004, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 750, 2.5, 1);
});

// Estus Flask
Event(60155005, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 800, 2.6, 1);
});

// Estus Flask
Event(60155006, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 800, 2.6, 1);
});

// Estus Flask
Event(60155100, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 600, 2, 1);
});

// Estus Flask
Event(60155101, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 650, 2.1, 1);
});

// Estus Flask
Event(60155102, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 700, 2.3, 1);
});

// Estus Flask
Event(60155103, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 750, 2.5, 1);
});

// Estus Flask
Event(60155104, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 800, 2.6, 1);
});

// Estus Flask
Event(60155105, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 850, 2.8, 1);
});

// Estus Flask
Event(60155106, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 850, 2.8, 1);
});

// Estus Flask - Flat
Event(60155010, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 700, 1.1, 1);
});

// Estus Flask - %
Event(60155020, Default, function() {
    HealSubEvent(1, 851, 1097859072, 10, 1);
});

// Estus Flask - %
Event(60155030, Default, function() {
    HealSubEvent(1, 851, 1106247680, 10, 1);
});

// Small Blue Burr
Event(60160000, Default, function() {
    SpawnSFX(847, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Magic, 15);
});

// Small Yellow Burr
Event(60170000, Default, function() {
    SpawnSFX(848, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Lightning, 15);
});

// Small Orange
Event(60180000, Default, function() {
    SpawnSFX(849, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Fire, 15);
    ModifyStatMultiplicatively(MultiplicativeStatType.IgniteBuildup, 90, 1.2);
});

// Dark Troches
Event(60190000, Default, function() {
    SpawnSFX(850, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Dark, 15);
});

// Common Fruit
Event(60200000, Default, function() {
    SpawnSFX(851, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Poison, 20);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 90, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown5, 90, 1.2);
});

// Red Leech Troches
Event(60210000, Default, function() {
    SpawnSFX(852, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Bleed, 20);
    ModifyStatMultiplicatively(MultiplicativeStatType.BleedBuildup, 90, 1.2);
});

// 
Event(60220000, Default, function() {
    SpawnSFX(853, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Unknown7, 20);
});

// Triclops Snake Troches
Event(60230000, Default, function() {
    SpawnSFX(854, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Petrify, 20);
    ModifyStatMultiplicatively(MultiplicativeStatType.PetrifyBuildup, 90, 1.2);
});

// Aromatic Ooze
Event(60240000, Default, function() {
    SpawnBuffSFX(901, 0.1, 0, 1, 0, 0);
    SpawnSFX(955, 20, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Magic, 20);
    ModifyDamageFlatToBaseAr(90, BuffType.Magic, 40);
});

// Gold Pine Resin
Event(60250000, Default, function() {
    SpawnBuffSFX(909, 0.1, 0, 1, 0, 0);
    SpawnSFX(956, 20, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Lightning, 20);
    ModifyDamageFlatToBaseAr(90, BuffType.Lightning, 40);
});

// Charcoal Pine Resin
Event(60260000, Default, function() {
    SpawnBuffSFX(903, 0.1, 0, 1, 0, 0);
    SpawnSFX(957, 20, 1, 0, 0, 0);
    SetStateInfo(StateInfoType.Unknown23, 90);
    IncreaseDamageMultiplicatively(90, BuffType.Fire, 20);
    ModifyDamageFlatToBaseAr(90, BuffType.Fire, 40);
});

// Dark Pine Resin
Event(60270000, Default, function() {
    SpawnBuffSFX(905, 0.1, 0, 1, 0, 0);
    SpawnSFX(958, 20, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Dark, 20);
    ModifyDamageFlatToBaseAr(90, BuffType.Dark, 40);
});

// Rotten Pine Resin
Event(60280000, Default, function() {
    SpawnBuffSFX(907, 0.1, 0, 1, 0, 0);
    SpawnSFX(959, 20, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Poison, 50);
    ModifyDamageFlatToBaseAr(90, BuffType.Poison, 100);
});

// Bleeding Serum
Event(60290000, Default, function() {
    SpawnBuffSFX(921, 0.1, 0, 1, 0, 0);
    SpawnSFX(960, 20, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Bleed, 50);
    ModifyDamageFlatToBaseAr(90, BuffType.Bleed, 100);
});

// Green Blossom
Event(60310000, Default, function() {
    HPRestorationEffect(1, 0.75);
    SpawnSFX(865, 249, 1, 50, 0, 0);
    ModifyStaminaRecovery(60, 1.15);
});

// Rusted Coin
Event(60320000, Default, function() {
    SetStateInfoCategory(StateInfoCategory.ItemDiscovery, 0, 0);
    SpawnSFX(868, 9, 1, 60, 0, 0);
    SetStateInfo(StateInfoType.BoostItemDiscovery, 300);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown49, 300, 1);
});

// Homeward Bone
Event(60350000, Default, function() {
    WarpPlayer(0, -1, -1);
    SetStateInfo(StateInfoType.BecomeInvulnerable, 5);
});

// Aged Feather
Event(60355000, Default, function() {
    WarpPlayer(0, -1, -1);
    SetStateInfo(StateInfoType.BecomeInvulnerable, 5);
});

// Darksign
Event(60360000, Default, function() {
    WarpPlayer(0, -1, -1);
    SetStateInfo(StateInfoType.BecomeInvulnerable, 5);
    SoulSubEvent(1, 931, 1, 1120403456);
});

// Silver Talisman
Event(60370000, Default, function() {
    ApplyRandomSpEffect(60370001, 60370002, 60370003, 60370004, 60370005);
});

// Silver Talisman - Chameleon 1
Event(60370001, Default, function() {
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 0, 878);
});

// Silver Talisman - Chameleon 2
Event(60370002, Default, function() {
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 1, 878);
});

// Silver Talisman - Chameleon 3
Event(60370003, Default, function() {
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 2, 878);
});

// Silver Talisman - Chameleon 4
Event(60370004, Default, function() {
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 3, 878);
});

// Silver Talisman - Chameleon 5
Event(60370005, Default, function() {
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 4, 878);
});

// 
Event(60375000, Default, function() {
    UnknownCommand100020(60375001);
});

Event(60375001, Default, function() {
    UnknownCommand10070002();
    UnknownCommand100021(0, 0, 878);
});

// Dragon Head Stone
Event(60405000, Default, function() {
    ApplyChrfullbodysfx(500010, 1);
    SetSpEffectLength(1);
    CreateBullet(60405000, 60405000, 0, 1);
});

// Dragon Head Stone
Event(60405001, Default, function() {
    ForceArmor(21330100, 0, 0, 0);
});

// Dragon Head Stone
Event(60405010, Default, function() {
    CreateBullet(60405030, 60405030, 0, 1);
    CreateBullet(60405010, 60405010, 0, 1);
    CreateBullet(60405011, 60405011, 0, 1);
});

// Dragon Head Stone
Event(60405020, Default, function() {
    CreateBullet(60405030, 60405030, 0, 1);
    CreateBullet(60405020, 60405020, 0, 1);
    CreateBullet(60405011, 60405011, 0, 1);
});

// Dragon Head Stone
Event(60405030, Default, function() {
    ApplyChrfullbodysfx(500020, 1);
    SetSpEffectLength(1);
});

// Dragon Torso Stone
Event(60406000, Default, function() {
    ApplyChrfullbodysfx(500110, 1);
    SetSpEffectLength(1);
    CreateBullet(60406000, 60406000, 0, 1);
});

// Dragon Torso Stone
Event(60406001, Default, function() {
    ForceArmor(21330100, 21330101, 21330102, 21330103);
});

// Dragon Torso Stone
Event(60406010, Default, function() {
    CreateBullet(60406010, 60406010, 0, 1);
    CreateBullet(60406011, 60406011, 0, 1);
});

// Dragon Torso Stone
Event(60406020, Default, function() {
    SpawnSFX(954, 249, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 5.5, 1.15);
});

// Dragon Torso Stone
Event(60406030, Default, function() {
    ApplyChrfullbodysfx(500120, 1);
    SetSpEffectLength(1);
});

// Repair Powder
Event(60410000, Default, function() {
    ModifyProperty(PlayerPropertyType.EquippedWeaponsDurability, 0, 30);
    ModifyProperty(PlayerPropertyType.EquippedArmorDurability, 0, 50);
    ModifyProperty(PlayerPropertyType.EquippedRingsDurability, 0, 20);
});

// Flame Butterfly
Event(60430000, Default, function() {
    CreateBullet(60430000, 60430000, 0, 1);
});

// Prism Stone
Event(60450000, Default, function() {
    ThrowPrismStone(26, 1065353216, 1066192077);
});

// Hello Carving
Event(60470000, Default, function() {
    CreateBullet(60470000, 60470000, 0, 1);
});

// Thank You Carving
Event(60480000, Default, function() {
    CreateBullet(60480000, 60480000, 0, 1);
});

// I'm Sorry Carving
Event(60490000, Default, function() {
    CreateBullet(60490000, 60490000, 0, 1);
});

// Very Good! Carving
Event(60500000, Default, function() {
    CreateBullet(60500000, 60500000, 0, 1);
});

// Rubbish
Event(60510000, Default, function() {
    StatusSubEvent(1, 872, 8, 1092616192, 0, 0, 650, 249);
});

// Alluring Skull
Event(60530000, Default, function() {
    CreateBullet(60530000, 60530000, 0, 1);
});

// Lloyd's Talisman
Event(60531000, Default, function() {
    CreateBullet(60531000, 60531000, 0, 1);
});

// Lloyd's Talisman
Event(60531010, Default, function() {
    SpawnSFX(826, 249, 1, 2, 0, 0);
    ModifyEstusUsage(EstusModificationType.Reduceto0, 30);
});

// Throwing Knife
Event(60540000, Default, function() {
    CreateBullet(60540000, 60540000, 2, 0.26);
});

// Witching Urn
Event(60550000, Default, function() {
    CreateBullet(60550000, 60550000, 3, 0.65);
});

// Lightning Urn
Event(60560000, Default, function() {
    CreateBullet(60560000, 60560000, 4, 0.65);
});

// Lightning Urn
Event(60570000, Default, function() {
    CreateBullet(60570000, 60570000, 5, 0.65);
});

// Black Firebomb
Event(60575000, Default, function() {
    CreateBullet(60575000, 60575000, 5, 0.75);
});

// Hexing Urn
Event(60580000, Default, function() {
    CreateBullet(60580000, 60580000, 6, 0.65);
});

// Poison Throwing Knife
Event(60590000, Default, function() {
    CreateBullet(60590000, 60590000, 2, 0.26);
});

// Dung Pie
Event(60595000, Default, function() {
    CreateBullet(60595000, 60595000, 0, 1);
    CreateBullet(60595010, 60595010, 7, 0.65);
});

// Lacerating Knife
Event(60600000, Default, function() {
    CreateBullet(60600000, 60600000, 2, 0.26);
});

// Corrosive Urn
Event(60610000, Default, function() {
    CreateBullet(60610000, 60610000, 0, 1);
});

// Corrosive Urn
Event(60610010, Default, function() {
    ModifyProperty(PlayerPropertyType.EquippedLeftHandWeaponDurability, 0, -5);
    ModifyProperty(PlayerPropertyType.EquippedRightHandWeaponDurability, 0, -5);
    ModifyProperty(PlayerPropertyType.EquippedArmorDurability, 0, -10);
});

// Holy Water Urn
Event(60620000, Default, function() {
    CreateBullet(60620000, 60620000, 4, 1);
});

// Fading Soul
Event(60625000, Default, function() {
    SoulSubEvent(1, 930, 0, 50);
});

// Soul of a Lost Undead
Event(60630000, Default, function() {
    SoulSubEvent(1, 930, 0, 200);
});

// Large Soul of a Lost Undead
Event(60640000, Default, function() {
    SoulSubEvent(1, 930, 0, 400);
});

// Soul of a Nameless Soldier
Event(60650000, Default, function() {
    SoulSubEvent(1, 930, 0, 800);
});

// Large Soul of a Nameless Soldier
Event(60660000, Default, function() {
    SoulSubEvent(1, 930, 0, 1000);
});

// Soul of a Proud Knight
Event(60670000, Default, function() {
    SoulSubEvent(1, 930, 0, 2000);
});

// Large Soul of a Proud Knight
Event(60680000, Default, function() {
    SoulSubEvent(1, 930, 0, 3000);
});

// Soul of a Brave Warrior
Event(60690000, Default, function() {
    SoulSubEvent(1, 930, 0, 5000);
});

// Large Soul of a Brave Warrior
Event(60700000, Default, function() {
    SoulSubEvent(1, 930, 0, 8000);
});

// Soul of a Hero
Event(60710000, Default, function() {
    SoulSubEvent(1, 930, 0, 10000);
});

// Soul of a Great Hero
Event(60720000, Default, function() {
    SoulSubEvent(1, 930, 0, 20000);
});

// Dried Fingers
Event(62000000, Default, function() {
    ResetInvasionCooldownTimer();
});

// Bone of Order
Event(62020000, Default, function() {
    RequestMultiplayerPenaltyErasure();
});

// White Sign Soapstone
Event(62030000, Default, function() {
    InitiateClientmediatedMultiplayerItem(ClientItemType.WhiteSignSoapstone);
});

// Small White Sign Soapstone
Event(62040000, Default, function() {
    InitiateClientmediatedMultiplayerItem(ClientItemType.SmallWhiteSignSoapstone);
});

// Red Sign Soapstone
Event(62045000, Default, function() {
    InitiateClientmediatedMultiplayerItem(ClientItemType.RedSignSoapstone);
});

// Cracked Blue Eye Orb
Event(62050000, Default, function() {
    InitiateServermediatedMultiplayerItem(ServerItemType.CrackedBlueEyeOrb);
});

// Cracked Red Eye Orb
Event(62060000, Default, function() {
    InitiateServermediatedMultiplayerItem(ServerItemType.CrackedRedEyeOrb);
});

// Dragon Eye
Event(62070000, Default, function() {
    InitiateClientmediatedMultiplayerItem(ClientItemType.DragonEye);
});

// Token of Fidelity
Event(62100000, Default, function() {
    ApplySpEffectToFriendlyHost(62100010);
});

// Token of Fidelity
Event(62100010, Default, function() {
    SpawnSFX(1128, 249, 1, 0, 0, 0);
    HealSubEvent(1, 850, 350, 5, 1);
});

// Token of Spite
Event(62110000, Default, function() {
    ResetInvasionCooldownTimer();
});

// Black Separation Crystal
Event(62160000, Default, function() {
    RequestMultiplayerSeparation();
});

// Seed of a Tree of Giants
Event(62170000, Default, function() {
    SpawnSFX(1124, 249, 1, 7, 0, 0);
    SetSpEffectLength(3600);
});

// Seed of a Tree of Giants
Event(62170010, Default, function() {
    SetStateInfo(StateInfoType.EnemiesAttackHostileIntruders, 3600);
});

// Soul of the Pursuer
Event(64000000, Default, function() {
    SoulSubEvent(1, 930, 0, 8000);
});

// Soul of the Last Giant
Event(64010000, Default, function() {
    SoulSubEvent(1, 930, 0, 6000);
});

// Dragonrider Soul
Event(64020000, Default, function() {
    SoulSubEvent(1, 930, 0, 6000);
});

// Old Dragonslayer Soul
Event(64030000, Default, function() {
    SoulSubEvent(1, 930, 0, 10000);
});

// Flexile Sentry Soul
Event(64040000, Default, function() {
    SoulSubEvent(1, 930, 0, 6000);
});

// Ruin Sentinel Soul
Event(64050000, Default, function() {
    SoulSubEvent(1, 930, 0, 6000);
});

// Soul of the Lost Sinner
Event(64060000, Default, function() {
    SoulSubEvent(1, 930, 0, 25000);
});

// Executioner's Chariot Soul
Event(64070000, Default, function() {
    SoulSubEvent(1, 930, 0, 8000);
});

// Skeleton Lord's Soul
Event(64080000, Default, function() {
    SoulSubEvent(1, 930, 0, 6000);
});

// Covetous Demon Soul
Event(64090000, Default, function() {
    SoulSubEvent(1, 930, 0, 6000);
});

Event(64100000, Default, function() {
    SoulSubEvent(1, 930, 0, 10000);
});

// Mytha-,the Baneful Queen Soul
Event(64110000, Default, function() {
    SoulSubEvent(1, 930, 0, 8000);
});

// Old Iron King Soul
Event(64120000, Default, function() {
    SoulSubEvent(1, 930, 0, 25000);
});

// Royal Rat Vanguard Soul
Event(64130000, Default, function() {
    SoulSubEvent(1, 930, 0, 6000);
});

// Soul of the Rotten
Event(64140000, Default, function() {
    SoulSubEvent(1, 930, 0, 25000);
});

// Scorpioness Najka Soul
Event(64150000, Default, function() {
    SoulSubEvent(1, 930, 0, 8000);
});

// Royal Rat Authority Soul
Event(64160000, Default, function() {
    SoulSubEvent(1, 930, 0, 6000);
});

// Soul of the Duke's Dear Freja
Event(64170000, Default, function() {
    SoulSubEvent(1, 930, 0, 25000);
});

// Looking Glass Knight Soul
Event(64180000, Default, function() {
    SoulSubEvent(1, 930, 0, 18000);
});

// Demon of Song Soul
Event(64190000, Default, function() {
    SoulSubEvent(1, 930, 0, 12000);
});

// Soul of Velstadt
Event(64200000, Default, function() {
    SoulSubEvent(1, 930, 0, 15000);
});

// Soul of the King
Event(64210000, Default, function() {
    SoulSubEvent(1, 930, 0, 50000);
});

// Guardian Dragon Soul
Event(64220000, Default, function() {
    SoulSubEvent(1, 930, 0, 14000);
});

// Ancient Dragon Soul
Event(64230000, Default, function() {
    SoulSubEvent(1, 930, 0, 75000);
});

// Giant Lord Soul
Event(64240000, Default, function() {
    SoulSubEvent(1, 930, 0, 25000);
});

// Soul of Nashandra
Event(64250000, Default, function() {
    SoulSubEvent(1, 930, 0, 30000);
});

// Throne Defender Soul
Event(64260000, Default, function() {
    SoulSubEvent(1, 930, 0, 16000);
});

// Throne Watcher Soul
Event(64270000, Default, function() {
    SoulSubEvent(1, 930, 0, 16000);
});

// Darklurker Soul
Event(64280000, Default, function() {
    SoulSubEvent(1, 930, 0, 22000);
});

// Belfry Gargoyle Soul
Event(64290000, Default, function() {
    SoulSubEvent(1, 930, 0, 6000);
});

// Old Witch Soul
Event(64300000, Default, function() {
    SoulSubEvent(1, 930, 0, 60000);
});

// Old King Soul
Event(64310000, Default, function() {
    SoulSubEvent(1, 930, 0, 75000);
});

// Old Dead One Soul
Event(64320000, Default, function() {
    SoulSubEvent(1, 930, 0, 60000);
});

// Old Paledrake Soul
Event(64330000, Default, function() {
    SoulSubEvent(1, 930, 0, 60000);
});

// Soul of Elana, Squalid Queen
Event(64530000, Default, function() {
    SoulSubEvent(1, 930, 0, 30000);
});

// Soul of Nadalia, Bride of Ash
Event(64540000, Default, function() {
    SoulSubEvent(1, 930, 0, 30000);
});

// Soul of Alsanna, Silent Oracle
Event(64550000, Default, function() {
    SoulSubEvent(1, 930, 0, 30000);
});

// Soul of the Ivory King
Event(64580000, Default, function() {
    SoulSubEvent(1, 930, 0, 30000);
});

// Soul of Sinh, the Slumbering Dragon
Event(64500000, Default, function() {
    SoulSubEvent(1, 930, 0, 16000);
});

// Soul of the Fume Knight
Event(64510000, Default, function() {
    SoulSubEvent(1, 930, 0, 16000);
});

// Soul of Aava, the King's Pet
Event(64520000, Default, function() {
    SoulSubEvent(1, 930, 0, 16000);
});

// Soul of Sir Alonne
Event(64560000, Default, function() {
    SoulSubEvent(1, 930, 0, 16000);
});

// Soul of Zallen, the King's Pet
Event(64590000, Default, function() {
    SoulSubEvent(1, 930, 0, 16000);
});

// Loyce Soul
Event(64600000, Default, function() {
    SoulSubEvent(1, 930, 0, 0);
});

// Soul of Lud, the King's Pet
Event(64610000, Default, function() {
    SoulSubEvent(1, 930, 0, 16000);
});

// Dried Root
Event(60036000, Default, function() {
    SpawnSFX(972, 249, 1, 25, 0, 0);
    HPRestorationEffect(0.7, 1);
    HealSubEvent(1, 850, 1000, 500, 0); // 1000 HP over 500 secs
});

// Old Growth Balm
Event(60235000, Default, function() {
    SpawnSFX(962, 249, 1, 7, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Strength, 45, 5);
});

// Vine Balm
Event(60236000, Default, function() {
    SpawnSFX(964, 249, 1, 7, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Dexterity, 45, 5);
});

// Blackweed Balm
Event(60237000, Default, function() {
    SpawnSFX(966, 249, 1, 7, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 45, 5);
});

// Goldenfruit Balm
Event(60238000, Default, function() {
    SpawnSFX(968, 249, 1, 7, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Faith, 45, 5);
});

// Brightbug
Event(60239000, Default, function() {
    SpawnSFX(969, 20, 0, 0, 0, 0);
    SpawnSFX(970, 249, 1, 7, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRateII, 120, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRateII, 120, 0.8);
});

// 
Event(65240000, Default, function() {
    SpawnBuffSFX(901, 0.1, 0, 1, 0, 0);
    SpawnSFX(955, 20, 1, 0, 0, 0);
    BuffDamageUnknown(90, BuffType.Magic, 100);
});

// 
Event(65250000, Default, function() {
    SpawnBuffSFX(909, 0.1, 0, 1, 0, 0);
    SpawnSFX(956, 20, 1, 0, 0, 0);
    BuffDamageUnknown(90, BuffType.Lightning, 100);
});

// 
Event(65260000, Default, function() {
    SpawnBuffSFX(903, 0.1, 0, 1, 0, 0);
    SpawnSFX(957, 20, 1, 0, 0, 0);
    SetStateInfo(StateInfoType.Unknown23, 90);
    BuffDamageUnknown(90, BuffType.Fire, 100);
});

// 
Event(65270000, Default, function() {
    SpawnBuffSFX(905, 0.1, 0, 1, 0, 0);
    SpawnSFX(958, 20, 1, 0, 0, 0);
    BuffDamageUnknown(90, BuffType.Dark, 100);
});

// 
Event(65280000, Default, function() {
    SpawnBuffSFX(907, 0.1, 0, 1, 0, 0);
    SpawnSFX(959, 20, 1, 0, 0, 0);
    BuffDamageUnknown(90, BuffType.Poison, 40);
});

// 
Event(65290000, Default, function() {
    SpawnBuffSFX(921, 0.1, 0, 1, 0, 0);
    SpawnSFX(960, 20, 1, 0, 0, 0);
    BuffDamageUnknown(90, BuffType.Bleed, 40);
});
