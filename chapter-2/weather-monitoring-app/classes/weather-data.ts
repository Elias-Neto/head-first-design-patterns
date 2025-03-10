import { Observer } from '../interfaces/observer';
import { Subject } from '../interfaces/subject';

class WeatherData implements Subject {
  private observers: Observer[] = []
  private temperature: number = 0
  private humidity: number = 0
  private pressure: number = 0

  getTemperature(): number {
    return this.temperature
  }
  getHumidity(): number {
    return this.humidity
  }
  getPressure(): number {
    return this.pressure
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer)
  }
  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer)
    if (index >= 0) {
      this.observers.splice(index, 1)
    }
  }
  notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update(this.temperature, this.humidity, this.pressure)
    })
  }

  measurementsChanged(): void {
    this.notifyObservers()
  }
  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }
}

export { WeatherData }