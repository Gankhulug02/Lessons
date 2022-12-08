let array = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(array);

console.log(" ");
console.log("sort")
array.sort();
console.log (array);


console.log("at")
array = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log (array[0]);

console.log(" ");
console.log("INCLUDES")
array = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log (array.includes("Google"));


console.log(" ");
console.log("INDEXOF")
array = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log (array.indexOf("IBM"));


console.log(" ");
console.log("Join")
array = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log (array.join("-_-"));


console.log(" ");
console.log("reverse")
array = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log (array.reverse());


console.log(" ");
console.log("Splice")
array = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
array.splice(2,1, 'ONDO')
console.log (array);


console.log(" ");
console.log("split")
array = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
const a = array.split(' ');
console.log (a);