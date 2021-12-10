

// Their credit score must be over 680 AND have at least $4000 on-hand
// OR, they must have at least $10000 on-hand

let creditScore = 650;
let cashOnHand = 5000;

let result = "\nApplication Results\nYour application was : "

if (creditScore > 680 && cashOnHand >= 4000) {  // checks credit score above 680 and C.O.H above 9999
    console.log(`${result}Approved`);
} else if (cashOnHand >= 10000) {               // no good credit, check if at least $10,000
    console.log(`${result}Approved`);
} else {                                        // no credit & no down = no loan
    console.log(`${result}Not Approved`);
}
