//Homework 1

// let str = prompt("ստուգել այս արտահայտությունը անգլերեն է թե ոչ")
// let res=true
// for(let i=0; i<str.length;i++){
//     if(!(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90 ||
//         str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)){
//         res=false
//         break
//     }
// }
// console.log(res)


// // // Homework 2
//
// let str1 = prompt("գրել պարզ թվերը")
// for (let i=str1; i<=100;i++){
//     if(i/i===1 && i/1===i){
//         console.log(i)
//     }
//
// }
//
//
//
// //  Homework 3 ստանալ բազմապատկման աղյուսակ
//
// for(let i = 2; i<=10; i++){
//     for(j=1; j<=10;j++){
//
//         console.log(i.toString() + "x" +j.toString() +"="+ i*j)
//     }
// }
//
//
// // Homework 4
//
// for (let i=0; i<5;i++){
//     for (let j=0; j<i;j++){
//
//         document.write(i)
//     }
//     document.write("<br>")
// }
//
//


// debugger
// loop:for (let i = 1; i <= 100; i++) {
//     for (let k = 2; k < i; k++) {
//         if (i % k === 0 ) {
//
//             continue loop
//
//         }
//     }
//
//     console.log(i)
// }
//


document.write(`<table border="1">`)
for (let i=0;i<8;i++) {
    document.write(`<tr>`)
    for (let j=0;j<8;j++){
        document.write(`<td style="background: ${(i+j)%2===0?'black':'wheat'}">`)

        document.write(`</td>`)
    }
    document.write(`</tr>`)
}
document.write(` </table>`)


let x=2
let y=150
let r=(x>0 && x%2 === 0)?x:x+1;

for (let i = r; i < y; i*=2) {
    console.log(i)
}

// Object.is(x,y)

















