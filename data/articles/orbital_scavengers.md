Orbital Scavengers
===============================

_(Design Document)_

## Preface

This is a game concept I wrote back in 2004. I was just making my progress in OpenGL and I wanted to push that effort into a productive direction ;). Also, I was pretty inspired by the **Homeworld** title. I think I had been looking the game's [source code](http://www.fileplanet.com/137429/130000/fileinfo/Homeworld-Source-Code) as [Relic](http://www.relic.com/) posted it for free in 2003 and I really had the urge to write a game in pure C and OpenGL. 
I started gathering a team to start working on this game but later I had to start a 'real' job and the project was disbanded.

## Concept

In the far future, a large number of humanity's orbital space stations are surrounded by garbage. Tourist ships, trade ship, etc. are all just ejecting their garbage out in space effectively turning the space around space stations a no-fly zone. 

Player would take command of a space ship whose task would be to protect space stations from pollution & garbage left by tourist ships, insterstellar garbage carriers, pesky aliens, creatures from other dimensions which warped in just to throw their junk around and make some funny noises and others. Players should also protect the station from sudden meteor showers.
This would be a 3D game and the complete action would be carried out in deep space ([Babylon 5](http://en.wikipedia.org/wiki/Babylon_5) anyone?). The player will have complete control of her ship in all 3 axes movement. Camera view would be pretty similar to how it's done in **Homeworld** or the **Star Wars - Fighter** series.

![Homeworld screenshot](http://i.imgur.com/W11kEis.jpg)

_(Homeworld)_

## Game Story

Game story should be simple, fun and appealing to the player, so he can jump right into action.

In the far future, 31st century, every person has his own space-car and travelling around solar systems and the galaxy is little to no problem. Human nature however, did not change much. Everyone just ejects it's garbage around planets and space stations and the problem has taken immense proportions. Some planets are hardly accessible from all the junk flying around and some space stations have to clean junk constantly in order to provide a safe docking passage to ships. 
A political war is being waged by garbage collection & waste disposal corporations for territory, influence and money. Two of the biggest corporations are:
  * J.E.R.K.K. Corp. _(Junk ExteRmination & Karate Killers)_ - Founded by generations
  * I.D.I.O.T Enterprises _(Idle Dancers Ironing Obnoxious Trash)_ - Founded by a team of ex- playbox models 

![I.D.I.O.T. corp](http://i.imgur.com/xLSR9wv.jpg)

_(Had to put a pretty girl here)_



В далечния 31 век, всеки човек си има свой собствен space-мобил и движението из галактиката вече не е проблем.Природата на хората обаче не се е променила, та всеки си мята боклуците където свърне, особено замърсени стават космическите станции, където се води и война м/у различните почистващи ..аам корпорации, които си правят 'мръсно' една на друга.Двете най-изестни (враждуващи) корпорации са: 
J.E.R.K.K. Corp. - Junk ExteRmination & Karate Killers -> "типичните яки боклук-момчета" 
I.D.I.O.T Enterprises - Idle Dancers Ironing Obnoxious Trash -> "женска част от бивши playboy модели с нова професия" ;-) 
Целта на кампейна ще е да се разбере защо изжеднъж галактиката е станала толкова замърсена с други думи ще има фабула. Развръзката ще настъпи в последната станция, която има нужда от почситване, където играча ще срещне божеството на нашата галактика за да му зададе съотвения въпрос. Отговорът ще бъде просто...катастрофален lol: 

## Gameplay

Much like arcade games the gameplay should be quick, fast-paced and the player would be required to react quickly and use her reflexes, e.g., if several enemy targets are approaching at once player would be required to choose which one to attack (maybe the closest) and then quickly proceed to attack another.

Player gets the role of a _orbital-scavenger_. A mercenary from a given services corporation hired by space stations to keep their surroundings clear of garbage. Every space station would have a perimeter (more like a radius with the station in the center) that must be kept clean of pollution. Player would be paid space credits for a job well done which he can later use to buy upgrades for his ship. Space stations would not be limited only to such from human origins but the player would in fact be able to choose different stations from within the galaxy. And these may belong to other alien races which would pay space credits for the services the player provides. Traveling through the Galaxy would be possible by selecting marked places on a star map. Only places matching the skill and level of the player will be shown. 

Only single player mode is planned for the current version. There would be a campaign mode where players may choose which space stations in which part (solar system) of the galaxy to work for. Not all of the stations would be immediately accessible and some would only be accessible if certain missions are completed first, e.g., protection of Station X in order to be employed later by station Y.

The players will have the option to upgrade their space ships. Characteristics such as _speed_, _armour_, _shield_, _maneuverability_. Also they will be able to buy and upgrade weapons of different power and shooting range, e.g., some weapons would be more powerful in close range but less accurate. To buy weapons and upgrades players must spend space credits, which they will get for certain enemy kills and mainly from collecting garbage. Such style kills would be:
  * Destroying a large number of enemies in given period of time.
  * _Impressive kills_, e.g., destroy an enemy with long range weapon with single shot and then immediately shoot another in close range.

The ship a player chooses will have a garbage collection limit and in order for the ship to be able to collect more garbage player must buy upgrades. Upgrades can be bought at the beginning of each level. 

### Enemies

Противниците ще са скриптирани за всяко ниво.Ще се появяват от различни посоки. 

Най-тъпи ще са туристите или разни колонисти, които ще се приближата на дадено разстояние от станцията, ще оставят по един боклук и ще изчезват обратно.
Ще има боклукчииски кораби-камиони които ще се движат по отделно или в конвой(охранявани) и ще изсипват много боклук.
Анти-честотни извънземни - раса от малки лилави човечета, сравниетелно малки кораби от типа 'чиния със стъклен капак' ще се движат бързо и транзитно(само в една посока) и ще оставят следи от боклук.
Метеоритен дъжд, към базата са приближават няколко метеорита които трябва да бъдат унищожени. 

Всички тези могат да бъдат различни по вид като кораби и текстури. 

### Game settings

Нивата ще се правят със level editor, така че играчите ще имат възможност сами да си съствят нива и планове на действие.
Също така играча ще може да избира скинове за кораба си (и лого при Multiplayer).

## Environment 

Game action will be carried out in outer space. A [skybox](http://en.wikipedia.org/wiki/Skybox_(video_games)) rendering could be used to simulate parallax view. Different tiles might be used depending on the level and solar system the player has chosen to play in. Additional artifacts like distant moons, moving meteors or pieces of scrap or passing ships in the distance could be rendered to increase realism.

## Camera 

The player would be given the option to choose whether he wants to play in firs-person or third-person view. He will have full control of the camera but in general he will be able to locate enemies on a radar display part of the user interface.

![Concept game screen](http://i.imgur.com/TrfUG7C.jpg)

## Controls

Players will use be done using mouse & keyboard. Keys and actions will be configurable in the game menu. Controls via joystick may also be added.

### Keys and buttons

  * *Up* - forward acceleration
  * *Down* - backwards acceleration
  * *Left* - left strafe
  * *Right* - right strafe 
  * *Mouse/Wheel* - Z-axis rotation
  * *Button1* - fire
  * *Button2* - alternative fire/weapon change (_configurable_)
  * *Button3* - weapon change

### Aiming

A crosshair will be displayed during playing in the center of the screen (fixed position). When player targets an enemy the crosshair will change size and color. For enemies located in close range the crosshair will increase in size and for distant enemies the corsshair size will decrease. 
Players should be allowed to choose different UI styles for the crosshair.

## Weapons

### Ammunition types

| Undepletable | Rockets/Projectiles | Energy based |
| -------------| --------------------| -------------|
| AE           | AR                  | AG           |

### Range types

| Close range | Long range | Inter-long range |
| -------------| --------------------| -------------|
| RC           | RL                  | RE           |

### Damage types

| Minor damage | Average damage      | Big damage   | Splash damage |
| -------------| --------------------| -------------| -------------|
| DS           | DM                  | DB           | DX           |

### List

Ammo | Range | Damage | Name      | Description                                                                            
------|-------|--------|-----------|--------------
AE | RC | DS | Dual-Machine Cannon | изстрелва патрони, сравнително малко щета но за сметка на това винаги на разположение. 
AR | RL | DB | Starfall Rockets | стандартни далекобойни ракети.Изстрелват се по 2 или алтернативно по 4. 
AG | RE | DS | Lizard spheres | На вид: малки зелени сфери.Много бързи но с малко щета.Изстрелват се на откоси по 4 или алтернативно по 8 
AG | RL | DM | Laser Cannon | Стандартен Лазер.Изстрелва се на откоси като Dual-Machine. 
AG | RL | DB | Proton Beam | Лъч който ще се се насочва към даден кораб.Започва от носа на кораба на играча до определна точка в пространството (колкото е обсега му).Ако има кораб в обсега му ще му бъде нанесена щета.Няма алтернативна стрелба. 
AG | RC | DX | Mini-Antimatter Bomb | малка топка която при взривяване унищожава абсолютно всички противници в обсега си.Задейства се при удар в обект или алтернативно може да бъде задействана по рано. 
AR | RC | DX | Cloak Mines | Стандартни мини (невидим за протвиниците).Всеки който мине през тях бива унищожен.Дори и играча.  

Every weapon, depending on ammo type and power, will deplete a certain number of ammo shells.

### Bonuses & Collectables

Bonuses and items to collect would be available when the player destroys enemy ships or flies through metal boxes shown as glowing particles on the radar map. Player should also get bonuses for _impressive kills_; destroying many enemy ships one after another.

Bonus types available:

  * +n pts. armour
  * +n pts. energy
  * +n pts. rockets
  * Credits (_money_)
  * 5th Madness Pack - 5 times more damage and speed.
  * Mobile-Stations - Small turrets the player may spawn and place around the play field. They will exist only for certain period of time and they will automatically engage enemies.
  * Speed Boost - increases ship speed for certain amount of time.


## Level Design

Действието се развива в открития космос.Всяко ниво представлява дадена арена на действие, която се определя от обхвата на станцията която се защитава.За различните мисии и различните станции (човешки или извънземни) ще има и различни противници с цел разнообразие на бойната среда.Играчът ще може да действа/да се движи само в рамките на обхвата на станцията + няколко пиксела навън, за да 'посреща' противниците. 

Самите нива за да не са 'голи'.Могат да съдържват разни метални кутии или различни low-poly елементи които ще се носят около базата и могат да служат за прикритие. 

Играчът ще трябва да защитава станцията определно време.Като при достигане на маскимума боклук който станцията може да побере в орбита си мисията ще се счете за неуспешна и ще бъде прекратена. 


 

___
© 2004 [KenamicK Entertainment](http://kenamick.com/)