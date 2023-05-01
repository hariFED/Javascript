//Create an empty object called dog
let dog = {

}

// Print the the dog object on the console
console.log(dog)
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.fname = "Reder"
dog.legs = "4"
dog.color = "Blackish red"
dog.age = "3"
dog.bark = "woof woof"
console.log(dog)

// Get name, legs, color, age and bark value from the dog object
console.log(dog.fname, dog.legs)
// Set new properties the dog object: breed, getDogInfo

dog.breed = "Asian"
dog.getDogInfo = dog

console.log(dog)
console.log(dog.getDogInfo)


// Find the person who has many skills in the users object.

const users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: "asab@asab.com",
        skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: "daniel@daniel.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: "daniel@alex.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: "paul@paul.com",
        skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}


let maxSkills = 0;
let peopleWithMaxSkill = ''
let countOfSkills = ''
let usersLogIn = []
let userWithHighpoint = []
let mernDev = []
for (const user in users) {
    if (maxSkills < users[user].skills.length) {
        maxSkills = users[user].skills.length
        peopleWithMaxSkill = user
        countOfSkills = users[user].skills.length
    }
    if (users[user].isLoggedIn == true) {
        usersLogIn.push(user)

    }
    if (users[user].points >= 50) {
        userWithHighpoint.push(user)
    }
    if (users[user].skills.includes("MongoDB", "Express", "React", "Node")) {
        mernDev.push(user)
    }

}
console.log(peopleWithMaxSkill, countOfSkills)
console.log(usersLogIn, usersLogIn.length)
console.log(userWithHighpoint, userWithHighpoint.length)
console.log(mernDev, mernDev.length)

const userss = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
let tC = new Date;
let newUser = {}


const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let idNum = generateString(6)



function signUp(fname, lname, mail, pass) {

    const userExists = userss.some(user => user.email === mail);
    if (userExists) {
        console.log("User already exist")
    }
    else {
        const newUser = {
            _id: idNum,
            username: fname + lname,
            email: mail,
            password: pass,
            createdAt: tC.toLocaleString(),
            isLoggedIn: true,
        }
        userss.push(newUser)
        Object.freeze(userss)
        console.log(userss)

    }
}



signUp("Hari", "Haran", "martha@marha.com", "Test@123")



// The products array has three elements and each of them has six properties.
//  a. Create a function called rateProduct which rates the product


function rateProduct(_id, name, rateiings) {
    const product = products.find(product => product.name === name)
    if (product) {
        product.ratings.push({
            userId: _id,
            rate: rateiings
        })
    }
    console.log(products)
}
rateProduct('eefamr', 'TV', 5)


//  b. Create a function called averageRating which calculate the average rating of a product

function averageRatings(name) {
    let totalrate = 0;
    let productAvg = 0;
    const product = products.find(product => product.name === name)
    if (product) {
        for (let i = 0; i < product.ratings.length; i++) {

            totalrate += product.ratings[i].rate
        }
        productAvg = totalrate / product.ratings.length


    }
    console.log(totalrate)
    console.log(productAvg)


}
averageRatings('mobile phone')
