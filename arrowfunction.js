//1. Print odd numbers in an array

let numberArray = [1, 2, 3, 4, 5, 6];

console.log("Odd Numbers : " + numberArray.filter((item) => {

    return item % 2 !== 0

}))

//2.Convert all the strings to title caps in a string array

let stringArray = ["krishna", "is", "a", "smart", "boy"];

stringArray = stringArray.map((item) => {

    return item.toUpperCase()
})
console.log(stringArray);

//3.Sum of all numbers in an array

let numberArray1 = [1, 2, 3, 4, 5, 6];
let sum = numberArray1.reduce((currentTotal, item) => {
    return currentTotal + item
}, 0)
console.log(sum)

//4.Return all the prime numbers in an array

let numberarr = [1, 2, 3, 4, 5, 6];
console.log("Prime Number" +
    numberarr.filter((item) => {
        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;

    }))

//5.Return all the palindromes in an array 

let arrayPallindrome = [1, 2, 3, 4, 5, 6, 11, 12, 13,14,15,16,17,18,19,20,21,22];

console.log("Pallindrome Numbers" +
    arrayPallindrome.filter((item) => {
        let temp = item + "";
        if (temp.split('').reverse().join('') === item + "")
            return true

        return false
    }))
