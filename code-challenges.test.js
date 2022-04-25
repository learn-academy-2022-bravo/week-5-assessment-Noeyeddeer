// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    it("takes in a string and returns a coded message", () => {
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

//---Initial Jest Test---

// FAIL  ./code-challenges.test.js
// codedMessage
//   ✕ takes in a string and returns a coded message (1 ms)

// ● codedMessage › takes in a string and returns a coded message

//   ReferenceError: codedMessage is not defined

//     24 |     // Expected output: "3cc3ntr1c"
//     25 |     it("takes in a string and returns a coded message", () => {
//   > 26 |         expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//        |         ^
//     27 |         expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     28 |         expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
//     29 |     })

//     at Object.<anonymous> (code-challenges.test.js:26:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.142 s

// b) Create the function that makes the test pass.
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

//---Pseudo Coding---
//Create a function called codedMessage and give it a parameter of string
//Inside the function use the replace function on the string parameter in order to replace each specified letter with the specified number
//Use the syntax .replace(/A|a/g, 4) which gives uppercase or lowercase a anywhere in the string to be replaced by 4
//Chain replace functions together in order to replace all specified letters in the string
//Call the function and pass in arguments
const codedMessage = (string) => {
    return string.replace(/A|a/g, 4).replace(/E|e/g, 3).replace(/I|i/g, 1).replace(/O|o/g, 0)
}

codedMessage(secretCodeWord1)
codedMessage(secretCodeWord2)
codedMessage(secretCodeWord3)

//---Second Jest Test---

// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.132 s

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordsThatContain", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("takes in an array and a single letter, returns all words with that letter", () => {
        expect(wordsThatContain(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(wordsThatContain(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

//---Initial Jest Test---

// FAIL  ./code-challenges.test.js
// wordsThatContain
//   ✕ takes in an array and a single letter, returns all words with that letter (1 ms)

// ● wordsThatContain › takes in an array and a single letter, returns all words with that letter

//   ReferenceError: wordsThatContain is not defined

//     94 |     // Expected output: ["Cherry", "Blueberry", "Peach"]
//     95 |     it("takes in an array and a single letter, returns all words with that letter", () => {
//   > 96 |         expect(wordsThatContain(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
//        |         ^
//     97 |         expect(wordsThatContain(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     98 |     })
//     99 | })

//     at Object.<anonymous> (code-challenges.test.js:96:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.142 s

// b) Create the function that makes the test pass.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

//---Pseudo Coding---
//Create a function called wordsThatContain and give it the parameters of array and string
//Inside of the function return a filtered version of the array parameter
//The filtered array should evaluate each value and only return the values that contain (evaluated using the include function) the string parameter
//Inside of the filter function include two include functions, one using .toUpperCase and one using .toLowerCase, just to cover all the bases
//Call the function and pass in the arguments
const wordsThatContain = (array, string) => {
    return array.filter(value => value.includes(string.toUpperCase()) || value.includes(string.toLowerCase()))
}

wordsThatContain(arrayOfWords1, letterA)
wordsThatContain(arrayOfWords2, letterE)

// ---Second Jest Test---

// PASS  ./code-challenges.test.js
//   wordsThatContain
//     ✓ takes in an array and a single letter, returns all words with that letter (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.108 s, estimated 1 s

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    it("takes in an array of 5 numbers and determines whether array is a full house", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

//---Initial Jest Test---

// FAIL  ./code-challenges.test.js
// fullHouse
//   ✕ takes in an array of 5 numbers and determines whether array is a full house (1 ms)

// ● fullHouse › takes in an array of 5 numbers and determines whether array is a full house

//   ReferenceError: fullHouse is not defined

//     163 |     // Expected output: false
//     164 |     it("takes in an array of 5 numbers and determines whether array is a full house", () => {
//   > 165 |         expect(fullHouse(hand1)).toEqual(true)
//         |         ^
//     166 |         expect(fullHouse(hand1)).toEqual(false)
//     167 |         expect(fullHouse(hand1)).toEqual(false)
//     168 |     })

//     at Object.<anonymous> (code-challenges.test.js:165:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.147 s, estimated 1 s

// b) Create the function that makes the test pass.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

//---Pseudo Coding---
//Create a function called fullHouse and give it a parameter of array
//Inside the function, set variable sortArray equal to array.sort(), which simply groups all the like numbers together in the new array
//Set a variable called cards1 equal to the length of the filtered sortArray, where you filter for any values which are equal to sortArray[0], which should give you the number of values which are equal to the value at the first index
//Set a variable called cards2 equal to the length of the filtered sortArray, where you filter for any values which are equal to sortArray[sortArray.length-1], which should give you the number of values which are equal to the value at the last index
//Create a conditional which says that if cards1 equals 2 and cards2 equals 3 return true
//Else if cards1 equals 3 and cards2 equals 2 return true
//Else return false
//Call the function and pass in the arguments
const fullHouse = (array) => {
    let sortArray = array.sort()
    let cards1 = sortArray.filter(value => value === sortArray[0]).length
    let cards2 = sortArray.filter(value => value === sortArray[sortArray.length-1]).length
    if (cards1 == 2 && cards2 == 3){
        return true
    } else if (cards1 == 3 && cards2 == 2){
        return true
    } else 
        return false
}

fullHouse(hand1)
fullHouse(hand2)
fullHouse(hand3)

//---Second Jest Test---

// PASS  ./code-challenges.test.js
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether array is a full house (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.138 s, estimated 1 s