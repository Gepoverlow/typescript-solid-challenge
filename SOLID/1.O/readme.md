# Open–closed principle

Classes should be open for extension, but closed for modification. In more simple words you can always add new code to an object, but you should never change the design of old code.

It is much better to work with **dependencies**, meaning passing an object to another object as a parameter.

Ideal code should be written with the **Blackbox** principle in mind, you should be able to guess what a function does just looking at its signature.

Consider how the coupling of two entities affects their respective maintainability. The more a given entity knows about how another one is implemented, the more we can say that they are coupled. Therefore, if one of the two entities is changed, then the other must be changed too.

### Arrays with meaning

Other examples of bad code practices not listing to the Open Closed Principle is having objects return Associative Arrays with meaning (the labels are used later on outside the class)

```typescript
function getProducts() {
  return [
    { name: "chair", price: 5 },
    { name: "table", price: 15 },
    { name: "bed", price: 20 },
  ];
}
//the zero at the end refers to the default value when no total has been calculated yet (first value of total)
// This is needed in case the getProducts() returns an empty array
let totalPrice = getProducts().reduce((total, product) => total + product.price, 0);
```

You can improve on this in 2 ways in TypeScript, you can create a Product class or create a literal:

```typescript
type Product = { name: string; price: number };
type ProductCollection = Product[];
```

## Your mission

Look at the old.ts file, and you see a bunch of animals in a zoo, all making the sounds.
Now add another animal (you can choose your favorite animal), and make sure it makes a sound.

Did you notice you needed to alter the Zoo object even when all you did was add a new Animal class? Would it not be much better to move the `makeSound` function to each Animal class, so each animal can decide for himself what sound he makes instead of the Zoo class?

Create a `makeSound` function to each Animal class and remove the giant switch from the Zoo class. Now you can easily add new animals without altering an existing class!

## My one-liner as I see it:

You shouldn't adapt your feet to fit the shoe, but adapt the shoe to fit your feet.

## Example:

### We make some shapes

```typescript
class Rectangle {
  public width: number;
  public height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  public radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
}
```

### Create a AreaCalculator class

```typescript
class AreaCalculator {
  public calculateAreasOfMultipleShapes(shapes: Array<Rectangle | Circle>) {
    return shapes.reduce((calculatedArea, shape) => {
      if (shape instanceof Rectangle) {
        return calculatedArea + shape.width * shape.height;
      }
      if (shape instanceof Circle) {
        return calculatedArea + shape.radius * Math.PI;
      }
    }, 0);
  }
}
```

### This will work for the Rectangle and Circle, but what if we wanted to add another shape? We would need to change the `calculateAreasOfMultipleShapes` method by adding another if statement that checks for that specific new shape => this breaks the OCP.

#

## To fix it:

### To fix this, we can create a Shape interface that makes all the shapes have a getArea method individually.

```typescript
interface Shape {
  getArea(): number;
}
```

### Have the shape classes implement this interface:

```typescript
class Rectangle implements Shape {
  public width: number;
  public height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  public getArea() {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  public radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  public getArea() {
    return this.radius * Math.PI;
  }
}
```

### Now we can adapt our AreaCalculator's `calculateAreasOfMultipleShapes` so it can handle any shape we could implement in the future!

```typescript
class AreaCalculator {
  public calculateAreasOfMultipleShapes(shapes: Shape[]) {
    return shapes.reduce((calculatedArea, shape) => {
      return calculatedArea + shape.getArea();
    }, 0);
  }
}
```

## Conclusion:

By implementing the interface we have succesfully prepared the AreaCalculator to be able to take any shape, thus making it not only a more expandable and reusable class, but more readable!
