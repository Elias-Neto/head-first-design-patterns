class Dough {}
class Sauce {}
class Cheese {}
class Veggies {}
class Pepperoni {}
class Clam {}

interface PizzaIngredientFactory {
  createDough(): Dough
  createSauce(): Sauce
  createCheese(): Cheese
  createVeggies(): Veggies[]
  createPepperoni(): Pepperoni
  createClam(): Clam
}

export { PizzaIngredientFactory, Dough, Sauce, Cheese, Veggies, Pepperoni, Clam }