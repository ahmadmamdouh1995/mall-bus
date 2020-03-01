var products = [
    "bag.jpg",
    "banana.jpg",
    "bathroom.jpg",
    "boots.jpg",
    "breakfast.jpg",
    "bubblegum.jpg",
    "chair.jpg",
    "cthulhu.jpg",
    "dog-duck.jpg",
    "dragon.jpg",
    "pen.jpg",
    "pet-sweep.jpg",
    "scissors.jpg",
    "shark.jpg",
    "sweep.png",
    "tauntaun.jpg",
    "unicorn.jpg",
    "usb.gif",
    "water-can.jpg"
];

//(1) get the prouducts 
var leftImg = document.querySelector('#leftImg');
var middleImg = document.querySelector('#middleImg');
var rightImg = document.querySelector('#rightImg');
var imgSection = document.querySelector('#imgSection');

//(2) add src,alt,title to the prouducts to test if ever thing is working
leftImg.src = `img/${products[0]}`;
leftImg.alt = products[0];
leftImg.title = products[0];

middleImg.src = `img/${products[1]}`;
middleImg.alt = products[1];
middleImg.title = products[1];

rightImg.src = `img/${products[2]}`;
rightImg.alt = products[2];
rightImg.title = products[2];

//(3_1) create constructor function for the prouducts
function Prouduct(products) {
    this.products = products;
    this.clicks = 0;
    this.views = 0;
    this.imagePath = `img/${this.products}`;
    Prouduct.all.push(this);

}
Prouduct.all = [];

//(3_2) instantiate objects for all the products one shot
for (var i = 0; i < products.length; i++) {
    new Prouduct(products[i]);
}

//(4) render 3 random proudcts
var leftProduct, middleProduct, rightProduct;
function render() {
    leftProduct = Prouduct.all[randomNumber(0, Prouduct.all.length - 1)];
    middleProduct = Prouduct.all[randomNumber(0, Prouduct.all.length - 1)];
    rightProduct = Prouduct.all[randomNumber(0, Prouduct.all.length - 1)];
    if (leftProduct !== middleProduct && middleProduct !== rightProduct && leftProduct !== rightProduct) {
        leftImg.setAttribute('src', leftProduct.imagePath);
        leftImg.setAttribute('alt', leftProduct.products);
        leftImg.setAttribute('title', leftProduct.products);
        middleImg.setAttribute('src', middleProduct.imagePath);
        middleImg.setAttribute('alt', middleProduct.products);
        middleImg.setAttribute('title', middleProduct.products);
        rightImg.setAttribute('src', rightProduct.imagePath);
        rightImg.setAttribute('alt', rightProduct.products);
        rightImg.setAttribute('title', rightProduct.products);
    }



}
render();

//(5) add the event listener to render new products
imgSection.addEventListener('click', handleClickOnProuduct);
var totalClicks = 0;
function handleClickOnProuduct(event) {
    if (totalClicks < 25) {
        if (event.target.id !== 'imgSection') {
            if (event.target.id === 'leftImg') {
                leftProduct.clicks++;
            } else if (event.target.id === 'middleImg') {
                middleProduct.clicks++;
            } else if (event.target.id === 'rightImg') {
                rightProduct.clicks++;
            }
            totalClicks++;
            leftProduct.views++;
            middleProduct.views++;
            rightProduct.views++;
            render();
        }

        // render();
    } else {

        console.log('more than 25 clicks');
        imgSection.removeEventListener('click', handleClickOnProuduct);
        render2();
    }

    // render();

}

//  the results of products 
function render2() {
    var ulE1 = document.getElementById('results');
    for (var i = 0; i < Prouduct.all.length; i++) {
        var liE1 = document.createElement('li');
        // Banana Slicer had 3 votes and was shown 5 times
        liE1.textContent = `${Prouduct.all[i].products} had ${Prouduct.all[i].clicks} votes and was shown ${Prouduct.all[i].views} times`;
        ulE1.appendChild(liE1);
    }
}



//  Random Functions 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// while (leftProduct !== middleProduct && middleProduct !== rightProduct && leftProduct !== rightProduct) {

// }