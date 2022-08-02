import IDiscount from "../Interfaces/IDiscount";
import Discount from "./Discount";

export default class FixedDiscount extends Discount implements IDiscount {
  constructor(value: number) {
    super(value);
  }
  apply(price: number): number {
    if (this._value < 0) {
      return Math.max(0, price - 0);
    }
    return Math.max(0, price - this._value);
  }
  showCalculation(price: number): string {
    if (this._value < 0) {
      return price + "€ (Fixed Discounts cant be negative)";
    }
    return price + "€ -  " + this._value + "€ (min 0 €)";
  }
}
