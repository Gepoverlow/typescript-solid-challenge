//This is called a Union, the discountType can only contain the following 2 values:
console.log("hiiiiooo");
class $cae0fed8022bd1e4$var$Discount {
    constructor(type, value = 0){
        this._type = type;
        this._value = value;
        if (this._type != "none" && value <= 0) throw new Error("You cannot create a " + this._type + " discount with a negative value");
    }
    apply(price) {
        //@todo: instead of using magic values as string in this, it would be a lot better to change them into constant. This would protect us from misspellings. Can you improve this?
        if (this._type === "none") return price;
        else if (this._type === "variable") return price - price * this._value / 100;
        else if (this._type === "fixed") return Math.max(0, price - this._value);
        else throw new Error("Invalid type of discount");
    }
    showCalculation(price) {
        if (this._type === "none") return "No discount";
        else if (this._type === "variable") return price + " \u20AC -  " + this._value + "%";
        else if (this._type === "fixed") return price + "\u20AC -  " + this._value + "\u20AC (min 0 \u20AC)";
        else throw new Error("Invalid type of discount");
    }
}
class $cae0fed8022bd1e4$var$Product {
    constructor(name, price, discount){
        this._name = name;
        this._price = price;
        this._discount = discount;
    }
    get name() {
        return this._name;
    }
    get discount() {
        return this._discount;
    }
    get originalPrice() {
        return this._price;
    }
    //The reason we call this function "calculateX" instead of using a getter on Price is because names communicate a lot of meaning between programmers.
    //most programmers would assume a getPrice() would be a simple display of a property that is already calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
    calculatePrice() {
        return this._discount.apply(this._price);
    }
    showCalculation() {
        return this._discount.showCalculation(this._price);
    }
}
class $cae0fed8022bd1e4$var$shoppingBasket {
    //this array only accepts Product objects, nothing else
    _products = [];
    get products() {
        return this._products;
    }
    addProduct(product) {
        this._products.push(product);
    }
}
let $cae0fed8022bd1e4$var$cart = new $cae0fed8022bd1e4$var$shoppingBasket();
$cae0fed8022bd1e4$var$cart.addProduct(new $cae0fed8022bd1e4$var$Product("Chair", 25, new $cae0fed8022bd1e4$var$Discount("fixed", 10)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
$cae0fed8022bd1e4$var$cart.addProduct(new $cae0fed8022bd1e4$var$Product("Table", 50, new $cae0fed8022bd1e4$var$Discount("variable", 25)));
$cae0fed8022bd1e4$var$cart.addProduct(new $cae0fed8022bd1e4$var$Product("Bed", 100, new $cae0fed8022bd1e4$var$Discount("none")));
const $cae0fed8022bd1e4$var$tableElement = document.querySelector("#cart tbody");
$cae0fed8022bd1e4$var$cart.products.forEach((product)=>{
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = product.name;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = product.originalPrice.toFixed(2) + " \u20AC";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = product.calculatePrice().toFixed(2) + " \u20AC";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = product.showCalculation();
    tr.appendChild(td);
    $cae0fed8022bd1e4$var$tableElement.appendChild(tr);
});


//# sourceMappingURL=main.js.map
