'use strict'

function main(int) {
	for(let x=1; int >0; x++){
		int -=7;
		if(int<=0){
			console.log(x);
			break;
		}
		int +=2;
		if(int<=0){
			console.log(x);
			break;
		}
	}


}

main(42);
// main(128);