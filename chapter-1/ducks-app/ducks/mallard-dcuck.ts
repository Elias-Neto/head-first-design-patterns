import { Duck } from './duck'
import { FlyWithWings } from '../behaviors/flyBehavior'
import { Quack } from '../behaviors/quackBehavior'
   
class MallardDuck extends Duck {  
  constructor() {
    super()
    this.flyBehavior = new FlyWithWings()
    this.quackBehavior = new Quack()
  }

  display() {
    console.log("Sou um pato Mallard!")
  }
}

export { MallardDuck }