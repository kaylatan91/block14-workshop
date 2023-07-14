//ONLY ODDS
//if array input value is odd, print odd values
// [2, 4, 6, 8, 11, 20, 15, 22]
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//[70, 42, 55, 81, 21, 91, 34]
//[2, 4, 6, 8, 10, 11, 12] 
// Use i++
// i< numbers.length

let numbers = [2, 4, 6, 8, 10, 11, 12]
let oddNum = []

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNum.push(numbers[i])
    }
}

console.log(oddNum)

//Vowels Vs Consonants
//Create loop to count vowels and constant separately 

// const string = "hello"
// let consonants = []
// let vowels = []
// let string2 = []

for (let i =0; i < string.length; i++) {
    let char = string[i]
    string2.push(char)
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowels.push(char)
    } else {
        consonants.push(char)
    }
}
console.log(string, "has", consonants.length, "consonants", "and", vowels.length, "vowels")

//REVERSE ARRAY
//Create const array for inputs below:
//[1, 2, 3]
//[1, 3, 5, 7, 9, 11]
//[20, 50, 30, 60, 200]
//[1, -1, 2, -3, 5, -8, 13]
//Create another const array for reverse inputs
//Will use push to add numbers back into const array for reverse

const num = [1, 2, 3]
const reverseNum = []

for(let i = num.length - 1; i >= 0; i--) {
    reverseNum.push(i)
}
console.log(reverseNum)

// //FIZZBUZZ
// //Create variable 1
// //Use i++ 
// //condition i >= 45

for(let i = 1; i <= 45; i++) {
    if(i % 3 ===0 && i % 5 ===0) {
        console.log("FizzBuzz")
    } else if(i % 3 ===0) {
        console.log("Fizz")
    } else if(i % 5 ===0) {
        console.log("Buzz")
    } else console.log (i)
}