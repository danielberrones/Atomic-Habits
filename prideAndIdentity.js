// The more pride you have in a particular aspect of your identity, the more motivated you will be to maintain the habits associated with it. 


function returnPrideCoefficient() {
	let ranNum = Math.random();
	switch (ranNum) {
		case ranNum > .75:
			console.log("You have high pride.");
			break;
		case ranNum > .50;
			console.log("Your pride is okay.  Improve it.");
			break;
		case ranNum < .50;
			console.log("Get to work!");
	}
}

console.log(returnPridCoefficient()); 
