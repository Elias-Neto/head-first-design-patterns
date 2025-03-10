import { Duck } from "./duck"
import { FlyRocketPowered } from "../behaviors/flyBehavior"
import { Quack } from "../behaviors/quackBehavior"

class ModelDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = new FlyRocketPowered()
    this.quackBehavior = new Quack()
  }

  display() {
    console.log("I'm a model duck")
  }
}

export { ModelDuck }
