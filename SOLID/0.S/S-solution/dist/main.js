class $2c12f86fb6319ec8$var$RadioPlayer {
    _musicLevel = 0;
    _oldMusicLevel = 50;
    turnOn() {
        this._musicLevel = this._oldMusicLevel;
    }
    turnOff() {
        this._musicLevel = 0;
    }
    get musicLevel() {
        return this._musicLevel;
    }
    set musicLevel(value) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }
}
class $2c12f86fb6319ec8$var$Engine {
    FUEL_MILEAGE = 10;
    _miles = 0;
    _status = false;
    constructor(gasTankCapacity){
        this._gasTank = new $2c12f86fb6319ec8$var$GasTank(gasTankCapacity);
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
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get gasTank() {
        return this._gasTank;
    }
    get miles() {
        return this._miles;
    }
}
class $2c12f86fb6319ec8$var$GasTank {
    _fuel = 0;
    constructor(MAXIMUM_FUEL_CAPACITY){
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    addFuel(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
    consumeFuel() {
        this._fuel -= 1;
    }
    get fuel() {
        return this._fuel;
    }
    set fuel(amount) {
        this._fuel = amount;
    }
}
class $2c12f86fb6319ec8$var$Car {
    constructor(){
        this._radioPlayer = new $2c12f86fb6319ec8$var$RadioPlayer();
        this._engine = new $2c12f86fb6319ec8$var$Engine(100);
    }
    drive() {
        if (this._engine.status === false || this._engine.gasTank.fuel <= 0) return;
        this.engine.gasTank.consumeFuel();
        this.engine.addMiles();
    }
    get radio() {
        return this._radioPlayer;
    }
    get engine() {
        return this._engine;
    }
}
const $2c12f86fb6319ec8$var$musicToggleElement = document.querySelector("#music-toggle");
const $2c12f86fb6319ec8$var$musicSliderElement = document.querySelector("#music-slider");
const $2c12f86fb6319ec8$var$engineToggleElement = document.querySelector("#engine-toggle");
const $2c12f86fb6319ec8$var$addFuelForm = document.querySelector("#add-fuel-form");
const $2c12f86fb6319ec8$var$addFuelInput = document.querySelector("#add-fuel-input");
const $2c12f86fb6319ec8$var$fuelLevelElement = document.querySelector("#fuel-level");
const $2c12f86fb6319ec8$var$milesElement = document.querySelector("#miles-value");
const $2c12f86fb6319ec8$var$audioElement = document.querySelector("#car-music");
let $2c12f86fb6319ec8$var$car = new $2c12f86fb6319ec8$var$Car();
$2c12f86fb6319ec8$var$musicToggleElement.addEventListener("click", ()=>{
    if ($2c12f86fb6319ec8$var$car.radio.musicLevel === 0) {
        $2c12f86fb6319ec8$var$car.radio.turnOn();
        console.log("music is on");
        $2c12f86fb6319ec8$var$musicSliderElement.value = $2c12f86fb6319ec8$var$car.radio.musicLevel.toString();
        $2c12f86fb6319ec8$var$musicToggleElement.innerText = "Turn music off";
        return;
    }
    $2c12f86fb6319ec8$var$musicToggleElement.innerText = "Turn music on";
    $2c12f86fb6319ec8$var$car.radio.turnOff();
    console.log("music is off");
});
$2c12f86fb6319ec8$var$musicSliderElement.addEventListener("input", (event)=>{
    let target = event.target;
    $2c12f86fb6319ec8$var$car.radio.musicLevel = target.value;
    $2c12f86fb6319ec8$var$audioElement.volume = $2c12f86fb6319ec8$var$car.radio.musicLevel / 100;
    $2c12f86fb6319ec8$var$musicToggleElement.innerText = $2c12f86fb6319ec8$var$car.radio.musicLevel ? "Turn music off" : "Turn music on";
});
$2c12f86fb6319ec8$var$engineToggleElement.addEventListener("click", ()=>{
    if ($2c12f86fb6319ec8$var$car.engine.status) {
        $2c12f86fb6319ec8$var$car.engine.turnOff();
        $2c12f86fb6319ec8$var$engineToggleElement.innerText = "Turn engine on";
        return;
    }
    $2c12f86fb6319ec8$var$engineToggleElement.innerText = "Turn engine off";
    $2c12f86fb6319ec8$var$car.engine.turnOn();
});
$2c12f86fb6319ec8$var$addFuelForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    $2c12f86fb6319ec8$var$car.engine.gasTank.addFuel(Number($2c12f86fb6319ec8$var$addFuelInput.value));
    $2c12f86fb6319ec8$var$fuelLevelElement.innerText = $2c12f86fb6319ec8$var$car.engine.gasTank.fuel.toString();
});
setInterval(()=>{
    $2c12f86fb6319ec8$var$car.drive();
    $2c12f86fb6319ec8$var$milesElement.innerText = $2c12f86fb6319ec8$var$car.engine.miles;
    $2c12f86fb6319ec8$var$fuelLevelElement.innerText = $2c12f86fb6319ec8$var$car.engine.gasTank.fuel.toString();
    if ($2c12f86fb6319ec8$var$car.radio.musicLevel === 0) $2c12f86fb6319ec8$var$audioElement.pause();
    else $2c12f86fb6319ec8$var$audioElement.play();
}, 1000);


//# sourceMappingURL=main.js.map
