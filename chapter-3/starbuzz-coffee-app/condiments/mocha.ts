import { CondimentDecorator } from ".";
import { Beverage } from "../beverage";

class Mocha extends CondimentDecorator {
  beverage: Beverage
  
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }
  
  getDescription(): string {
    return this.beverage.getDescription() + ", Mocha"
  }

  cost(): number {
    return 0.20 + this.beverage.cost()
  }
}

export { Mocha }