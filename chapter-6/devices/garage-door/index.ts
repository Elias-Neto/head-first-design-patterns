import { Command } from "../../interfaces"

class GarageDoor {
  up(): void {
    console.log("Garage door up")
  }
  down(): void {
    console.log("Garage door down")
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
  undo(): void {
    this.garageDoor.down()
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
  undo(): void {
    this.garageDoor.up()
  }
}

export { GarageDoor, GarageDoorOpenCommand, GarageDoorCloseCommand }