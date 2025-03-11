import { Command } from "../../interfaces"

class Light {
  location: string

  constructor(location: string) {
    this.location = location
  }

  on(): void {
    console.log(`${this.location} light is on`)
  }
  off(): void {
    console.log(`${this.location} light is off`)
  }
}

class LightOnCommand implements Command {
  light: Light

  constructor(light: Light) {
    this.light = light
  }

  execute(): void {
    this.light.on()
  }
  undo(): void {
    this.light.off()
  }
}

class LightOffCommand implements Command {
  light: Light

  constructor(light: Light) {
    this.light = light
  }

  execute(): void {
    this.light.off()
  }
  undo(): void {
    this.light.on()
  }
}

export { Light, LightOnCommand, LightOffCommand }
