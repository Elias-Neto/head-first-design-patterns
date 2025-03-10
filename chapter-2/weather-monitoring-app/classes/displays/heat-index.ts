import { DisplayElement } from "../../interfaces/display-element"
import { Observer } from "../../interfaces/observer"
import { Subject } from "../../interfaces/subject"

class HeatIndexDisplay implements Observer, DisplayElement {
  private temperature: number = 0
  private humidity: number = 0
  private heatIndex: number = 0.0
  private weatherData: Subject

  constructor(weatherData: Subject) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  computeHeatIndex(t: number, rh: number): number {
    const index =
      16.923 +
      0.185212 * t +
      5.37941 * rh -
      0.100254 * t * rh +
      0.00941695 * (t * t) +
      0.00728898 * (rh * rh) +
      0.000345372 * (t * t * rh) -
      0.000814971 * (t * rh * rh) +
      0.0000102102 * (t * t * rh * rh) -
      0.000038646 * (t * t * t) +
      0.0000291583 * (rh * rh * rh) +
      0.00000142721 * (t * t * t * rh) +
      0.000000197483 * (t * rh * rh * rh) -
      0.0000000218429 * (t * t * t * rh * rh) +
      0.000000000843296 * (t * t * rh * rh * rh) -
      0.0000000000481975 * (t * t * t * rh * rh * rh)
    return index
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature
    this.humidity = humidity
    this.heatIndex = this.computeHeatIndex(temperature, humidity)
    this.display()
  }

  display(): void {
    console.log(`Heat index is ${this.heatIndex}`)
  }
}

export { HeatIndexDisplay }
