for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let i = 0;
while (i <= 10) {
    console.log(i)
    i++
}

do {
    console.log(i)
    i++
}
while (i <= 10)

let pattern = ''
for (let j = 0; j <= 10; j++) {
    pattern += "#"
    console.log(pattern)
}

for (let k = 0; k <= 10; k++) {
    console.log(`${k}   ${k ** 2}  ${k ** 3}`)
}
/////////////////////////////////////////////////////////////////////


let evenArray = []

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenArray.push(i)

    }
}
console.log(evenArray, evenArray.length)
let newArray = []

for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {

        newArray.push(i)

    }
}
console.log(newArray, newArray.length)


// dOUBT
newPrimeArray = []
for (let i = 2; i <= 100; i++) {
    let count = false
    for (let j = 2; j <= i; j++) {
        if (i % j === 0 && j !== i) {
            count = true
        }
    }
    if (count === false) {
        newPrimeArray.push(i)
    }

}
console.log(newPrimeArray)
//
let sumNum = 0;

for (let i = 0; i <= 100; i++) {

    sumNum += i

}
console.log(sumNum)

////////////////////////////////////////////////////
let evenSum = 0;
let oddSum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum += i

    }
    else if (i % 2 != 0) {
        oddSum += i


    }

}
console.log(evenSum)
console.log(oddSum)

////////////////////
let fiveNumber = []
for (let i = 1; i <= 5; i++) {
    let randomNumber = parseInt(Math.random() * 10)
    if (!fiveNumber.includes(randomNumber)) {
        fiveNumber.push(randomNumber)
    }

}
console.log(fiveNumber)


const charatersRandom = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function sixCharactersRandom() {
    let randomChar = [];
    for (let i = 1; i <= Math.random() * 100; i++) {
        randomChar.push(charatersRandom.charAt(parseInt(Math.random() * charatersRandom.length)))
    }
    console.log(randomChar)
}
sixCharactersRandom()


function rgbColor() {
    let rgbNumber = 'rgb' + '(' + parseInt(Math.random() * 240) + "," + parseInt(Math.random() * 240) + "," + parseInt(Math.random() * 240) + ")"
    console.log(rgbNumber)
}
rgbColor()




const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
const arrayNew = []

function countriesUpperCase() {

    for (let i = 0; i <= countries.length - 1; i++) {
        arrayNew.push(countries[i].length)
    }
    console.log(arrayNew)
}
countriesUpperCase()




let innerArray = [];
function arrayOfArray() {
    for (let i = 0; i <= countries.length - 1; i++) {
        let multipleArray = [countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length]
        innerArray.push(multipleArray)
    }
    console.log(innerArray)
}

arrayOfArray()


function countriesWithLand() {
    let newArrayLand = []
    for (let i = 0; i <= countries.length - 1; i++) {


        if (countries[i].includes('land')) {

            newArrayLand.push(countries[i])

        }
    }
    console.log(newArrayLand)
}
countriesWithLand()


function countriesWithai() {
    let newArrayLand = []
    for (let i = 0; i <= countries.length - 1; i++) {


        if (countries[i].endsWith('ia')) {

            newArrayLand.push(countries[i])

        }


    }
    console.log(newArrayLand)
}
countriesWithai()

function countriesWithBigChar() {
    let bigChar = ''
    for (let i = 0; i <= countries.length - 1; i++) {


        if (countries[i].length > bigChar.length) {
            bigChar = countries[i]
        }

    }
    console.log(bigChar)
}
countriesWithBigChar()

function countriesWithFiveChar() {
    let fiveChar = []
    for (let i = 0; i <= countries.length - 1; i++) {


        if (countries[i].length === 5) {
            fiveChar.push(countries[i]);
        }

    }
    console.log(fiveChar)
}
countriesWithFiveChar()

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
function techWithBigChar() {
    let bigChar = ''
    for (let i = 0; i <= webTechs.length - 1; i++) {


        if (webTechs[i].length > bigChar.length) {
            bigChar = webTechs[i]
        }

    }
    console.log(bigChar)
}
techWithBigChar()


const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acroynum = ""
for (let i = 0; i <= mernStack.length - 1; i++) {
    acroynum += mernStack[i][0]
}
console.log(acroynum)

for (const techs of webTechs) {
    console.log(techs)
}

const fruits = ['banana', 'orange', 'mango', 'lemon']
const reverseFruits = []
for (let i = fruits.length - 1; i >= 0; i--) {
    reverseFruits.push((fruits[i]));


}
console.log(reverseFruits)
let upper = []
for (const arrfruit of reverseFruits) {
    upper.push(arrfruit.toUpperCase())
}


console.log(upper)





