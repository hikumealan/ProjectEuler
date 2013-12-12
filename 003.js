var instructions = 'What is the largest prime factor of the number 600851475143';
var MAX_VALUE = Number.MAX_VALUE; // a value of approximately 1.79E+308
var MAX = 600851475143;
console.log(instructions);
// CHECK OUT http://www.coderenaissance.com/2011/06/finding-prime-factors-in-javascript.html
console.log('//********************************************************');
console.log('//	Solution');
console.log('//********************************************************');
var start = new Date().getTime();
console.log('start time = ' + start.toString());
var lpf = 0;
for( var i = 0; i < MAX; i++){
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