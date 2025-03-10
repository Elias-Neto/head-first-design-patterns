import { FlyBehavior, QuackBehavior } from "../behaviors"

abstract class Duck {
  flyBehavior: FlyBehavior
  quackBehavior: QuackBehavior

  constructor() {
    this.flyBehavior = null
    this.quackBehavior = null
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior
  }
  setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior
  }

  display() {
    throw new Error("Método 'display()' deve ser implementado.")
  }

  performFly() {
    if (this.flyBehavior) {
      this.flyBehavior.fly()
    } else {
      console.log("Nenhum comportamento de voo definido.")
    }
  }

  performQuack() {
    if (this.quackBehavior) {
      this.quackBehavior.quack()
    } else {
      console.log("Nenhum comportamento de grasnado definido.")
    }
  }

  swim() {
    console.log("Todos os patos flutuam, até mesmo os de brinquedo!")
  }
}

export { Duck }