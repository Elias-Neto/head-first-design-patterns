// Subsystems (components do Home Theater)
class Amplifier {
  on() {
    console.log("Amplifier is ON")
  }
  off() {
    console.log("Amplifier is OFF")
  }
  setVolume(level: number) {
    console.log(`Amplifier volume set to ${level}`)
  }
}

class DvdPlayer {
  on() {
    console.log("DVD Player is ON")
  }
  off() {
    console.log("DVD Player is OFF")
  }
  play(movie: string) {
    console.log(`Playing "${movie}"`)
  }
  stop() {
    console.log("Stopping DVD")
  }
}

class Projector {
  on() {
    console.log("Projector is ON")
  }
  off() {
    console.log("Projector is OFF")
  }
  wideScreenMode() {
    console.log("Projector in widescreen mode")
  }
}

class TheaterLights {
  dim(level: number) {
    console.log(`Lights dimmed to ${level}%`)
  }
  on() {
    console.log("Lights are ON")
  }
}

class PopcornPopper {
  on() {
    console.log("Popcorn Popper is ON")
  }
  pop() {
    console.log("Popping popcorn!")
  }
  off() {
    console.log("Popcorn Popper is OFF")
  }
}

// Facade Pattern: HomeTheaterFacade
class HomeTheaterFacade {
  constructor(
    private amp: Amplifier,
    private dvd: DvdPlayer,
    private projector: Projector,
    private lights: TheaterLights,
    private popper: PopcornPopper
  ) {}

  watchMovie(movie: string) {
    console.log("\n>>> Setting up movie night...")
    this.popper.on()
    this.popper.pop()
    this.lights.dim(20)
    this.projector.on()
    this.projector.wideScreenMode()
    this.amp.on()
    this.amp.setVolume(5)
    this.dvd.on()
    this.dvd.play(movie)
  }

  endMovie() {
    console.log("\n>>> Shutting down home theater...")
    this.popper.off()
    this.lights.on()
    this.projector.off()
    this.amp.off()
    this.dvd.stop()
    this.dvd.off()
  }
}

// Teste do Facade
const homeTheater = new HomeTheaterFacade(
  new Amplifier(),
  new DvdPlayer(),
  new Projector(),
  new TheaterLights(),
  new PopcornPopper()
)

homeTheater.watchMovie("The Matrix")
setTimeout(() => homeTheater.endMovie(), 5000)
