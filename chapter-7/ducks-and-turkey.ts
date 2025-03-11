interface Duck {
  quack(): void;
  fly(): void;
}

class MallardDuck implements Duck {
  quack() {
    console.log("Quack!");
  }
  fly() {
    console.log("I'm flying!");
  }
}

///////////

interface Turkey {
  gobble(): void;
  fly(): void;
}

class WildTurkey implements Turkey {
  gobble() {
    console.log("Gobble gobble");
  }
  fly() {
    console.log("I'm flying a short distance");
  }
}

///////////

class TurkeyAdapter implements Duck {
  turkey: Turkey;
  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }
  quack() {
    this.turkey.gobble();
  }
  fly() {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}

class DuckAdapter implements Turkey {
  duck: Duck;
  constructor(duck: Duck) {
    this.duck = duck;
  }
  gobble() {
    this.duck.quack();
  }
  fly() {
    const random = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < random; i++) {
      this.duck.fly();
    }
  }
}

///////////

const testDuck = (duck: Duck) => {
  duck.quack();
  duck.fly();
}

const testTurkey = (turkey: Turkey) => {
  turkey.gobble();
  turkey.fly();
}

const duck = new MallardDuck();
const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);
const duckAdapter = new DuckAdapter(duck);

console.log('The Turkey says...');
testTurkey(turkey);

console.log('\n The Duck says...');
testDuck(duck);

console.log('\n The TurkeyAdapter says...');
testDuck(turkeyAdapter);

console.log('\n The DuckAdapter says...');
testTurkey(duckAdapter);