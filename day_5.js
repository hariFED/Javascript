// Declare an empty array;
let arr = [];


// Declare an array with more than 5 number of elements
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    // 'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
// Find the length of your array
console.log(countries.length)
// Get the first item, the middle item and the last item of the array
console.log(countries[0], countries[5], countries[10])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[3], itCompanies[6])
// Print out each company
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6])
// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(), itCompanies[2].toUpperCase(), itCompanies[3].toUpperCase(), itCompanies[4].toUpperCase(), itCompanies[5].toUpperCase(), itCompanies[6].toUpperCase())
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", "))
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("Face")) {
    console.log(`Facebook is in the list`)
}
else {
    console.log(`The company is not listed`)
}
// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
console.log(itCompanies.sort())
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, -3))
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
console.log(itCompanies.shift())
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
console.log(itCompanies.pop())
// Remove all IT companies
console.log(itCompanies.splice(0, 0))
//  countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if (countries.includes("Ethiopia")) {
    console.log("ETHIOPIA")
}
else {
    countries.push("Ethiopia")
    console.log(countries)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)



// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
let a = ages.join("+")


console.log(a)
