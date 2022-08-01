interface Animal {
  makeSound();
}

class Dog implements Animal {
  private _name;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get type() {
    return "dog";
  }

  public makeSound(): string {
    return "Woof";
  }
}

class Cat implements Animal {
  private _name;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get type() {
    return "cat";
  }

  public makeSound(): string {
    return "Miauw";
  }
}

class Parrot implements Animal {
  private _name;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get type() {
    return "parrot";
  }

  public makeSound(): string {
    return "I am a pirate";
  }
}

class Goat implements Animal {
  private _name;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get type() {
    return "goat";
  }

  public makeSound(): string {
    return "Beeeeeeee";
  }
}

class Zoo {
  private _animals: Array<Object> = new Array<Object>();

  public addAnimal(animal: object) {
    this._animals.push(animal);
  }

  get animals(): Array<Object> {
    return this._animals;
  }
}
let zoo = new Zoo();
zoo.addAnimal(new Cat());
zoo.addAnimal(new Dog());
zoo.addAnimal(new Parrot());
zoo.addAnimal(new Goat());

zoo.animals.forEach((animal) => {
  document.querySelector("#target").innerHTML += animal.type + ": " + animal.makeSound() + "<br>";
});
