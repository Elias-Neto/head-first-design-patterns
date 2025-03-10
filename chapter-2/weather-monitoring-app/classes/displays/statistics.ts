import { DisplayElement } from "../../interfaces/display-element"
import { Observer } from "../../interfaces/observer"
import { Subject } from "../../interfaces/subject"

class StatisticsDisplay implements DisplayElement, Observer {
  private maxTemp: number = 0
  private minTemp: number = 200
  private tempSum: number = 0
  private numReadings: number = 0
  private weatherData: Subject
  
  constructor(weatherData: Subject) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.tempSum += temperature
    this.numReadings++
    if (temperature > this.maxTemp) {
      this.maxTemp = temperature
    }
    if (temperature < this.minTemp) {
      this.minTemp = temperature
    }
    this.display()
  }

  display(): void {
    console.log(`Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${this.maxTemp}/${this.minTemp}`)
  }
}

export { StatisticsDisplay }
