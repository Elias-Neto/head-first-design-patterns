import { Command } from "../../interfaces"

class Stereo {
  on(): void {
    console.log("Stereo on")
  }
  off(): void {
    console.log("Stereo off")
  }
  setCD(): void {
    console.log("Stereo set CD")
  }
  setVolume(volume: number): void {
    console.log("Stereo volume set to " + volume)
  }
}

class StereoOnWithCDCommand implements Command {
  stereo: Stereo

  constructor(stereo: Stereo) {
    this.stereo = stereo
  }

  execute(): void {
    this.stereo.on()
    this.stereo.setCD()
    this.stereo.setVolume(11)
  }
  undo(): void {
    this.stereo.off()
  }
}

class StereoOff implements Command {
  stereo: Stereo

  constructor(stereo: Stereo) {
    this.stereo = stereo
  }

  execute(): void {
    this.stereo.off()
  }
  undo(): void {
    this.stereo.on()
    this.stereo.setCD()
    this.stereo.setVolume(11)
  }
}

export { Stereo, StereoOnWithCDCommand, StereoOff }