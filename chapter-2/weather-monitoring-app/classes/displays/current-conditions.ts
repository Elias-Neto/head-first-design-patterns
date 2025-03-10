import { DisplayElement } from "../../interfaces/display-element"
import { Observer } from "../../interfaces/observer";
import { Subject } from "../../interfaces/subject";

class CurrentConditionsDisplay implements DisplayElement, Observer {
  private temperature: number = 0;
  private humidity: number = 0;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
  }
}

export { CurrentConditionsDisplay }