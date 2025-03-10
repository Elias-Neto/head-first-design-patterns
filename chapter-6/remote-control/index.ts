import { Command } from "../interfaces"

class NoCommand implements Command {
  execute() {
    console.log('No Command')
  }
}

class RemoteControl {
  onCommands: Command[]
  offCommands: Command[]

  constructor() {
    this.onCommands = []
    this.offCommands = []
    for (let i = 0; i < 7; i++) {
      this.onCommands.push(new NoCommand())
      this.offCommands.push(new NoCommand())
    }
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute()
  }
  offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute()
  }

  printMenu() {
    console.log('----- Menu -----')
    for (let i = 0; i < this.onCommands.length; i++) {
      console.log(`[slot ${i + 1}] ${this.onCommands[i]?.constructor.name || 'No Command'} ${this.offCommands[i]?.constructor.name || 'No Command'}`)
    }
  }
}

export { RemoteControl }