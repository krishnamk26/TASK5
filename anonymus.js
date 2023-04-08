// //1.Print odd numbers in an array

let arrayNumber1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i=0;i<arrayNumber1.length;i++){
    if (i % 2 != 0){
      console.log("odd number: " + i)  
    }
};

//2.Convert all the strings to title caps in a string array

let strArray = ['krishna', 'udesh', 'deepan', 'karthi', 'prabhu'];

function titleCase(strArray) {

    for(let i = 0; i< strArray.length; i++){

        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
    }
    return strArray;
}

console.log(titleCase(strArray));

//3.Sum of all numbers in an array

let arrayNumber2 = [1, 2, 3, 4, 5, 6];
let sum = 0;
for(let i = 0; i < arrayNumber2.length; i++){
    sum = sum + arrayNumber2[i];
}
console.log("sum of all number: " + sum);


//4.Return all the prime numbers in an array

var arr = [1, 2, 3, 5, 7, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i]% 2!== 0) {
 console.log("Prime Number : " + arr[i]);
 }}
})();

//5.Return all the palindromes in an array
  
let arrayNumber3 = [1, 2, 3, 4, 5, 6, 11, 12, 13,14,15,16,17,18,19,20,21,22];

    let resultPallindromeArray = (function (arrayNumber3) {
        return (arrayNumber3.filter((item) => {
            let temp = item + ""
            if ((temp.split('').reverse().join('')) === item + "")
                return true
            return false
        }))
    })(arrayNumber3);
    console.log("Pallindrome numbers in an array: " + resultPallindromeArray)

//6.Return median of two sorted arrays of same size

let arr1 = [1, 2, 6, 7, 8]
let arr2 = [4, 5, 3, 9]
let resultMedian = function (arr1, arr2) {
    let lenArr1 = arr1.length
    let lenArr2 = arr2.length
    if (lenArr1 % 2 === 0) {
        console.log("Median of array 1: " + arr1[lenArr1 / 2])
    } else {
        console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2])
    }
    if (lenArr2 % 2 === 0) {
        console.log("Median of array 2: " + arr2[lenArr2 / 2])
    } else {
        console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])
    }
    return
}(arr1, arr2)

//7.Remove duplicates from an array
let chars = [22, 22, 11, 10, 11, 56, 10]

let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);


let arrforrotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotation, 3)

console.log("Array roatated k times: " + resultArrayShifted)