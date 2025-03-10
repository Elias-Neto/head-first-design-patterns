import { Command } from "../../interfaces"

class CeilingFan {
  location: string

  constructor(location: string) {
    this.location = location
  }

  on(): void {
    console.log(`${this.location} ceiling fan on`)
  }

  off(): void {
    console.log(`${this.location} ceiling fan off`)
  }
}

class CeilingFanOnCommand implements Command {
  ceilingFan: CeilingFan

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  execute(): void {
    this.ceilingFan.on()
  }
}

class CeilingFanOffCommand implements Command {
  ceilingFan: CeilingFan

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  execute(): void {
    this.ceilingFan.off()
  }
}


export { CeilingFan, CeilingFanOnCommand, CeilingFanOffCommand }