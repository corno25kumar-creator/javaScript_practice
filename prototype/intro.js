console.log(
    new String('chandan').length
)

// noty everything is an obj 
// ex :-

try {
    const value = null.length
    console.log(value)
    const value2 = undefined.length
    console.log(value2)
} catch (error) {
    console.log(`TypeError: Cannot read properties of null (reading 'length')`)
}

// FUNCTION IS ALSO A OBJECT

try {
    function test () {}
     test.myValue = "hello i am value inserted as obj key in function"
     console.log(test.myValue)
} catch (error) {
    console.log('error in fun obj')
}

// object method
console.log(`look on the prototype key in Object()`)
console.dir(Object)

// let test  and look on the [[prototype]]
console.log(`look on the [[prototype]]`)
const obj = {}
console.log(obj)

// lets check the the current obj instance  belong to
console.log(`Object.prototype.constructor === Object`)
const constructorVlaue = Object.prototype.constructor === Object
console.log(constructorVlaue)

//
console.log(Array.prototype)

//how to get the [[prototype]] 
// we can never acces this but we can look at it 

const obj1 = {}
console.log(`we can look at [[prototype]] by getter and setter fun __proto__`)
console.log(`console.log(obj1.__proto__) `)
console.log(obj1.__proto__) 


// function have a .prototype key 

function name1(params) {
    
}

console.log(name1.prototype)

// i have 10000 students and i want the data of those student 
// we will considered n = 2

let studName = 'chandan'
let studAge = 19

let studName1 = 'aman'
let studAge1 = 19

// but if we have 100000 student than we have to make 200000 var to store data
//now in onj 

const stud1 = {age : 10,}
const std2 = {age : 10,}

//add the func to every obj  to check that stid age is eligible of addmission

const stud11 = {
    age : 10,
    checkAge:() => {
        if (stud11.age<4) {
            return "not eligible"   
        }   
    }
}
const stud22 = {
    age : 16,
    checkAge:() => {
        if (stud22.age<4) {
            return "not eligible" 
        }
    }
}


// if i have 10000 student than u make 10000 obj and in each u give check age fun or if i add checkname than

function createStudent(name, age) {
    const obj = {}
    obj.name = name
    obj.age = age

    obj.checkAge = () => {
        if (stud22.age<4) {
            return "not eligible"  
        }
    }
    return obj
}

const stdn = createStudent('x',10)

// ok now this solve the probelem


// if i have 1000 stud the i haave to make 1000 fun so 
// is there any way remove the fun 
// create obj inside  func() is present and we bind to the obj

function createStudent1(name, age) {
    const obj = Object.create(checkAgestd)
    obj.name = name
    obj.age = age
    return obj  
}
const checkAgestd = {
        checkAge : () => {
       console.log('check age ')
    }
    }

const stdn1 = createStudent1('x',10)

console.log(stdn)

// Object.create() take a arg and if we give then it point hidden prop to agr

// but here i need to manullay link the obj so new way is 

function createStudent2(name, age) {
   this.name =  name
   this.age = age
}
createStudent2.prototype.checkAgestd2 = {
        checkAge : () => {
       console.log('check age ')
    }
    }

const stdn2 = new createStudent2('x',10)

console.log(stdn)

//

function person() {
    
}

person.prototype.test = () => {
    console.log('hey there')
}

const p = new person();
console.log(p)

