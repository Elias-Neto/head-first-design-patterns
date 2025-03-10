import { PizzaStore } from ".."
import { ChicagoStyleCheesePizza } from "../../pizza/chicago"

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string) {
    if (type === "cheese") {
      return new ChicagoStyleCheesePizza()
    } else if (type === "pepperoni") {
      // return new ChicagoStylePepperoniPizza()
      console.log("Preparing pepperoni pizza in Chicago style...")
    } else if (type === "clam") {
      // return new ChicagoStyleClamPizza()
      console.log("Preparing clam pizza in Chicago style...")
    } else if (type === "veggie") {
      // return new ChicagoStyleVeggiePizza()
      console.log("Preparing veggie pizza in Chicago style...")
    }
  }
}

export { ChicagoPizzaStore }