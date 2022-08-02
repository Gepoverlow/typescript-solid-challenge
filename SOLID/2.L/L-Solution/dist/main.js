class $3ad8b3f9291c2a94$export$2e2bcd8739ae039 {
    constructor(value = 0){
        this._value = value;
    }
}


class $c3c61f77146b8c2d$export$2e2bcd8739ae039 extends (0, $3ad8b3f9291c2a94$export$2e2bcd8739ae039) {
    constructor(value){
        super(value);
    }
    apply(price) {
        if (this._value < 0) return Math.max(0, price - 0);
        return Math.max(0, price - this._value);
    }
    showCalculation(price) {
        if (this._value < 0) return price + "\u20AC (Fixed Discounts cant be negative)";
        return price + "\u20AC -  " + this._value + "\u20AC (min 0 \u20AC)";
    }
}



class $088dddd2ca5e8be8$export$2e2bcd8739ae039 extends (0, $3ad8b3f9291c2a94$export$2e2bcd8739ae039) {
    constructor(value){
        super(value);
    }
    apply(price) {
        return price - price * this._value / 100;
    }
    showCalculation(price) {
        return price + " \u20AC -  " + this._value + "%";
    }
}


class $d79833f73622d4e1$export$2e2bcd8739ae039 {
    apply(price) {
        return price;
    }
    showCalculation(price) {
        return "No discount";
    }
}


class $091f271f6234d162$export$2e2bcd8739ae039 {
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


class $07e94cd84de36019$export$2e2bcd8739ae039 {
    //this array only accepts Product objects, nothing else
    _products = [];
    get products() {
        return this._products;
    }
    addProduct(product) {
        this._products.push(product);
    }
}


let $71760380dbca18d3$var$cart = new (0, $07e94cd84de36019$export$2e2bcd8739ae039)();
$71760380dbca18d3$var$cart.addProduct(new (0, $091f271f6234d162$export$2e2bcd8739ae039)("Chair", 25, new (0, $c3c61f77146b8c2d$export$2e2bcd8739ae039)(10)));
$71760380dbca18d3$var$cart.addProduct(new (0, $091f271f6234d162$export$2e2bcd8739ae039)("Chair", 25, new (0, $c3c61f77146b8c2d$export$2e2bcd8739ae039)(-10)));
$71760380dbca18d3$var$cart.addProduct(new (0, $091f271f6234d162$export$2e2bcd8739ae039)("Table", 50, new (0, $088dddd2ca5e8be8$export$2e2bcd8739ae039)(25)));
$71760380dbca18d3$var$cart.addProduct(new (0, $091f271f6234d162$export$2e2bcd8739ae039)("Bed", 100, new (0, $d79833f73622d4e1$export$2e2bcd8739ae039)()));
const $71760380dbca18d3$var$tableElement = document.querySelector("#cart tbody");
$71760380dbca18d3$var$cart.products.forEach((product)=>{
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
    $71760380dbca18d3$var$tableElement.appendChild(tr);
});


//# sourceMappingURL=main.js.map
