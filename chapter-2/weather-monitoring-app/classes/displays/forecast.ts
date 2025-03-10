import { DisplayElement } from "../../interfaces/display-element"
import { Observer } from "../../interfaces/observer"
import { Subject } from "../../interfaces/subject"

class ForecastDisplay implements DisplayElement, Observer {
  private currentPressure: number = 29.2
  private lastPressure: number = 29.2
  private weatherData: Subject

  constructor(weatherData: Subject) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)  
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure
    this.currentPressure = pressure
    this.display()
  }

  display(): void {
    let forecast = null
    
    if (this.currentPressure > this.lastPressure) {
      forecast = "Improving weather on the way!"
    } else if (this.currentPressure === this.lastPressure) {
      forecast = "More of the same"
    } else if (this.currentPressure < this.lastPressure) {
      forecast = "Watch out for cooler, rainy weather"
    }

    console.log(`Forecast: ${forecast}`)
  }
}

export { ForecastDisplay }
