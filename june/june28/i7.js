var cart = 250;

if (cart >= 1000){
    console.log("Discount = 100");
} else if (cart >= 300){
        console.log("Discount = " + cart*(10/100));
} else {
    console.log("Not eligible");
}