// import { message } from "./callback";

// console.log(message(show))

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

const stdn = createStudent1('x',10)

console.log(stdn)

// Object.create() take a arg and if we give then it point hidden prop to agr