const fullName = (firstName, lastName) => { let FullName = firstName + lastName; return FullName }
console.log(fullName("Hari", "Haran"))

const addNum = (num1, num2) => {
    let sum = num1 + num2;
    return sum
}
console.log(addNum(2, 3))

const areaOfRectangle = (len, ber) => {
    let area = len * ber;
    return area
}
console.log(areaOfRectangle(5, 6))
const permOfRectangle = (len, ber) => {
    let area = 2 * (len * ber);
    return area
}
console.log(permOfRectangle(2, 6))


const areaOfCircle = (r) => {
    let area = Math.PI * r * r;
    return area;
}
console.log(areaOfCircle(4))


const speedOfObject = (tdistance, timetaken) => {


    let speed = tdistance / timetaken;
    return speed;
}
console.log(speedOfObject(100, 20))

const bmiCalculation = (weight, height) => {
    let bmi = weight / (height * height);
    if (bmi < 18.5 && bmi > 0) {
        return "Underweight"
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normalweight"
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight"
    }
    else {
        return "obese"
    }
}

console.log(bmiCalculation(70, 1.72))




const findMax = (num1, num2, num3) => {
    let MaxNum = num1;

    if (num2 > MaxNum) {
        MaxNum = num2;
    }

    if (num3 > MaxNum) {
        MaxNum = num3;
    }

    return MaxNum
}

console.log(findMax(200, -200, -1))

// Linear equation is calculated as follows
// : ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

const solveLinEquation = (a, b, c, x) => {
    if (a === 0 || b === 0) {
        return "A and B cannot be Zeors in a linear equation"
    }

    let y = (-c - (a * x)) / b
    return y
}
console.log(solveLinEquation(1, 2, 3, 4))


// Quadratic equation is calculated as follows:
//  ax2 + bx + c = 0.
// ax2+bx=-c; x(ax2+b)=-c
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.lenght; i++) {
    total += myArr[i]
}
console.log(total)


