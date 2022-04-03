// passing by reference vs by value
const num = 12;
// test
function testNum(a) {
	a = 30;
	console.log("inside function: " + a);
}

testNum(num);
console.log(num);

const arr = [1, 2];

console.log(arr);

function testArr(b) {
	b[0] = 3;
	console.log(b);
}

testArr(arr);
console.log(arr);
// everything including primitives are pass by value.
// only objects, including arrays, are pass by reference.

const person = {
	name: "Rickey",
};

console.log(person);

// let person = {
// 	name: "Jammie",
// };
// RESULTS IN SyntaxError: Identifier 'person' has already been declared

person.name = "Jammie";
console.log(person);
