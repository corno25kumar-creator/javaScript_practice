function data () {
    setTimeout(()=>{
    console.log("i run after 3 sec")
    return 10
    }, 3000)
}

data()
console.log(`before result`)
const result = data()
console.log(`after result in var`)
console.log(`result of data () is :- ${result}`)



data () call hua 
than setTimeout call hua 
than use web api ko de diya gaya 
and data() ka execution ho gaya

ab agar hum data ko call kare or uski value use kare tho undefined ho gaya 

return sirf us function se value deta hai jisme wo likha hai.

Yaha return 10 callback ke andar hai, na ki Data() ke andar.

- Execution order
- data() is called → schedules the timeout.
- console.log("before result") runs immediately.
- const result = data() → again schedules a timeout, returns undefined.
- console.log("after result in var") runs.
- console.log("result of data () is :- undefined") runs.
- After 3 seconds, the callback finally executes → "i run after 3 sec" is printed



Bahut sahi question 👌
Ab hum **“Implicit Promise.resolve wrapping”** ko engine level pe samjhenge — tumhare pattern me:

> **Problem → Why → What → Internal Mechanics → Side Effects → Optimization → Deep Example**

---

# 🔹 Implicit Promise.resolve Wrapping — Kaise hota hai?

---

## 1️⃣ 🧠 Problem

Hum async function me simple value return karte hain:

```js
async function demo() {
  return 5;
}
```

Lekin:

```js
console.log(demo());
```

Output:

```js
Promise { 5 }
```

🤔 Question:

> Humne Promise.resolve nahi likha.
> Phir ye Promise kaise ban gaya?

---

## 2️⃣ ❓ Why

Because **async function normal function nahi hota**.

Jab JS engine `async` keyword dekhta hai:

* Wo function ko special internal wrapper me convert kar deta hai
* Wo automatically us function ka return value Promise me convert karta hai

Yani:

```
async function ≠ normal function
async function = Promise producing machine
```

---

## 3️⃣ 📘 What (Simple Meaning)

Agar async function me:

```js
return X;
```

To engine internally karta hai:

```js
return Promise.resolve(X);
```

Aur agar:

```js
throw error;
```

To internally:

```js
return Promise.reject(error);
```

Yahi hai implicit wrapping.

---

# 4️⃣ ⚙ Internal Mechanics (Engine Level Samjho)

JS engine ke andar async function kuch aise behave karta hai:

### Step 1: Async function call hota hai

```js
demo();
```

Engine turant ek **Promise object create karta hai**.

---

### Step 2: Function body execute hoti hai

```js
return 5;
```

Engine dekhta hai:

* Kya ye value Promise hai?
* Agar nahi → wrap karo

So internally:

```js
Promise.resolve(5)
```

---

### Step 3: Promise microtask queue me resolve hota hai

Even though value immediately available hai —
Resolution microtask queue me schedule hota hai.

Isliye async function always asynchronous behave karta hai.

---

# 🔬 Deep Example (Execution Order Proof)

```js
async function test() {
  return 10;
}

console.log("Start");

test().then(value => console.log(value));

console.log("End");
```

Output:

```
Start
End
10
```

⚠ Important:

Agar direct return hota to 10 "End" se pehle print hota.

Lekin:

* Async function ne Promise banaya
* Promise microtask me gaya
* Sync code pehle finish hua
* Fir microtask run hua

Yahi proof hai ki wrapping ho rahi hai.

---

# 5️⃣ ⚠ Side Effects

### 1. Async without await bhi async hota hai

```js
async function test() {
  return 1;
}
```

Even though no await — still Promise return karega.

---

### 2. Double wrapping nahi hota

```js
async function test() {
  return Promise.resolve(5);
}
```

Engine karta hai:

```
Promise.resolve(Promise)
```

Lekin Promise.resolve agar Promise receive kare to same Promise return karta hai.

So no nesting.

---

### 3. Always microtask me resolve hota hai

Chahe value immediately available ho —
Fir bhi sync jaisa behave nahi karega.

---

# 6️⃣ 🚀 Optimization Insight

### ❌ Unnecessary async avoid karo

Agar function already Promise return karta hai:

```js
function fetchData() {
  return fetch(url);
}
```

To isko async banana zaroori nahi:

```js
async function fetchData() {
  return fetch(url);
}
```

Ye extra wrapping hai (though negligible performance cost).

---

# 7️⃣ 🧠 Ultimate Mental Model

```
async function call:
    ↓
Engine creates Promise immediately
    ↓
Function body executes
    ↓
Return value:
      If normal → Promise.resolve(value)
      If error → Promise.reject(error)
    ↓
Resolution goes to microtask queue
```

---

# 🔥 Interview Level Answer

If interviewer asks:

> "How does async function return a Promise even when returning a normal value?"

Answer:

> When an async function is invoked, the JavaScript engine automatically creates a Promise. If the function returns a non-Promise value, the engine implicitly wraps it using Promise.resolve(). If it throws an error, it wraps it using Promise.reject(). The resolution is scheduled in the microtask queue.

---
