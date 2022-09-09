// let btns = document.querySelectorAll(".btn")

// btns.forEach((btn) => {
//     // btn.setAttribute("id", btn.innerText)
//     btn.id = btn.innerText
// })

// let random = document.getElementById("random")

// random.addEventListener("click", () => {
//     if (random.previousElementSibling.value == "") {
//         random.nextElementSibling.innerText = Math.random()
//     } else {
//         random.nextElementSibling.innerText = Math.ceil(Math.random() * random.previousElementSibling.value)
//     }
// })

// let round = document.getElementById("round")
// round.addEventListener("click", () => {
//     round.nextElementSibling.innerText = Math.round(round.previousElementSibling.value)
// })


// let floor = document.getElementById("floor")
// floor.addEventListener("click", () => {
//     floor.nextElementSibling.innerText = Math.floor(floor.previousElementSibling.value)
// })


// let ceil = document.getElementById("ceil")
// ceil.addEventListener("click", () => {
//     ceil.nextElementSibling.innerText = Math.ceil(ceil.previousElementSibling.value)
// })


// let trunc = document.getElementById("trunc")
// trunc.addEventListener("click", () => {
//     trunc.nextElementSibling.innerText = Math.trunc(trunc.previousElementSibling.value)
// })

// let abs = document.getElementById("abs")
// abs.addEventListener("click", () => {
//     abs.nextElementSibling.innerText = Math.abs(abs.previousElementSibling.value)
// })

// let pi = document.getElementById("PI")
// pi.addEventListener("click", () => {
//     pi.nextElementSibling.innerText = Math.PI
// })

// let sign = document.getElementById("sign")
// sign.addEventListener("click", () => {
//     sign.nextElementSibling.innerText = Math.sign(sign.previousElementSibling.value)
// })

// let sqrt = document.getElementById("sqrt")
// sqrt.addEventListener("click", () => {
//     sqrt.nextElementSibling.innerText = Math.sqrt(sqrt.previousElementSibling.value)
// })

// let min = document.getElementById("min")
// min.addEventListener("click", () => {
//     pow.nextElementSibling.innerText = Math.min(min.previousElementSibling.value , min.previousElementSibling.previousElementSibling.value)
// })

// let max = document.getElementById("max")
// max.addEventListener("click", () => {
//     max.nextElementSibling.innerText = Math.max(max.previousElementSibling.value , max.previousElementSibling.previousElementSibling.value)
// })

// let pow = document.getElementById("pow")
// pow.addEventListener("click", () => {
//     pow.nextElementSibling.innerText = Math.pow(pow.previousElementSibling.previousElementSibling.value , pow.previousElementSibling.value)
// })



// // let num = 123

// // let str = "123abc"

// // let bool1 = true
// // let bool0 = false

// // let nul = null

// // let undef = undefined

// // let nan = NaN

// // let arr = [1, 2, 3]

// // let obj = {
// //     a: 1,
// //     b:2,
// //     c:3
// // }

// // const fun = ()=>{
// //     alert("ok")
// // }

// // const dat = [num , str, bool1, bool0, nul, undef, nan, arr ,obj]

// // dat.forEach((d=>{
// //     console.log(d ,typeof d)
// //     // console.log()
// // }))

let btn = document.querySelector(".btn");
let box = document.querySelector(".box");

btn.addEventListener("click", ()=>{
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let clr = `RGB(${red},${green}, ${blue})`;

    box.style.backgroundColor =  clr;
    box.innerText = clr;
})

setInterval(()=>{
    btn.click()
},400)