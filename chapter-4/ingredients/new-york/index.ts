import { Dough, Pepperoni, PizzaIngredientFactory, Sauce, Veggies } from "..";

class ThickCrustDough implements Dough {}
class MarinaraSauce implements Sauce {}
class ReggianoCheese implements Sauce {}
class SlicedPepperoni implements Pepperoni {}
class FreeshClams implements Sauce {}

class Garlic implements Veggies {}
class Onion implements Veggies {}
class Mushroom implements Veggies {}
class RedPepper implements Veggies {}

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }

  createCheese() {
    return new ReggianoCheese();
  }

  createVeggies() {
    return [ new Garlic(), new Onion(), new Mushroom(), new RedPepper() ];
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  createClam() {
    return new FreeshClams();
  }
}

export { NYPizzaIngredientFactory }