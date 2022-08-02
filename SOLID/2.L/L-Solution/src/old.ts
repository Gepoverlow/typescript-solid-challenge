import FixedDiscount from "./Classes/FixedDiscount";
import VariableDiscount from "./Classes/VariableDiscount";
import NoDiscount from "./Classes/NoDiscount";
import Product from "./Classes/Product";
import ShoppingBasket from "./Classes/ShoppingBasket";

let cart = new ShoppingBasket();
cart.addProduct(new Product("Chair", 25, new FixedDiscount(10)));
cart.addProduct(new Product("Chair", 25, new FixedDiscount(-10)));
cart.addProduct(new Product("Table", 50, new VariableDiscount(25)));
cart.addProduct(new Product("Bed", 100, new NoDiscount()));

const tableElement = document.querySelector("#cart tbody");
cart.products.forEach((product) => {
  let tr = document.createElement("tr");

  let td = document.createElement("td");
  td.innerText = product.name;
  tr.appendChild(td);

  td = document.createElement("td");
  td.innerText = product.originalPrice.toFixed(2) + " €";
  tr.appendChild(td);

  td = document.createElement("td");
  td.innerText = product.calculatePrice().toFixed(2) + " €";
  tr.appendChild(td);

  td = document.createElement("td");
  td.innerText = product.showCalculation();
  tr.appendChild(td);

  tableElement.appendChild(tr);
});
