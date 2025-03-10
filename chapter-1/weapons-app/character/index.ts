import { WeaponBehavior, KnifeBehavior, BowAndArrowBehavior, AxeBehavior, SwordBehavior } from "../weapon-behaviors"

abstract class Character {
  weaponBehavior: WeaponBehavior

  constructor() {
    this.weaponBehavior = null
  }

  setWeapon(weaponBehavior: WeaponBehavior) {
    this.weaponBehavior = weaponBehavior
  }

  display() {
    throw new Error("Método 'display()' deve ser implementado.")
  }

  fight() {
    if (this.weaponBehavior) {
      this.weaponBehavior.useWeapon()
    } else {
      console.log("Nenhuma arma definida.")
    }
  }
}

class Queen extends Character {
  constructor() {
    super(), this.setWeapon(new BowAndArrowBehavior())
  }

  display() {
    console.log("I'm a queen!")
  }
}

class King extends Character {
  constructor() {
    super()
    this.setWeapon(new SwordBehavior())
  }

  display() {
    console.log("I'm a king!")
  }
}

class Knight extends Character {
  constructor() {
    super()
    this.setWeapon(new AxeBehavior())
  }

  display() {
    console.log("I'm a knight!")
  }
}

class Troll extends Character {
  constructor() {
    super()
    this.setWeapon(new KnifeBehavior())
  }

  display() {
    console.log("I'm a troll!")
  }
}

export { Character, Queen, King, Knight, Troll }