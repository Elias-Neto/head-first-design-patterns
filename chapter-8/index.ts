import * as readline from "readline";

abstract class CaffeineBeverageWithHook {
  boilWater(): void {
    console.log("Boiling water");
  }
  
  pourInCup(): void {
    console.log("Pouring into cup");
  }

  abstract brew(): void;
  abstract addCondiments(): void;
  abstract getCondimentQuestion(): string;

  customerWantsCondiments(): Promise<boolean> {
    return this.getUserInput();
  }

  private getUserInput(): Promise<boolean> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise<boolean>((resolve) => {
      rl.question(this.getCondimentQuestion(), (answer) => {
        rl.close();
        resolve(answer.trim().toLowerCase().startsWith("y"));
      });
    });
  }

  public readonly prepare = async (): Promise<void> => {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (await this.customerWantsCondiments()) {
      this.addCondiments();
    }
  };
}

class Coffee extends CaffeineBeverageWithHook {
  brew(): void {
    console.log("Brewing coffee grains");
  }

  addCondiments(): void {
    console.log("Adding sugar and milk");
  }

  getCondimentQuestion(): string {
    return "Would you like sugar and milk with your coffee? (y/n): ";
  }
}

class Tea extends CaffeineBeverageWithHook {
  brew(): void {
    console.log("Steeping the tea");
  }

  addCondiments(): void {
    console.log("Adding lemon");
  }

  getCondimentQuestion(): string {
    return "Would you like lemon with your tea? (y/n): ";
  }
}

(async () => {
  console.log("--- Making coffee ---");
  const coffee = new Coffee();
  await coffee.prepare();

  console.log("\n--- Making tea ---");
  const tea = new Tea();
  await tea.prepare();
})();
