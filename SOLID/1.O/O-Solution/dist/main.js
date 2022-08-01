class $2c12f86fb6319ec8$var$Dog {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return "dog";
    }
    makeSound() {
        return "Woof";
    }
}
class $2c12f86fb6319ec8$var$Cat {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return "cat";
    }
    makeSound() {
        return "Miauw";
    }
}
class $2c12f86fb6319ec8$var$Parrot {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return "parrot";
    }
    makeSound() {
        return "I am a pirate";
    }
}
class $2c12f86fb6319ec8$var$Goat {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return "goat";
    }
    makeSound() {
        return "Beeeeeeee";
    }
}
class $2c12f86fb6319ec8$var$Zoo {
    _animals = new Array();
    addAnimal(animal) {
        this._animals.push(animal);
    }
    get animals() {
        return this._animals;
    }
}
let $2c12f86fb6319ec8$var$zoo = new $2c12f86fb6319ec8$var$Zoo();
$2c12f86fb6319ec8$var$zoo.addAnimal(new $2c12f86fb6319ec8$var$Cat());
$2c12f86fb6319ec8$var$zoo.addAnimal(new $2c12f86fb6319ec8$var$Dog());
$2c12f86fb6319ec8$var$zoo.addAnimal(new $2c12f86fb6319ec8$var$Parrot());
$2c12f86fb6319ec8$var$zoo.addAnimal(new $2c12f86fb6319ec8$var$Goat());
$2c12f86fb6319ec8$var$zoo.animals.forEach((animal)=>{
    document.querySelector("#target").innerHTML += animal.type + ": " + animal.makeSound() + "<br>";
});


//# sourceMappingURL=main.js.map
