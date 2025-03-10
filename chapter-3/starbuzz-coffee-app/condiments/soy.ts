import { CondimentDecorator } from "."
import { Beverage, Size } from "../beverage"

class Soy extends CondimentDecorator {
  beverage: Beverage

  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Soy"
  }

  cost(): number {
    const cost = this.beverage.cost()

    switch (this.beverage.getSize()) {
      case Size.TALL:
        return cost + 0.1
      case Size.GRANDE:
        return cost + 0.15
      case Size.VENTI:
        return cost + 0.2
      default:
        return cost
    }
  }
}

export { Soy }
