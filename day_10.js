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
// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array
// Use findIndex to find the position of the first country containing only six letters in the countries array
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

