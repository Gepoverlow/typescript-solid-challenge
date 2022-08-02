import IDiscount from "../Interfaces/IDiscount";

export default class NoDiscount implements IDiscount {
  apply(price: number): number {
    return price;
  }

  showCalculation(price: number): string {
    return "No discount";
  }
}
