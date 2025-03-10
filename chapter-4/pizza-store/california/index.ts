import { PizzaStore } from ".."
import { CaliforniaStyleCheesePizza } from "../../pizza/california"

class CaliforniaPizzaStore extends PizzaStore {
  createPizza(type: string) {
    if (type === "cheese") {
      return new CaliforniaStyleCheesePizza()
    } else if (type === "pepperoni") {
      // return new CaliforniaStylePepperoniPizza()
      console.log("Preparing pepperoni pizza in California style...")
    } else if (type === "clam") {
      // return new CaliforniaStyleClamPizza()
      console.log("Preparing clam pizza in California style...")
    } else if (type === "veggie") {
      // return new CaliforniaStyleVeggiePizza()
      console.log("Preparing veggie pizza in California style...")
    }
  }
}

export { CaliforniaPizzaStore }