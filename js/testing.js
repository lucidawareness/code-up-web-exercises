cartQTY = 5;

expired = false;

premiumMember = true;

console.log("Cart QTY: " + cartQTY);

console.log(`Cart QTY: ${cartQTY}`);
console.log(`Is expired: ${expired}`);
console.log(`Is premium member: ${premiumMember}`);

// Check if user is premium member

if (premiumMember){
    if (expired){                           // checks if offer is expired
        console.log("\nOffer is expired!");
    } else {
        console.log("\nOffer is valid");
    }
} else if (cartQTY < 2 || expired) {        // checks if cart qty is greater than 1 or if expired
    console.log("\nOffer is NOT valid");
} else {
    console.log("\nOffer is valid");
}
