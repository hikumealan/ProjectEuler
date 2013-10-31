var instructions = 'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. \nFind the sum of all the multiples of 3 or 5 below 1000.';
var MAX = 1000000000;
console.log(instructions);

console.log('//********************************************************');
console.log('//	Solution 1');
console.log('//********************************************************');
var start = new Date().getTime();
console.log('start time = ' + start.toString());
var sum = 0;
for(var i = 0; i < MAX; i++){
	if(i % 3 == 0 || i % 5 == 0){
		sum += i;
	}
}
var end = new Date().getTime();
console.log('end time = ' + end.toString());
var time = end - start;
console.log('Sum = ' + sum.toString());
console.log('Execution Time (milliseconds) = ' + time.toString());

console.log('//********************************************************');
console.log('//	Solution 2');
console.log('//********************************************************');
var start = new Date().getTime();
console.log('start time = ' + start.toString());
var sum = 0;
var multiples = [3, 5];
var leastCommonMultiple = multiples.reduce(function(a, b){
	return a * b;
});
for(var i in multiples){
	var n = multiples[i];
	while(n < MAX){
		if(n < leastCommonMultiple || n % leastCommonMultiple != 0 || i == (multiples.length - 1)){
			sum += n;
		}
		n += multiples[i];
	}
}
var end = new Date().getTime();
console.log('end time = ' + end.toString());
var time = end - start;
console.log('Sum = ' + sum.toString());
console.log('Execution Time (milliseconds) = ' + time.toString());

//********************************************************
// Findings with 1000
// -------------------------------------------------------
// Solution 1 : 0.05s user 0.01s system 99% cpu 0.061 total
// Solution 2 : 0.05s user 0.01s system 99% cpu 0.060 total
//
// Findings with 10000
// -------------------------------------------------------
// Solution 1 : 0.04s user 0.01s system 99% cpu 0.058 total
// Solution 2 : 0.05s user 0.01s system 99% cpu 0.060 total
//
// Findings with 100000
// -------------------------------------------------------
// Solution 1 : 0.05s user 0.01s system 97% cpu 0.060 total
// Solution 2 : 0.05s user 0.01s system 98% cpu 0.061 total
//
// Findings with 1000000000
// -------------------------------------------------------
// Solution 1 : 15.38s user 0.14s system 100% cpu 15.416 total
// Solution 2 : 18.46s user 0.17s system 100% cpu 18.460 total
//********************************************************