import { Command } from "../../interfaces"

class GarageDoor {
  up(): void {
    console.log("Garage door up")
  }
  down(): void {
    console.log("Garage door down")
  }
  stop(): void {
    console.log("Garage door stop")
  }
}

class GarageDoorOpenCommand implements Command {
  garageDoor: GarageDoor

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  execute(): void {
    this.garageDoor.up()
  }
}

class GarageDoorCloseCommand implements Command {
  garageDoor: GarageDoor

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  execute(): void {
    this.garageDoor.down()
  }
}

class GarageDoorStopCommand implements Command {
  garageDoor: GarageDoor

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  execute(): void {
    this.garageDoor.stop()
  }
}

export { GarageDoor, GarageDoorOpenCommand, GarageDoorCloseCommand, GarageDoorStopCommand }