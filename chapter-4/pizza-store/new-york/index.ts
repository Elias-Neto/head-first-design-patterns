import { PizzaStore } from ".."
import { NYPizzaIngredientFactory } from "../../ingredients/new-york"
import { CheesePizza, Pizza } from "../../pizza"

class NYSPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza = null

    const ingredientsFactory = new NYPizzaIngredientFactory()
    
    if (type === "cheese") {
      pizza = new CheesePizza(ingredientsFactory)
      pizza.setName("New York Style Cheese Pizza")
    } 

    // @TODO: Implementar os outros tipos de pizza: pepperoni, veggie e clam

    return pizza
  }
}

export { NYSPizzaStore }