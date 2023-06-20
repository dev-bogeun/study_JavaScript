function Mart(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let apple = new Mart("사과", 1000, 20);
let banana = new Mart("바나나", 1200, 10);
let mouse = new Mart("마우스", 5000, 30);

let homeplus = new Array(apple, banana, mouse);
let homeplusJSON = JSON.stringify(homeplus);
console.log(homeplusJSON);