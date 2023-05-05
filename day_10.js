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
        id: 'AZ',
        name: 'Azerbaijan',
        continent: 'Asia',
        currencyId: 'AZN',
        phoneCode: '994',
        flag: '🇦🇿'
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
// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)