import { Beverage } from ".";

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost(): number {
    return 1.99;
  }
}

export { Espresso }