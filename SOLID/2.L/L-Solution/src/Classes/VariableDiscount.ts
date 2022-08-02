import IDiscount from "../Interfaces/IDiscount";
import Discount from "./Discount";

export default class VariableDiscount extends Discount implements IDiscount {
  constructor(value: number) {
    super(value);
  }
  apply(price: number): number {
    return price - (price * this._value) / 100;
  }

  showCalculation(price: number): string {
    return price + " € -  " + this._value + "%";
  }
}
