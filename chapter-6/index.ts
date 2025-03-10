import { CeilingFan, CeilingFanOffCommand, CeilingFanOnCommand } from "./devices/ceiling-fan";
import { GarageDoor, GarageDoorCloseCommand, GarageDoorOpenCommand, GarageDoorStopCommand } from "./devices/garage-door";
import { Light, LightOffCommand, LightOnCommand } from "./devices/light";
import { Stereo, StereoOff, StereoOnWithCDCommand } from "./devices/stereo";
import { RemoteControl } from "./remote-control";

const livingRoomLight = new Light("Living Room")
const livingRoomLightOn = new LightOnCommand(livingRoomLight)
const livingRoomLightOff = new LightOffCommand(livingRoomLight)

const kitchenLight = new Light("Kitchen")
const kitchenLightOn = new LightOnCommand(kitchenLight)
const kitchenLightOff = new LightOffCommand(kitchenLight)

const livingRoomCeilingFan = new CeilingFan("Living Room Ceiling Fan")
const livingRoomCeilingFanOn = new CeilingFanOnCommand(livingRoomCeilingFan)
const livingRoomCeilingFanOff = new CeilingFanOffCommand(livingRoomCeilingFan)

const garageDoor = new GarageDoor()
const garageDoorOpen = new GarageDoorOpenCommand(garageDoor)
const garageDoorClose = new GarageDoorCloseCommand(garageDoor)

const stereo = new Stereo()
const stereoOn = new StereoOnWithCDCommand(stereo)
const stereoOff = new StereoOff(stereo)

const remoteControl = new RemoteControl()

remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff)
remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff)
remoteControl.setCommand(2, livingRoomCeilingFanOn, livingRoomCeilingFanOff)
remoteControl.setCommand(3, stereoOn, stereoOff)
remoteControl.setCommand(4, garageDoorOpen, garageDoorClose)

remoteControl.printMenu()

remoteControl.onButtonWasPushed(0)
remoteControl.offButtonWasPushed(0)
remoteControl.onButtonWasPushed(1)
remoteControl.offButtonWasPushed(1)
remoteControl.onButtonWasPushed(2)
remoteControl.offButtonWasPushed(2)
remoteControl.onButtonWasPushed(3)
remoteControl.offButtonWasPushed(3)
remoteControl.onButtonWasPushed(4)
remoteControl.offButtonWasPushed(4)

