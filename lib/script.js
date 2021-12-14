// erase these lines once you've made sure everything's connected fine
console.log('script.js is connected to index.html correctly')

function checkPrime(num){
    // iterate through the input number
    for (let i= 2; i< num; i++){
        //create condition that if the number is divded evenly by i
        if (num % i === 0){
            //return a false if it isnt
            return false
        } 
        return num > 1
    }
}

console.log(checkPrime())

// write a function called printPrimes

const printPrimes = (n) => {
// Create an empty array that will hold the prime number
let primes = []
// Loop up to and including the number given as an argument
for(let i = 2; i < n ; i++){
    //check if i is prime
    if(checkPrime(i)){
        //if it is push into array
        primes.push(i)
    }
    //after the input is looped return the primes array
    return primes
// Check if i is prime
}
}
console.log(printPrimes(97))

//Write a function findHighestFrequency
const findHighestFrequency = (obj) => {
    // declare a varibale that will hold the higest frequency and set it to 0
    let highestFrequency = 0;
    // declare another variable as an empty object
    let keyValuePair = {}
    //iterate over the, in the object that was passed in as an argument
    for (let keyName in obj){
    //check whether the value of current key is greater than our highest frequency vairbale
        if(obj[keyName] > highestFrequency) {
            // if it is update highestfrequency to be the value of the current key
            highestFrequency = obj[keyName]
            // Update keyvaluepair to be the key and the value of the current key
            keyValuePair = { keyName: obj[keyName] }
        }
}
}
//return keyValuePair
return keyValuePair

const freqs = findHighestFrequency('the world is all that is the case')
console.log(findHighestFrequency(freqs))


// function add(){
// 	let arr = [];
// 	for(let i=0;i<=50;i++){
//         if((i%2!=0)&&(i/i==1)&&(i)){
//             arr.push(i)
//             arr.push(arr[2]);
//         }
//     }

// 	return arr;
// }
// console.log(add())