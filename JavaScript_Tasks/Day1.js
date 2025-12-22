// Day-1
// Shopping Cart Simulaton


console.log("Shopping Cart")

tax=8;
discount=10;

cart=[]

function addToCart(name, price, quant){
    cart.push({name,price,quant});
}

function calcTotal(cart){
    let sum=0;
    cart.forEach(element => {
        sum+=element.price;
    });
    return sum;
}
function calcTax(totalCost){
    return (totalCost/100)*tax;
}

function calcDiscount(totalCost){
    discountedprice=totalCost-((totalCost/100)*discount);
    return discountedprice
}


function main(){
    addToCart('Mobile',15000,5),
    addToCart('Laptop',75000,2),
    addToCart('LG Smart TV',50000,1)

    const totalCost= calcTotal(cart);
    const totalTaxedAmount= calcTax(totalCost);
    const finalPrice= calcDiscount(totalTaxedAmount);

    console.log("Items in cart");
    console.log(cart);
    // cart.forEach(element => {
    //     console.log(`Name: ${element.name}, Price: ${element.price}, Quantity: ${element.quant}`);
    // });

    console.log("Loading.....");
    setTimeout(() => {
        console.log('SubTotal: ',totalCost);
        console.log('Total Amount After Tax: ', totalTaxedAmount);
        console.log('Total Amount After Discount: ',finalPrice);
    }, 5000);
}

main();