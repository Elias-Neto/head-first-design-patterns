import { QuackBehavior } from './index';

class Quack implements QuackBehavior {
  quack() {
    console.log("Quack!");
  }
}

class MuteQuack implements QuackBehavior {
  quack() {
    console.log("...");
  }
}

export { Quack, MuteQuack };
