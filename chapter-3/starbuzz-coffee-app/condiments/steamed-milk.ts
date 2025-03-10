import { CondimentDecorator } from "."
import { Beverage } from "../beverage"

class SteamedMilk extends CondimentDecorator {
  beverage: Beverage

  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Steamed Milk"
  }

  cost(): number {
    return 0.10 + this.beverage.cost()
  }
}

export { SteamedMilk }
