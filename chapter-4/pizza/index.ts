import { Cheese, Clam, Dough, Pepperoni, PizzaIngredientFactory, Sauce, Veggies } from "../ingredients"

abstract class Pizza {
  name: string

  dough: Dough
  sauce: Sauce
  veggies: Veggies[]
  cheese: Cheese
  pepperoni: Pepperoni
  clam: Clam

  setName(name: string) {
    this.name = name
  }
  getName(): string {
    return this.name
  }

  abstract prepare(): void

  bake() {
    console.log("Bake for 25 minutes at 350")
  }
  cut() {
    console.log("Cutting the pizza into diagonal slices")
  }
  box() {
    console.log("Place pizza in official PizzaStore box")
  }
  ready() {
    console.log("Pizza is ready!")
  }
}

class CheesePizza extends Pizza {
  pizzaIngredientsFactory: PizzaIngredientFactory

  constructor(pizzaIngredientsFactory: PizzaIngredientFactory) {
    super()
    this.pizzaIngredientsFactory = pizzaIngredientsFactory
  }

  prepare() {
    console.log("Preparing " + this.name)
    this.dough = this.pizzaIngredientsFactory.createDough()
    this.sauce = this.pizzaIngredientsFactory.createSauce()
    this.cheese = this.pizzaIngredientsFactory.createCheese()
  }
}

class ClamPizza extends Pizza {
  pizzaIngredientsFactory: PizzaIngredientFactory

  constructor(pizzaIngredientsFactory: PizzaIngredientFactory) {
    super()
    this.pizzaIngredientsFactory = pizzaIngredientsFactory
  }

  prepare() {
    console.log("Preparing " + this.name)
    this.dough = this.pizzaIngredientsFactory.createDough()
    this.sauce = this.pizzaIngredientsFactory.createSauce()
    this.cheese = this.pizzaIngredientsFactory.createCheese()
    this.clam = this.pizzaIngredientsFactory.createClam()
  }
}

export { Pizza, CheesePizza }