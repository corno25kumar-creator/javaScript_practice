// function show() {
//     console.log('inner function and run indside the main fun')
// }

//  function message(show) {
//     console.log(`i am outer function inside me show fun run`)
//     show()
// }

// message(show)


// setTimeout(()=>{
//      console.log(`i am outer function inside me show fun run`)
//     show()
// },2000)


// use case
// to perform async task
// to perform task after specific task
function showMessage() {
    console.log(`result is out`)
}

function giveExam(cb) {
    console.log(`exam is given`)
    cb()
}

giveExam(showMessage)

//cb is the one of the problem but there are other problem too
//inversion of control = passing the responsibility to some other task but that task fail to complete (no garantee that the cb u pass will execute 100 %)



function showMessage1() {
    console.log(`result is out`)
}

function giveExam2(cb) {
    console.log(`exam is given`)
    cb()
}

let called = false
setTimeout(()=>{
    if (called) {
        
    } else {
        showMessage1()
    }
}, 4000)

// problem it may be possible that give exam take 5 sec afte that it called showmessage ()

