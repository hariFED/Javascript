
// Exersices - 1
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// Print the string on the browser console using console.log()
let a = " 30 Days Of JavaScript "

console.log(a)

// Print the length of the string on the browser console using console.log()
console.log(a.length)
// Change all the string characters to capital letters using toUpperCase() method
console.log(a.toUpperCase())
// Change all the string characters to lowercase letters using toLowerCase() method
console.log(a.toLowerCase())
// Cut (slice) out the first word of the string using substr() or substring() method
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScrip.
console.log(a.substr(2, 21))
// Check if the string contains a word Script using includes() method
console.log(a.includes("Script"))
// Split the string into an array using split() method
console.log(a.split())
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(a.split(" "))
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let b = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(b.split(","))
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(a.replace("JavaScript", "Python"))
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(a.charAt(15))
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(a.indexOf("J"))
console.log(a.charCodeAt(11))
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScriptḍ
console.log(a.indexOf("a"))
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(a.lastIndexOf("a"))
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let c = 'You cannot end a sentence with because because because is a conjunction';
console.log(c.indexOf("because"))
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(c.lastIndexOf("because"))
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(c.search("because"))
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(a.trim(" "))
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(a.startsWith(" "))
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(a.endsWith(" "))
// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(a.match("a"))
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(a.repeat(2))




// Exersices-2
// Using console.log() print out the following statement:
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another."
)
console.log("Love is not patronizing and charity isn't about pity, it is about love. \nCharity and love are the same  with charity you give love, so don't just give money but reach out your hand instead."
)


// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let d = "10"
let e = 10
console.log(d == e)

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

function exactEqual() {
    let f = parseInt('9.8');
    e = Math.round(f)
    if (f == e) {
        return console.log("Correct assignment")
    }
    else {
        console.log("False")
    }
}

exactEqual();

// Check if 'on' is found in both python and jargon
let g = "python"
let h = "jargon"
console.log(g.search("on"), h.search("on"))

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 100))

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(c.indexOf("because"), c.lastIndexOf("because"))
console.log(c.substring(31, 54))

// Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let i = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let iPattern = /love/gi;
console.log((i.match(iPattern)).length);
// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let cPattern = /because/gi;
console.log((c.match(cPattern)).length)
//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace(/[!@#$%^&*()_:;?]/g, ""))


//Calculate the total annual income of the person by extracting the numbers from the following text. 
let j = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let k = j.match(/\d+/g);
console.log(k)
let l = parseInt(k[0]) + parseInt(k[1]) + parseInt(k[2]);
console.log(l);



