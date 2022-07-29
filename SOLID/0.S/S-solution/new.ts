class RadioPlayer {
  private _musicLevel: number = 0;
  private _oldMusicLevel: number = 50;

  turnOn() {
    this._musicLevel = this._oldMusicLevel;
  }

  turnOff() {
    this._musicLevel = 0;
  }

  get musicLevel(): number {
    return this._musicLevel;
  }

  set musicLevel(value: number) {
    this._musicLevel = value;
    this._oldMusicLevel = value;
  }
}

class Engine {
  private readonly FUEL_MILEAGE: number = 10;
  private _miles: number = 0;
  private _status: boolean = false;
  private _gasTank: GasTank;

  constructor(gasTankCapacity) {
    this._gasTank = new GasTank(gasTankCapacity);
  }

  turnOn() {
    this._status = true;
  }

  turnOff() {
    this._status = false;
  }

  addMiles() {
    this._miles += this.FUEL_MILEAGE;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  get gasTank(): GasTank {
    return this._gasTank;
  }
  get miles(): number {
    return this._miles;
  }
}

class GasTank {
  private readonly MAXIMUM_FUEL_CAPACITY: number;
  private _fuel: number = 0;

  constructor(MAXIMUM_FUEL_CAPACITY: number) {
    this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
  }

  addFuel(fuel: number) {
    this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
  }

  consumeFuel() {
    this._fuel -= 1;
  }

  get fuel(): number {
    return this._fuel;
  }

  set fuel(amount: number) {
    this._fuel = amount;
  }
}

class Car {
  private _radioPlayer: RadioPlayer;
  private _engine: Engine;

  constructor() {
    this._radioPlayer = new RadioPlayer();
    this._engine = new Engine(100);
  }

  drive() {
    if (this._engine.status === false || this._engine.gasTank.fuel <= 0) {
      return;
    }

    this.engine.gasTank.consumeFuel();
    this.engine.addMiles();
  }

  get radio(): RadioPlayer {
    return this._radioPlayer;
  }

  get engine(): Engine {
    return this._engine;
  }
}

const musicToggleElement = <HTMLElement>document.querySelector("#music-toggle");
const musicSliderElement = <HTMLInputElement>document.querySelector("#music-slider");
const engineToggleElement = <HTMLInputElement>document.querySelector("#engine-toggle");
const addFuelForm = document.querySelector("#add-fuel-form");
const addFuelInput = <HTMLFormElement>document.querySelector("#add-fuel-input");
const fuelLevelElement = <HTMLElement>document.querySelector("#fuel-level");
const milesElement = <HTMLElement>document.querySelector("#miles-value");
const audioElement = <HTMLAudioElement>document.querySelector("#car-music");

let car = new Car();

musicToggleElement.addEventListener("click", () => {
  if (car.radio.musicLevel === 0) {
    car.radio.turnOn();
    console.log("music is on");
    musicSliderElement.value = car.radio.musicLevel.toString();
    musicToggleElement.innerText = "Turn music off";
    return;
  }
  musicToggleElement.innerText = "Turn music on";
  car.radio.turnOff();
  console.log("music is off");
});

musicSliderElement.addEventListener("input", (event) => {
  let target = <HTMLFormElement>event.target;
  car.radio.musicLevel = target.value;
  audioElement.volume = car.radio.musicLevel / 100;
  musicToggleElement.innerText = car.radio.musicLevel ? "Turn music off" : "Turn music on";
});

engineToggleElement.addEventListener("click", () => {
  if (car.engine.status) {
    car.engine.turnOff();
    engineToggleElement.innerText = "Turn engine on";
    return;
  }
  engineToggleElement.innerText = "Turn engine off";
  car.engine.turnOn();
});

addFuelForm.addEventListener("submit", (event) => {
  event.preventDefault();

  car.engine.gasTank.addFuel(Number(addFuelInput.value));
  fuelLevelElement.innerText = car.engine.gasTank.fuel.toString();
});

setInterval(() => {
  car.drive();

  milesElement.innerText = <string>(<unknown>car.engine.miles);

  fuelLevelElement.innerText = car.engine.gasTank.fuel.toString();

  if (car.radio.musicLevel === 0) {
    audioElement.pause();
  } else {
    audioElement.play();
  }
}, 1000);
