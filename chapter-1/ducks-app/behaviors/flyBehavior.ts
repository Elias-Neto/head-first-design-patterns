import { FlyBehavior } from './index';

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log("Voando com asas!")
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("Não posso voar.")
  }
}

class FlyRocketPowered implements FlyBehavior {
  fly() {
    console.log("Voando com um foguete!")
  }
}

export { FlyWithWings, FlyNoWay, FlyRocketPowered }