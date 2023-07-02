let a = 0;
const bnumbers = [5, 18, 29, 54, 31];
bnumbers.forEach(c => console.log(c))
console.log(a)

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Explain the difference between forEach, map, filter, and reduce.

// Define a callback function before you use it in forEach, map, filter or reduce.

// Use forEach to console.log each country in the countries array.
countries.forEach(n => console.log(n))
// Use forEach to console.log each name in the names array.
names.forEach(n => console.log(n))
// Use forEach to console.log each number in the numbers array.
numbers.forEach(n => console.log(n))
// Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUpper = countries.map(n => n.toLocaleUpperCase())
console.log(countriesUpper)
// Use map to create an array of countries length from countries array.
const countriesLength = countries.map(n => n.length)
console.log(countriesLength)
// Use map to create a new array by changing each number to square in the numbers array
const numberSqr = numbers.map(n => n ** 2)
console.log(numberSqr)
// Use map to change to each name to uppercase in the names array
const namesUpper = names.map(n => n.toLocaleUpperCase())
console.log(namesUpper)
// Use map to map the products array to its corresponding prices.
const productMatch = products.map(n => n.product + n.price)
console.log(productMatch)
// Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(n => n.includes("land"))
console.log(countriesWithLand)
// Use filter to filter out countries containing six letters and more in the country array.
const countriesLetters = countries.filter(n => n.length > 6)
console.log(countriesLetters)
// Use filter to filter out only prices with values.
const productPrice = products.filter(n => n.price > 0)
console.log(productPrice)
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    let stringList = []
    stringList = arr.filter(n => typeof n === "string")
    console.log(stringList)
}
getStringLists(['ASABENEH', 'MATHIAS', 1, 4, 9, 16,])
// Use reduce to sum all the numbers in the numbers array.
const numbersSum = numbers.reduce((acc, cur) =>
    acc + cur)
console.log(numbersSum)


// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const countriesPhrase = countries.reduce((acc, crr, index) => {
    if (index === countries.length - 1) {
        return `${acc} and ${crr} are north Eroupean countries`
    }
    else {
        return `${acc}, ${crr}`
    }
}, 'Estonia'
)
console.log(countriesPhrase)
// Explain the difference between some and every


// Use some to check if some names' length greater than seven in names array
const namesLength = names.some(n => n.length > 7)
console.log(namesLength)
// Use every to check if all the countries contain the word land
const countriesCheck = countries.every(n => n.includes("land"))
console.log(countriesCheck)

// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array
const countriesFind = countries.find(n => n.length === 6)
console.log(countriesFind)
// Use findIndex to find the position of the first country containing only six letters in the countries array
const countriesFindIndex = countries.findIndex(n => n.length === 6)
console.log(countriesFindIndex)
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const countriesFindIndexPosition = countries.findIndex(n => n === 'Russia')
console.log(countriesFindIndexPosition)


// Exercises: Level 2
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
// ]
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const productPriceTotal = products
    .filter(item => item.price)
    .map(item => item.price)
    .reduce((acc, curr) => acc + curr, 0);
