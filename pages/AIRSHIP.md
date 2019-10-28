# Quick Reference to Airship Flight

> Based on [Izzys Guide to Fight and Flight](https://www.dmsguild.com/product/234723/Izzys-Guide-to-Fight-and-Flight) and [gist](https://gist.github.com/thehig/bbaf18daed89bb9c5125197aa8f9c8ad)

### Vital Stastics

| Term             | Meaning                                  |
| ---------------- | ---------------------------------------- |
| Tonnage          | Weight of the vessel in tons             |
| Speed            | feet per round = overland mph \* 10      |
| Crew             | Minimum #crew required for no penalties. |
| Passengers       | #passengers at a poor accomodation level |
| Cargo (tons)     | max carry capacity for no penalties      |
| Damage Threshold | damage done <= DT has no effect          |
| Keel             | total length of the ship body            |
| Beam             | total width of the ship body             |

- Crew Penalties (DMG p119.)

  - <90% crew = top speed - 1mph
  - <50% crew = no attack actions, reactions
  - <25% crew = slowed, DISCHK

- Cargo Penalties above max cargo
  - speed reduced to half
  - land vehicles require repairs = 1/4hp
  - water vehicles sink 5ft per round
  - air vehicles descend at 60ft per round

### Taking Damage

- vehicles performance is usually unaffected by damage until 0hp
- at 0hp vehicle is _incapacitated_, and may not take actions or reactions
- at 0hp air vehicle descends 60ft per round (unless 'wreck'd, which falls at 400ft per round)
- at 0hp water vehicle will sink only once 'wreck'd, floundering for 1d12mins then descending at 5ft per round
- at -1/2max hp vehicle is a wreck "beyond repair"

##### Variant: Damage Complications

- at <50% hp = top speed - 1mph and roll on Damage Complications Table
- at <25% hp = top speed - 1mph and roll on Damage Complications Table
- non-fire based Damage Complications can be removed by +5hp healing
- fire based Damage Complications can be removed by extinguishing the fire
- same complication cannot occur twice. reroll

###### Damage Complications Table

| d10 | Result                                                                                               |
| :-: | ---------------------------------------------------------------------------------------------------- |
|  1  | The ship's propulsion is damaged, it is now slowed                                                   |
|  2  | One of the ship's weapon systems has failed. If the ship has no weapons, it suffers no complication. |
|  3  | The ship's cargo hold has been ruptured, (2d20)% of its cargo is lost or damaged beyond repair.      |
|  4  | The rudder is locked. The ship may no longer change its course.                                      |
|  5  | A small oil fire has ignited on the deck. The helm is now obscured by a thick black smoke.           |
|  6  | The rudder is damaged. The vessel can only veer starboard.                                           |
|  7  | The vessel's hull is damaged. Its damage threshhold is reduced by 3.                                 |
|  8  | A munitions magazine has caught fire. The ship takes 2d6 fire damage per round until extinguished.   |

### Saving Throws & Resistances

> These saving throws, immunities and resistances **do not apply** to crew

- for saving throws, use the better of either the ships, or the commanders modifier
- vehicle has DISSAV vs damage (except during Brace for Impact)
- saving throw damage cannot be mitigated
- vehicle is immune to
  - dmg: poison, psychic
  - conditions: blinded, charmed, deafened, fatigued, petrified, poisoned, prone, surprise
- vehicle is resistant to
  - dmg: cold

## Combat

Commander

- must have appropriate proficency
- must start turn behind the helm
- crew must be >= indifferent toward commander
- crew must be willing to obey
- uses their actions to instruct the vehicle on their initiative

#### Attack Actions

| Attack Action          | Effect                                        |
| ---------------------- | --------------------------------------------- |
| Attack                 | fire prepared ordinance                       |
| Full Speed Ahead       | move +1/2(set speed) this round               |
| Brace for Impact       | until SONT GRANTDISATK, Normal SAV vs damage  |
| Hard to Port/Starboard | rotate 45deg in addition to course adjustment |
| Ready                  | same as usual readied action                  |

#### Move Actions

| Move Action          | Effect                                                                                        |
| -------------------- | --------------------------------------------------------------------------------------------- |
| Set Speed            | vehicle moves its speed at end of turn                                                        |
|                      | may only change speed by +/- 1/4 max speed each turn                                          |
|                      | movement must be in a straight line                                                           |
|                      | max reverse speed is 1mph                                                                     |
| Ramming              | at >= 20ft speed, ram as a free action                                                        |
|                      | if tonnage > double target tonnage, ADVATK and damage is doubled                              |
|                      | if tonnage < half target tonnage, DISATK and damage is halved                                 |
|                      | after ramming, opposed STRCHK.                                                                |
|                      | - if target succeeds, ramming vehicle move speed becomes 0                                    |
|                      | - if target fails, target pushed equal to 1/2 set speed and ramming vehicle move speed halved |
|                      | - if target fails by >=10, ramming vehicle move speed unaffected                              |
|                      | after attack, ramming vessel may adjust course as a free action with DM allowance             |
|                      | if speed remaining after ram >= 20ft additional ram attacks may be made                       |
|                      | at < 20ft speed, no attack, vehicle move speed becomes 0                                      |
| Cast or Raise Anchor | while anchor cast                                                                             |
|                      | - ADVSAV vs movement                                                                          |
|                      | - move speed becomes 0                                                                        |
|                      | - changing takes effect at SONT                                                               |

#### Other Actions

- Adjust Course (**B**)
  - rotate +-45deg before, after or any time during move
  - set speed must be >0
- Reactions
  - only used for Readied action
  - vehicle cannot make opportunity attacks
  - spells and attacks which deny reactions have no effect on vehicle (but can effect commander)

#### Other Character Roles

- Man Weapon Station

  - ship no longer controls weapon on its turn
  - PC may operate weapon on their turn
  - Attack uses the better modifier between ship and crew
  - No special proficency is required

- Damage Control
  - character may grant vehicle 5 temp hp
  - temp hp increased to 10 if character has prof with appropriate tool set

### Defense Conditions

For the purposes of Glyph of Warding and other delayed-effect spells cast on the ship proper (i.e. not including any personal spells/glyphs), the "DEFCON" system has been appropriated.

A Pendant/Broach that bears the symbol of the ship should be given to each crew member or occupant to identify them to the Glyph defense system. **It must remain visible** (A brand with the same insignia can be used for pets, companions etc)

Each Glyph has a unique command word that identifies it (PCs can just point and say "that one") that can be commanded to enter a specific DEFCON with an optional 6 second delay.

Pendant wearers can initiate DEFCONs 1, 2 and 3. However only the Captain and XO can initiate DEFCON 4 or 0

Changes in shipwide DEFCON can be performed verbally or with a hand-gesture (Wrists crossed above the head, with the numerical DEFCON represented by the same number of extended fingers on both hands). DEFCON must be relayed by the Crew.

| DEFCON | Defense Spells Target                              |
| :----: | -------------------------------------------------- |
|   4    | Nobody                                             |
|   3    | Internal DEFCON-4, External DEFCON-1               |
|   2    | Any target unaccompanied (10') by a Pendant Wearer |
|   1    | Any target not wearing a Pendant                   |
|   0    | **Any target**                                     |

#### Glyph of Warding

- Triggers: DEFCON system
- Find Glyph: Int (Investigation) vs Caster DC
- Explosive Glyph:
  - Choose damage type: acid, cold, fire, lightning, or thunder
  - 20' Sphere centered on Glyph, spreads around corners
  - DEXSAV vs 5d8 [+d8 per upcast]
  - Save for half
- Spell Glyph:
  - **Must target a single creature or an area**
  - If target: targets triggering creature
  - If area: centered on triggering creature
  - Does not require concentration
  - Requires upcasting glyph to store spells > 3rd level

#### Further Reading

- [Izzys Guide to Fight and Flight](https://www.dmsguild.com/product/234723/Izzys-Guide-to-Fight-and-Flight)
- [Izzys Slightly Used Airships](https://www.dmsguild.com/product/231613/Izzys-Slightly-Used-Airships)
- [Izzys Airships a la Carte](https://www.dmsguild.com/product/253437/Izzys-Airships-a-la-Carte-Build-your-own-Airship)
