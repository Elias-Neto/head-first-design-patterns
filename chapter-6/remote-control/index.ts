import { Command } from "../interfaces"

class NoCommand implements Command {
  execute() {
    console.log('No Command')
  }
  undo() {
    console.log('No Command')
  }
}

class MacroCommand implements Command {
  constructor(public commands: Command[]) { }
  execute() {
    for (let command of this.commands) {
      command.execute()
    }
  }
  undo() {
    for (let command of this.commands) {
      command.undo()
    }
  }
}

class RemoteControl {
  onCommands: Command[]
  offCommands: Command[]
  undoCommand: Command

  constructor() {
    this.onCommands = []
    this.offCommands = []
    for (let i = 0; i < 7; i++) {
      this.onCommands.push(new NoCommand())
      this.offCommands.push(new NoCommand())
    }

    this.undoCommand = new NoCommand()
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute()
    this.undoCommand = this.onCommands[slot]
  }
  offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute()
    this.undoCommand = this.offCommands[slot]
  }
  undoButtonWasPushed() {
    this.undoCommand.undo()
  }

  printMenu() {
    console.log('----- Menu -----')
    for (let i = 0; i < this.onCommands.length; i++) {
      console.log(`[slot ${i + 1}] ${this.onCommands[i]?.constructor.name || 'No Command'} ${this.offCommands[i]?.constructor.name || 'No Command'}`)
    }
    console.log(`[undo] ${this.undoCommand.constructor.name || 'No Command'}`)
  }
}

export { RemoteControl, MacroCommand }