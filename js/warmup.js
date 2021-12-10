
let creditScore = 650;
let cashOnHand = 11000;

if (creditScore > 680 && cashOnHand >= 4000){ // checks credit score above 680 and C.O.H above 9999
    console.log("You are qualified");
} else if (cashOnHand >= 10000){               // no good credit, check if at least $10,000
    console.log("You are qualified");
} else {                                       // no credit no down
    console.log("You are not qualified");
}
