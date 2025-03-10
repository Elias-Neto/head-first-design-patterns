import { Duck } from "./ducks/duck"
import { MallardDuck } from "./ducks/mallard-dcuck"
import { ModelDuck } from "./ducks/model-duck"

const mallard = new MallardDuck()
// mallard.display()
// mallard.performFly()
// mallard.performQuack()
// mallard.swim()

const model = new ModelDuck()
// model.display()
// model.performFly()

class DuckerCall {
  private duck: Duck

  constructor(duck: Duck) {
    this.duck = duck
  }

  call() {
    this.duck.performQuack()
  }
}

const duckerCall = new DuckerCall(mallard)
// duckerCall.call()