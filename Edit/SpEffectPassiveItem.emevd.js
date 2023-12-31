// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N : \ F R P G 2 _ 6 4 \ T o o l \ e x c e l \ e m e v d \ S p E f f e c t M u s t S u b . e m e v d                             
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

Event(50880000, Default, function() {
    HealSubEvent(1, 851, 1101004800, 3, 1);
});

Event(50885000, Default, function() {
    HealSubEvent(1, 851, 1092616192, 3, 1);
});

Event(50920000, Default, function() {
    SoulSubEvent(1, 930, 0, 10000);
});

Event(50940000, Default, function() {
    DisplayChampionRankings();
});

Event(51000000, Default, function() {
    WarpPlayer(1, 10040000, 300020);
});
