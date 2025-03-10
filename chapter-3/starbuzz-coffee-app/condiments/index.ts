import { Beverage } from "../beverage";

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string
}

export { CondimentDecorator }