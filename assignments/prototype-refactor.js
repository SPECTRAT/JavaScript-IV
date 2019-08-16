/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
 console.log("----------------------- PROTOTYPE-REFRACTOR-------------------------------------")

class GameObject{
  constructor(attr){
    this.createdAt = attr.createdAt;
    this.name = attr.name;
    this.dimensions = attr.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game!`;
  }
}


class CharacterStats extends GameObject {
  constructor(stats) {
    super(stats);
    this.healthPoints = stats.healthPoints;
  }
  takeDamage(num) {
    return `${this.name} took ${num} damange.`;
  }   
}


class Humanoid extends CharacterStats {
  constructor(humanoidAttr){
    super(humanoidAttr);
    this.team = humanoidAttr.team;
    this.weapons = humanoidAttr.weapons;
    this.language = humanoidAttr.language;
  }
  greet(){
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage(5)); // Bruce took 5 damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
   console.log("---------------------------------------STRETCH--------------------------------------------");


class Hero extends Humanoid {
  constructor(heroAttr){
    super(heroAttr);
    this.megaMove = heroAttr.megaMove;
  }
  battleCry(){
    return `${this.name} give a mighty battle cry in ${this.language}!`;
  }
  clobber(weapon, opponent){
    return `${this.name} used  ${weapon} to clobber ${opponent.name}.`;
  }
  mega(megaMove, opponent){
    return `${this.name} used special move, ${megaMove}, on ${opponent.name}!`;
  }
  healing(){
    return `${this.name} healed themselves for 10 HP.`;
  }
}


class Villain extends Humanoid{
  constructor(villainAttr){
    super(villainAttr);
    this.megaMove = villainAttr.megaMove;
  }
  battleCry() {
    return `${this.name} gives an monsterous battle cry in ${this.language}!`;
  }
  smash(weapon, opponent) {
    return `${this.name} used  ${weapon} to smash ${opponent.name}.`;
  }
  mega(megaMove, opponent) {
    return `${this.name} used special move, ${megaMove}, on ${opponent.name}!`;
  }
}

  let superNan = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 6,
    },
    healthPoints: 25,
    name: 'Super Nanny',
    team: 'Better Behavior Brigade',
    weapons: [
      'Book of Discipline',
      'Time Out Token'
    ],
    language: `The Queen's English`,
    megaMove : "A Firm Talking To"
  });

  const terrTwo = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 0.5,
      width: 1,
      height: 1,
    },
    healthPoints: 30,
    name: 'Terrible Two Timmy',
    team: 'No-Nappers',
    weapons: [
      'Death Rattle',
      'Sonic Tantrum Blast',
      'Binky Boomerang'
    ],
    language: 'Baby Talk',
    megaMove: 'Turbo Tantrum'
  });

  console.log(terrTwo.battleCry());
  console.log("...");
  console.log(superNan.battleCry());
  console.log("...");
  console.log(superNan.clobber(superNan.weapons[0], terrTwo.name));
  console.log(terrTwo.takeDamage(10));
  console.log("...");
  console.log(terrTwo.smash(terrTwo.weapons[1], superNan));
  console.log(superNan.takeDamage(10));
  console.log("...");
  console.log(superNan.clobber(superNan.weapons[1], terrTwo));
  console.log(terrTwo.takeDamage(10));
  console.log("...");
  console.log(terrTwo.smash(terrTwo.weapons[0], superNan));
  console.log(superNan.takeDamage(7));
  console.log("...");
  console.log(superNan.healing());
  console.log("...");
  console.log(terrTwo.smash(terrTwo.weapons[0], superNan));
  console.log(superNan.takeDamage(10));
  console.log("...");
  console.log(superNan.mega(superNan.megaMove, terrTwo));
  console.log(terrTwo.takeDamage(15));
  console.log(terrTwo.destroy());
  console.log(`${superNan.name} is the victor!!`);
