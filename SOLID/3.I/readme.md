# Interface segregation principle

"Many client-specific interfaces are better than one general-purpose interface."

Interfaces are really good, but like with everything that is good you can go overboard. It is really important that when we create interfaces that are precise and modular.
Almost all languages support adding multiple interfaces to the same class, this in contrast to extending a class, where only a few languages (eg. c++) allow multiple inheritance.
This allows us to create a lot of small, granular interfaces that then allows us to reuse interfaces to multiple different classes.

As a rule of thumb, her is an easy rule: **If at any point you are writing 'this function is not supported' in a class to adhere to an interface, your interface is too big.**

The problem of these big interfaces is sometimes called a \*_Fat Interface_. A fat interface violates Single Responsibility Principle too as it’s handling more than one responsibilities at a time.

Let us think of an example, for example, let us think back of an animal example, look at the following code:

```typescript
interface BirdInterface {
  laysEgg();
  makeSound();
  fly();
  getFlySpeed();
}
class Parrot implements BirdInterface {}
```

This works great, but what happens when we want to make a penguin? Those cute creatures cannot fly! So let us move the _fly()_ to a separate interface:

```typescript
interface BirdInterface {
  laysEgg();
  makeSound();
}
interface CanFly {
  fly();
  getFlySpeed();
}
```

### Exercise: step 1

Go into [old.ts](old.ts) and look at the 2 different users. They have a couple of authentication methods but like you can see, Admin users can only login with a password, not with facebook or google because of security reasons.
Refactor the current fat interface so each auth method has each own interface.
As an extra difficulty, there is a feature request for a google bot to be able to login on the site, he can only use the google option to log in. Can you make this extra class?

### Exercise: Step 2 (Optional)

You might notice that both the Google and Facebook code is almost identical, could you maybe refactor this code to small, separate dependencies?

## My one-liner as I see it:

Designing an Interface is much like serving a plate of food; Serve too much and your stomach will ache, serve too little and you will be hungry.

## Examples:

Lets create a human interface for our new game! A human should be able to walk, talk, breath and eat.

```typescript
interface IHuman {
  walk(): void;
  talk(): void;
  breath(): void;
  eat(): void;
}
```

And implement it to our newly created Adult class:

```typescript
class Adult implements IHuman {
  walk() {
    //Adult walks...
  }

  talk() {
    //Adult talks...
  }

  breath() {
    //Adult breathes...
  }

  eat() {
    //Adult eats...
  }
}
```

So far so good and my game is working just fine, but now I want to add newborns in my game, and a newborn is still a human so lets use that interface to create one!

```typescript
class NewBorn implements IHuman {
  walk() {
    //ERROR! newborns can't walk...
  }

  talk() {
    //ERROR! newborns can't talk...
  }

  breath() {
    //Newborn breathes...
  }

  eat() {
    //Newborn eats...
  }
}
```

Oops! We just found out our IHuman interface is not suitable for all humans; we officially broke the Interface Segregation Principle.

## Possible Fix

One possible fix is to split the IHuman interface into multiple 'sub-interfaces' like this:

```typescript
interface Walker {
  walk(): void;
}

interface Talker {
  talk(): void;
}

interface Breather {
  breath(): void;
}

interface Eater {
  eat(): void;
}
```

So when we create a new NewBorn class we can implement selected interfaces like this:

```typescript
class NewBorn implements Breather, Eater {
  breath() {
    //NewBorn breathes...
  }

  eat() {
    //NewBorn eats...
  }
}
```

## Conclusion

Another super nice principle that goes hand to hand with the Single Responsability Principle in the sense that both guide us to more follow a more expandable, bug less and readable way of crafting code.
