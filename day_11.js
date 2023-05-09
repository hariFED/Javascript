function getSecondLargest(nums) {
    // Complete the function
    nums = nums.sort(function (a, b) { return b - a });
    let firstLargest = nums[0]
    let secondLargest = 0

    if (nums[0] > nums[1]) {
        secondLargest = nums[1]

    }
    else if (nums[0] === nums[1]) {

        for (let i = 2; i < nums.length;) {
            if (nums[i] < nums[0]) {

                secondLargest = nums[i]
                break
            }
            else {
                i++
            }
        }
    }

    console.log(secondLargest)
}

getSecondLargest([25, 35, 45, 25, 45, 15, 15, 1, 6, 100, 100, 120, 120, 120, 120, 120, 120])



function reverseString(s) {
    let reversedString = s.split("").reverse("").join("")
    let orginalString = reversedString.split("").reverse("").join("")
    try {
        if (orginalString === s) throw reverseString
    }
    catch (error) {
        console.log(error)
    }

}
reverseString("two")

function getCount(objects) {
    let countsun = 0

    for (let i = 0; i < objects.length; i++) {
        if (objects[i].x === objects[i].y) {
            countsun++
        }
    }


    console.log(countsun)

}
getCount([{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }])


// this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.

// Task

// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

// Add an area method to Rectangle's prototype.
// Create a Square class that satisfies the following:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area of a Square object.

// Rectangle class
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

// Add area method to Rectangle prototype
Rectangle.prototype.area = function () {
    return this.w * this.h;
}

// Square class
class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}

// Test the classes
let rect = new Rectangle(3, 4);
let square = new Square(3);

console.log(rect.area()); // Output: 12
console.log(square.area()); // Output: 9
