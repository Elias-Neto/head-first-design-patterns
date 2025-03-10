enum Size {
  TALL,
  GRANDE,
  VENTI
}

abstract class Beverage {
  description: string = "Unknown Beverage"
  size: Size = Size.TALL

  getDescription(): string {
    return this.description
  }

  setSize(size: Size) {
    this.size = size
  }

  getSize(): Size {
    return this.size
  }

  abstract cost(): number
}

export { Beverage, Size }