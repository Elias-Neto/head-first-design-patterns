class ChocolateBoiler {
  private empty: boolean
  private boiled: boolean
  private static uniqueInstance: ChocolateBoiler

  private constructor() {
    this.empty = true
    this.boiled = false
  }

  static getInstance(): ChocolateBoiler {
    if (!ChocolateBoiler.uniqueInstance) {
      ChocolateBoiler.uniqueInstance = new ChocolateBoiler()
    }
    return ChocolateBoiler.uniqueInstance
  }

  isEmpty() {
    return this.empty
  }
  isBoiled() {
    return this.boiled
  }

  fill() {
    if (this.isEmpty()) {
      this.empty = false
      this.boiled = false
      // fill the boiler with a milk/chocolate mixture
    }
  }
  drain() {
    if (!this.isEmpty() && this.isBoiled()) {
      this.empty = true
      // drain the boiled milk and chocolate
    }
  }
  boil() {
    if (!this.isEmpty() && !this.isBoiled()) {
      this.boiled = true
      // bring the contents to a boil
    }
  }
}

const boiler = ChocolateBoiler.getInstance()
boiler.fill()
boiler.boil()
boiler.drain()