console.log(productPriceTotal)
// Find the sum of price of products using only reduce reduce(callback))
const productTotalReduce = products.reduce((acc, crr) => {
    if (crr.price) {
        return acc + crr.price
    }
    else {
        return acc
    }
}, 0)
console.log(productTotalReduce)
// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const countriesadded = [
    {
        id: 'AF',
        name: 'Afghanistan',
        continent: 'Asia',
        currencyId: 'AFN',
        phoneCode: '93',
        flag: '🇦🇫'
    },
    {
        id: 'AX',
        name: 'Åland Islands',
        continent: 'Europe',
        currencyId: 'EUR',
        phoneCode: '35818',
        flag: '🇦🇽'
    },
    {
        id: 'AL',
        name: 'Albania',
        continent: 'Europe',
        currencyId: 'ALL',
        phoneCode: '355',
        flag: '🇦🇱'
    },
    {
        id: 'DZ',
        name: 'Algeria',
        continent: 'Africa',
        currencyId: 'DZD',
        phoneCode: '213',
        flag: '🇩🇿'
    },
    {
        id: 'AS',
        name: 'American Samoa',
        continent: 'Australia',
        currencyId: 'USD',
        phoneCode: '1684',
        flag: '🇦🇸'
    },
    {
        id: 'AD',
        name: 'Andorra',
        continent: 'Europe',
        currencyId: 'EUR',
        phoneCode: '376',
        flag: '🇦🇩'
    },
    {
        id: 'AO',
        name: 'Angola',
        continent: 'Africa',
        currencyId: 'AOA',
        phoneCode: '244',
        flag: '🇦🇴'
    },
    {
        id: 'AI',
        name: 'Anguilla',
        continent: 'North America',
        currencyId: 'XCD',
        phoneCode: '1264',
        flag: '🇦🇮'
    },
    {
        id: 'AQ',
        name: 'Antarctica',
        continent: 'Antarctica',
        currencyId: '-/-',
        phoneCode: '672',
        flag: '🇦🇶'
    },
    {
        id: 'AG',
        name: 'Antigua And Barbuda',
        continent: 'North America',
        currencyId: 'XCD',
        phoneCode: '1268',
        flag: '🇦🇬'
    },
    {
        id: 'AR',
        name: 'Argentina',
        continent: 'South America',
        currencyId: 'ARS',
        phoneCode: '54',
        flag: '🇦🇷'
    },
    {
        id: 'AM',
        name: 'Armenia',
        continent: 'Asia',
        currencyId: 'AMD',
        phoneCode: '374',
        flag: '🇦🇲'
    },
    {
        id: 'AW',
        name: 'Aruba',
        continent: 'North America',
        currencyId: 'ANG',
        phoneCode: '297',
        flag: '🇦🇼'
    },
    {
        id: 'AC',
        name: 'Ascension Island',
        continent: 'Africa',
        currencyId: 'SHP',
        phoneCode: '247',
        flag: '🇦🇨'
    },
    {
        id: 'AU',
        name: 'Australia',
        continent: 'Australia',
        currencyId: 'AUD',
        phoneCode: '61',
        flag: '🇦🇺'
    },
    {
        id: 'AT',
        name: 'Austria',
        continent: 'Europe',
        currencyId: 'EUR',
        phoneCode: '43',
        flag: '🇦🇹'
    },

    {
        id: 'BS',
        name: 'Bahamas',
        continent: 'North America',
        currencyId: 'BSD',
        phoneCode: '1242',
        flag: '🇧🇸'
    },
    {
        id: 'BH',
        name: 'Bahrain',
        continent: 'Asia',
        currencyId: 'BHD',
        phoneCode: '973',
        flag: '🇧🇭'
    },
    {
        id: 'BD',
        name: 'Bangladesh',
        continent: 'Asia',
        currencyId: 'BDT',
        phoneCode: '880',
        flag: '🇧🇩'
    }
]
function categorizeCountries(arr, pattern) {


    const tempLand = arr.filter(n => n.name.includes(pattern)).map(n => n.name)

    console.log(tempLand)
}
categorizeCountries(countriesadded, 'Aus')






function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(

                "FizzBuzz")
        }
        else if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz")
        }
        else if (i % 3 !== 0 && i % 5 === 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }

    }

}
fizzBuzz(15)


const arr = [{
    id: 1,
    state: "Recived"
},
{
    id: 2,
    state: "Recived"
},
{
    id: 3,
    state: "Recived"
}

]

function processOrderList(orderList, orderId, state) {
    // Write your code here
    for (let i = 0; i < orderList.length; i++) {
        if (orderList[i].id === orderId && state === "Processing") {

            orderList[i].state = state;
            console.log(orderList)
        }
        else if (orderList[i].id === orderId && state === "Delivered") {
            orderList.splice(i, 1)
            console.log(orderList)
        }




    }
}
processOrderList(arr, 2, "Delivered")

//Create a program to print the result as pass if the marks obtained is greater than or equal to 40 using ternary operator.

var resultByMark = function (mark) {
    return (mark >= 40) ? console.log("You Have Passed the test") : console.log("Sorry better luck next time");

}
resultByMark(15);
resultByMark(40.1);
//Write a program to find the HCF or GCD of two integers

//example:-16, 8
// commom factor 2,4,8.so 8 is the highest common factor

// function highestCommonFac(x, y) {
//     let HCF = ""
//     for (let i = 1; i <= x && i <= y; i++) {                      // we use one because if we use 0 then in muliplyication and division it will result 0 
//         if (x % i == 0 && y % i == 0) {

//             HCF = i
//         }

//     }
//     console.log(HCF)                                                       // i <=x && i <= y , because comman factor is will be inside the both valuse it will not be beyond that for example if we just keep one vale that is  i<=x and x value is 8it will diaply upto 8 alone but we need to find for both values so we use are using both the range   
// }

// highestCommonFac(16, 8);

// var newYear2022 = (function (y) { return y * y; }(2022));
// newYear2022(2)

function plusMinus(arr) {
    // Write your code here
    let sumPositve = 0;
    let sumNegative = 0;
    let sumZero = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            sumPositve++
        }
        if (arr[i] < 0) {
            sumNegative++
        }
        if (arr[i] === 0) {
            sumZero++
        }



    }
    const ratioPostive = sumPositve / arr.length
    const ratioNegative = sumNegative / arr.length
    const ratioZero = sumZero / arr.length
    console.log(ratioPostive.toFixed(6))
    console.log(ratioNegative.toFixed(6))
    console.log(ratioZero.toFixed(6))
}
plusMinus([-4, 3, -9, 0, 4, 1])


function getSecondLargest(nums) {
    // Complete the function
    nums = nums.sort(function (a, b) { return b - a });
    console.log(nums)
    let maxNum = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                maxNum = (nums[j + 1])
                break
            }
            else {
                maxNum = (nums[i])
                break
            }
        }
    }
    console.log(maxNum)


}
getSecondLargest([2, 2, 2, 1, 1, 1, 0])
