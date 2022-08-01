# Liskov substitution principle

"Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." See also [design by contract](https://en.wikipedia.org/wiki/Design_by_contract).

### Polymorphism

You might already be aware of Polymorphism, but just to remind you, here is the short summary:
If 2 different classes use **the same interface**, so they have the same function names: the code that uses this class does not care about which one class it receives.
In short: When two objects have the same interface, they are functionally interchangeable = polymorphism.

## Your mission

Look at the old.ts file and open the index.html file, refactor the Discount class in 3 different classes with the same interface "VariableDiscount" & "FixedDiscount" & "NoDiscount"

### Discuss

Do you understand what the use is of having the class NoDiscount? This prevents us from having to write extra if-statements inside product to check if we actually have a Discount dependency. It might look strange but these null or void classes are very common in a lot of popular libraries!

## My one-liner as I see it:

How good is an advice if it's just going to make things worse? (Or crash your app).

## Examples:

Lets create a Bird class with a fly method. Birds should be able to fly right?

```typescript
class Bird {
  fly() {
    //Fly birdie fly.
  }
}
```

Next up, lets make a Duck class that will extend from the Bird class so it can inherit the fly method. Ducks can fly, so far so good.

```typescript
class Duck extends Bird {
  quack() {
    //Duck Quacks
  }
}
```

Now I want to make a Penguin. Penguins are birds right? But we have a problem... they cant fly!

```typescript
class Penguin extends Bird {
  fly() {
    //Throw new Error, penguins cant fly :(
  }

  swim() {
    //Penguin Swims.
  }
}
```

So if now we instantiate the Duck and Penguin classes and make them fly, what will happen?

```typescript
const duck = new Duck();
const penguin = new Penguin();

function makeBirdFly(bird) {
  bird.fly();
}

makeBirdFly(duck); //Flies like it should
makeBirdFly(penguin); //Error: penguins cant fly :(
```

## Errorrrrrr. My subclass (Penguin) fly method works different than its superclass (Bird) fly method therefore breaking the Liskov Substitute Principle.

#

## How to fix so the Penguin class also follow the LSP:

1- Change the Bird class to FlyingBird and create a new one called SwimmingBird

```typescript
class FlyingBird {
  fly() {
    //Fly birdie fly.
  }
}

class SwimmingBird {
  swim() {
    //Swim birdie swim.
  }
}
```

2- Change from which class the Duck and Penguin are extending from

```typescript
class Duck extends FlyingBird {
  quack() {
    //Duck Quacks
  }
}

class Penguin extends SwimmingBird {}
```

3- Change the way we make the bird fly or swim

```typescript
function makeFlyingBirdFly(bird) {
  bird.fly();
}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}
```

4- Now when we instantiate them and make them fly or swim:

```typescript
const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck); // Duck flies no prob
makeSwimmingBirdSwim(penguin); //Penguin swims no prob
```

## It works as intended! Plus, if we call their respective superclasses separately, we should expect the same results:

```typescript
const flyingBird = new FlyingBird();
const swimmingBird = new SwimmingBird();

makeFlyingBirdFly(flyingBird); // Bird flies no prob
makeSwimmingBirdSwim(swimmingBird); //Bird swims no prob
```

## Conclusion

By following this principle we automatically improve on the realiability of the code by making sure every subclass and superclass can be interchangable and will not break anything.
