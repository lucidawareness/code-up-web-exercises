cartQTY = 2;

expired = true;

premiumMember = false;

// Boolean operator only
// let isValid = cartQTY >=2 && !expired && premiumMember;
//
// console.log(isValid);
//
// if statement
// Check if user is premium member

if (premiumMember){
    if (expired){                           // checks if offer is expired
        console.log("\nOffer is expired!");
    } else {
        console.log("\nOffer is valid");
    }
} else if (cartQTY < 2 || expired) {                  // checks if cart qty is greater than 1
    console.log("\nOffer is NOT valid");
} else {
    console.log("\nOffer is valid");
}
