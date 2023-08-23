"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(allMountains) {
    var tallestMountain = allMountains[0];
    allMountains.forEach(function (c) {
        if (c.height > tallestMountain.height) {
            tallestMountain = c;
        }
    });
    return tallestMountain.name;
}
var mountainName = findNameOfTallestMountain(Mountains);
console.log(mountainName);
var products = [
    {
        name: "cereal",
        price: 4.50
    },
    {
        name: "milk",
        price: 2.99
    },
    {
        name: "pancake mix",
        price: 8.49
    }
];
function calcAverageProductPrice(allProducts) {
    var sum = 0;
    allProducts.forEach(function (p) {
        sum += p.price;
    });
    return sum / allProducts.length;
}
var avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);
var inventory = [{
        quantity: 10,
        product: {
            name: "motor",
            price: 10.00
        }
    },
    {
        quantity: 4,
        product: {
            name: "sensor",
            price: 12.50
        }
    },
    {
        quantity: 20,
        product: {
            name: "LED",
            price: 1.00
        }
    }
];
function calcInventoryValue(inventoryItems) {
    var value = 0;
    var sum = 0;
    inventoryItems.forEach(function (i) {
        value = i.product.price * i.quantity;
        sum += value;
    });
    return sum;
}
var productValue = calcInventoryValue(inventory);
console.log(productValue);
