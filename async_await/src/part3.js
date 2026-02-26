async function test() {
  throw new Error("Failed");
}

console.log("Start");

//test().catch(err => console.log(err.message));

// ⚠ Important:

// Error immediately print nahi hua.

// Kyun?

// Async function ne Promise return kiya

// Promise rejection microtask me gaya

// Sync code pehle finish hua

// Fir microtask execute hua


function task () {
    return new Promise ((res, rej)=> {
        setTimeout(()=> {
            res('hello')
        }, 1000)
    })
}

async function hello() {
    console.log(`before the await key word`)
    const ele = await task()
    console.log(`after 1 sec `)
    console.log(`this is ele value or resolve value ${ele}`)
    console.log(`after the await key word task -  1`)
    console.log(`after the await key word  task - 2`)
}
hello()

console.log(`outside the async func`)


async function test2() {
  const value = await Promise.resolve(10);
  console.log(value);
}

test2()