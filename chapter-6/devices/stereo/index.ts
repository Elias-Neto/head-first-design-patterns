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
}

class StereoOff implements Command {
  stereo: Stereo

  constructor(stereo: Stereo) {
    this.stereo = stereo
  }

  execute(): void {
    this.stereo.off()
  }
}

export { Stereo, StereoOnWithCDCommand, StereoOff }