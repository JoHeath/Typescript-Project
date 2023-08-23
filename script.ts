export {}

interface Mountain{
    name: string;
    height: number;
}

let Mountains:Mountain[] = [
{
    name: "Kilimanjaro",
    height: 19341
},
{
    name:"Everest",
    height: 29029
},
{
    name:"Denali",
    height: 20310
}
];

function findNameOfTallestMountain(allMountains:Mountain[]):string{
     let tallestMountain:Mountain = allMountains[0];

     allMountains.forEach((c:Mountain)=>{
         if(c.height > tallestMountain.height){
             tallestMountain = c;
         }
     });
     return tallestMountain.name;    
    
}


let mountainName:string = findNameOfTallestMountain(Mountains);
console.log(mountainName);


interface Product{
    name: string;
    price: number;
}

let products:Product[] = [
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

function calcAverageProductPrice(allProducts:Product[]):number{
    let sum = 0;
    allProducts.forEach((p:Product) => {
        sum += p.price;
    });
    return sum/allProducts.length;
        
    }

    let avgPrice: number = calcAverageProductPrice(products);
    console.log(avgPrice);



interface InventoryItem{
    product: Product;
    quantity: number;
}

let inventory:InventoryItem[] =[{
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

function calcInventoryValue(inventoryItems:InventoryItem[]):number{
    let value = 0;
    let sum = 0;
    inventoryItems.forEach((i:InventoryItem) =>{
        value = i.product.price * i.quantity;
        sum += value;
        
    });
    return sum;
    
}

let productValue:number = calcInventoryValue(inventory)
console.log(productValue);