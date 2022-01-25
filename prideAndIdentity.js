function returnPrideCoefficient() {
	let ranNum = Math.random();
	switch (ranNum) {
		case ranNum > .75:
			console.log("You have high pride.");
			break;
		case ranNum > .50:
			console.log("Your pride is okay.  Improve it.");
			break;
		case ranNum < .50:
			console.log("Get to work!");
        default:
            console.log(`Try again.`);
	}
}

console.log(returnPrideCoefficient()); 
