#!/usr/bin/env node
var fs = require('fs');
var outfile = "primeNumber.txt";
var array = new Array(100);
var num = 2;
var index = 0;
var temp = null;

while(true){
	if(isPrime(num)){
		array[index] = num;

		if(index < 99)
			temp = array[index] + ",";
		else
			temp = array[index];

		fs.appendFileSync(outfile, temp);
		index++;
	};
	num++;

	if(index == 100){
		break;
	};
};

// Returns boolean true if num is prime number
function isPrime(num){
	for (var i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	};
	return true;	
};
