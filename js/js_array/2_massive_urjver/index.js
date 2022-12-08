let arr1 = [3, 45, 23, 78, 34]
let arr2 = [4, 2, 34, 4, 12, 1]
let arr3 = []
let length = arr1.length;

if (arr1.length < arr2.length){
    length = arr2.length 
}
console.log(length);
for (let i = 0; i < length; i++){
    arr3[i] = arr1[i]*arr2[i]
}
console.log(arr3);