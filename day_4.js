// // Get user input using prompt(“Enter your age:”). If user is 18 or older , 
// give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let userAge = prompt("Enter your age;")
let userAgenum = 18;

userAgenum >= 18 ? console.log('You are old enough to drive') : console.log(`You are left with ${18 - userAgenum} years to drive.`)

let userNum = prompt("Enter the number:")
let userNumber = parseInt(userNum);
userNumber % 2 === 0 ? console.log(`${userNumber} is a even number`) : console.log(`${userNumber} is a odd number`)
