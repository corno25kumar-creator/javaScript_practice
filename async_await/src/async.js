import './part3.js'
// function data () {
//     setTimeout(()=>{
//     console.log("i run after 3 sec")
//     return 10
//     }, 3000)
// }



// console.log(`before result`)
// const result = data()

// console.log(`after result in var`)
// console.log(`result of data () is :- ${result}`)//----> undefined hai 



// // data () call hua 
// // than setTimeout call hua 
// // than use web api ko de diya gaya 
// // and data() ka execution ho gaya

// // ab agar hum data ko call kare or uski value use kare tho undefined ho gaya 

// // return sirf us function se value deta hai jisme wo likha hai.

// // Yaha return 10 callback ke andar hai, na ki Data() ke andar.

// /////////////////////////////////////// handle /////////////////////////////////////////////

// // ✅ Solution 1 — Callback Pattern

// function asyn (cb) {
//     setTimeout(()=> {
//         cb(10)
//     }, 5000)
// }

// asyn((cbData) => {
//     console.log(`cb data is return :- ${cbData}`)
// })


// // ✅ Solution 2 — Promise (Modern Way)

// function Data2 () {
//     return new Promise ((resovle, reject)=> {
//         setTimeout(()=> {
//             resovle(`i am resolve data2`)
//         }, 6000)
//     })
// }

// const get = Data2()

// get.then((data2)=> console.log(`data is recived which is :- ${data2}`))

// //✅ Solution 3 — Async/Await (Cleanest Way)

// function personName(lastName) {
//     return new Promise ((res, rej) => {
//         try {

//             if(lastName){
//                setTimeout(()=> {
//                     res(`hello chandan kumar ${lastName}`)
//                }, 10000)
//             }
//         } catch (error) {
//             console.log(`enter your last name  ${error}`)
//         }
//     })
// }

// async function reciveData() {
//   let getName = await personName('jha')
//   console.log(getName)
// }


// reciveData()

/// empty normal function awaly return undefined

function nameL () {}
const data_Of_Nmormal_Function = nameL()
console.log(data_Of_Nmormal_Function)

// async function awlays return promise
//async function === always returns Promise
//async function test() {} ----> Becomes: ------> Promise.resolve(undefined)

async function async() { return 10}
const data_Of_Async_Function = async()
console.log(data_Of_Async_Function)


// Jab JS engine async keyword dekhta hai: Wo function ko special internal wrapper me convert kar deta hai
// Wo automatically us function ka return value Promise me convert karta hai

async function num () {
  //return 7
  return Promise.resolve(7)
}

console.log(num())
// Humne Promise.resolve nahi likha.
// Phir ye Promise kaise ban gaya? ----------------> Promise { 7 }


async function test() {
  return 10;
}

console.log("Start");

test().then(value => console.log(value));

console.log("End");


// Lekin:

// Async function ne Promise banaya

// Promise microtask me gaya

// Sync code pehle finish hua

// Fir microtask run hua

// Yahi proof hai ki wrapping ho rahi hai.