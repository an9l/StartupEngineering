#!/usr/bin/env node
var fs = require('fs');
var outfile = "primeNumber.txt";
var array = new Array(100);
var j = 2,
	i = 1;
var num = 2;
var count = 0;
var temp = null;

while(true){
	if(isPrime(num)){
		array[count] = num;

		if(count < 99)
			temp = array[count] + ",";
		else
			temp = array[count];

		fs.appendFileSync(outfile, temp);
		count++;
	};
	num++;

	if(count == 100){
		break;
	};
};


function isPrime(num){
	for (var i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	};
	return true;	
};
