import {
  CurrentConditionsDisplay,
  ForecastDisplay,
  StatisticsDisplay,
  HeatIndexDisplay,
} from "./displays"
import { WeatherData } from "./weather-data"

class WeatherStation {
  private weatherData: WeatherData
  private currentConditions: CurrentConditionsDisplay
  private statisticsDisplay: StatisticsDisplay
  private forecastDisplay: ForecastDisplay
  private heatIndexDisplay: HeatIndexDisplay

  constructor() {
    this.weatherData = new WeatherData()

    this.currentConditions = new CurrentConditionsDisplay(this.weatherData)
    this.statisticsDisplay = new StatisticsDisplay(this.weatherData)
    this.forecastDisplay = new ForecastDisplay(this.weatherData)
    this.heatIndexDisplay = new HeatIndexDisplay(this.weatherData)
  }

  updateMeasurements(temperature, humidity, pressure) {
    this.weatherData.setMeasurements(temperature, humidity, pressure)
  }
}

export { WeatherStation }
