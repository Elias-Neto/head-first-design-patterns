interface WeaponBehavior {
  useWeapon(): void;
}

class KnifeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('cut')
  }
}

class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('shoot')
  }
}

class AxeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('chop')
  }
}

class SwordBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('slash')
  }
}

export { WeaponBehavior, KnifeBehavior, BowAndArrowBehavior, AxeBehavior, SwordBehavior }
