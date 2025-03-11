import { Command } from "../../interfaces"

enum CeilingFanSpeed {
  OFF = 0,
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3
}

class CeilingFan {
  location: string
  speed: CeilingFanSpeed

  constructor(location: string) {
    this.location = location
    this.speed = CeilingFanSpeed.OFF
  }

  high(): void {
    this.speed = CeilingFanSpeed.HIGH
    console.log(`${this.location} ceiling fan is on high`)
  }
  medium(): void {
    this.speed = CeilingFanSpeed.MEDIUM
    console.log(`${this.location} ceiling fan is on medium`)
  }
  low(): void {
    this.speed = CeilingFanSpeed.LOW
    console.log(`${this.location} ceiling fan is on low`)
  }
  off(): void {
    this.speed = CeilingFanSpeed.OFF
    console.log(`${this.location} ceiling fan is off`)
  }
  
  getSpeed(): CeilingFanSpeed {
    return this.speed
  }
}

//////

abstract class CeilingFanCommand implements Command {
  protected ceilingFan: CeilingFan
  protected prevSpeed: CeilingFanSpeed

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
    this.prevSpeed = ceilingFan.getSpeed()
  }

  abstract execute(): void

  undo(): void {
    switch (this.prevSpeed) {
      case CeilingFanSpeed.HIGH:
        this.ceilingFan.high()
        break
      case CeilingFanSpeed.MEDIUM:
        this.ceilingFan.medium()
        break
      case CeilingFanSpeed.LOW:
        this.ceilingFan.low()
        break
      case CeilingFanSpeed.OFF:
        this.ceilingFan.off()
        break
    }
  }
}

class CeilingFanHighCommand extends CeilingFanCommand {
  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.high()
  }
}

class CeilingFanMediumCommand extends CeilingFanCommand {
  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.medium()
  }
}

class CeilingFanOffCommand extends CeilingFanCommand {
  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.off()
  }
}


export { CeilingFan, CeilingFanHighCommand, CeilingFanMediumCommand, CeilingFanOffCommand }