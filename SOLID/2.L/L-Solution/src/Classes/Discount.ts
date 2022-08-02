//This is called a Union, the discountType can only contain the following 2 values:

export default class Discount {
  protected _value: number;

  constructor(value: number = 0) {
    this._value = value;
  }
}
