import { Pizza } from "../pizza"

abstract class PizzaStore {
  abstract createPizza(type: string): Pizza

  orderPizza(type: string) {
    const pizza = this.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()
    pizza.ready()

    return pizza
  }
}

export { PizzaStore }