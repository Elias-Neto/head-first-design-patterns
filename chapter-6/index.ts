import {
  CeilingFan,
  CeilingFanHighCommand,
  CeilingFanMediumCommand,
  CeilingFanOffCommand,
} from "./devices/ceiling-fan"
import {
  GarageDoor,
  GarageDoorCloseCommand,
  GarageDoorOpenCommand,
} from "./devices/garage-door"
import { Light, LightOffCommand, LightOnCommand } from "./devices/light"
import { Stereo, StereoOff, StereoOnWithCDCommand } from "./devices/stereo"
import { MacroCommand, RemoteControl } from "./remote-control"

const livingRoomLight = new Light("Living Room")
const livingRoomLightOn = new LightOnCommand(livingRoomLight)
const livingRoomLightOff = new LightOffCommand(livingRoomLight)

const kitchenLight = new Light("Kitchen")
const kitchenLightOn = new LightOnCommand(kitchenLight)
const kitchenLightOff = new LightOffCommand(kitchenLight)

const livingRoomCeilingFan = new CeilingFan("Living Room Ceiling Fan")
const livingRoomCeilingFanHigh = new CeilingFanHighCommand(livingRoomCeilingFan)
const livingRoomCeilingFanOff = new CeilingFanOffCommand(livingRoomCeilingFan)
const livingRoomCeilingFanMedium = new CeilingFanMediumCommand(
  livingRoomCeilingFan
)

const garageDoor = new GarageDoor()
const garageDoorOpen = new GarageDoorOpenCommand(garageDoor)
const garageDoorClose = new GarageDoorCloseCommand(garageDoor)

const stereo = new Stereo()
const stereoOn = new StereoOnWithCDCommand(stereo)
const stereoOff = new StereoOff(stereo)

const remoteControl = new RemoteControl()


// remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff)
// remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff)
// remoteControl.setCommand(2, livingRoomCeilingFanHigh, livingRoomCeilingFanOff)
// remoteControl.setCommand(3, livingRoomCeilingFanMedium, livingRoomCeilingFanOff)
// remoteControl.setCommand(3, stereoOn, stereoOff)
// remoteControl.setCommand(4, garageDoorOpen, garageDoorClose)

// remoteControl.printMenu()

// remoteControl.onButtonWasPushed(0)
// remoteControl.offButtonWasPushed(0)
// remoteControl.onButtonWasPushed(1)
// remoteControl.offButtonWasPushed(1)
// remoteControl.onButtonWasPushed(2)
// remoteControl.offButtonWasPushed(2)
// remoteControl.onButtonWasPushed(3)
// remoteControl.offButtonWasPushed(3)
// remoteControl.onButtonWasPushed(4)
// remoteControl.offButtonWasPushed(4)

// remoteControl.onButtonWasPushed(0)
// remoteControl.undoButtonWasPushed()

// console.log('')
// remoteControl.onButtonWasPushed(2)
// remoteControl.offButtonWasPushed(2)
// console.log('')
// remoteControl.printMenu()
// console.log('')
// remoteControl.onButtonWasPushed(2)
// remoteControl.onButtonWasPushed(3)
// remoteControl.printMenu()
// console.log('')
// remoteControl.undoButtonWasPushed()

// const arrivingInHome = new MacroCommand([
//   garageDoorOpen,
//   livingRoomLightOn,
//   garageDoorClose,
// ])
// const leavingInHome = new MacroCommand([
//   garageDoorOpen,
//   livingRoomLightOff,
//   garageDoorClose,
// ])

// remoteControl.setCommand(0, arrivingInHome, leavingInHome)

// remoteControl.printMenu()

// console.log("\n Arriving in Home: \n")
// remoteControl.onButtonWasPushed(0)

// console.log("\n Leaving in Home: \n")
// remoteControl.offButtonWasPushed(0)

// const arrivingInLivingRoom = new MacroCommand([
//   livingRoomLightOn,
//   livingRoomCeilingFanHigh,
//   stereoOn,
// ])

// const leavingInLivingRoom = new MacroCommand([
//   livingRoomLightOff,
//   livingRoomCeilingFanOff,
//   stereoOff,
// ])

// remoteControl.setCommand(0, arrivingInLivingRoom, leavingInLivingRoom)

// remoteControl.printMenu()

// console.log("\n Arriving in Living Room: \n")
// remoteControl.onButtonWasPushed(0)

// console.log("\n Leaving in Living Room: \n")
// remoteControl.undoButtonWasPushed()