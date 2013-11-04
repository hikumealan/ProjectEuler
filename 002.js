var instructions = 'By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.';
var MAX_VALUE = Number.MAX_VALUE; // a value of approximately 1.79E+308
var MAX = 4000000;
console.log(instructions);

console.log('//********************************************************');
console.log('//	Solution');
console.log('//********************************************************');
var start = new Date().getTime();
console.log('start time = ' + start.toString());
var sum = 0;
var a = 0;
var b = 1;
while(b < MAX){
	var c = a + b;
	a = b;
	b = c;
	if(b % 2 == 0 && b < MAX){
		if(MAX_VALUE >= (sum + b)){
			sum += b;
		}
		else{
			// TODO: Handle Int (too large)
		}
	}
}
var end = new Date().getTime();
console.log('end time = ' + end.toString());
var time = end - start;
console.log('Sum = ' + sum.toString());
console.log('Execution Time (milliseconds) = ' + time.toString());