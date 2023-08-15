//1.Գտնել զանգվածի ամենամեծ և ամենափոքր թվերը
// let number = [11, -20, 83, -90, -30, 60, 1]
// let [max,min] = [number[0],number[0]]
//
// for (let i = 1; i < number.length; i++) {
//     if (number[i] > max) {
//         max = number[i]
//     } else if (number[i] < min) {
//         min = number[i]
//     }
// }
// console.log(max);
// console.log(min);


//2.Հաշվել զանգվածի դրական թվերի միջին թվաբանականը
// let number = [11, -20, 83, -90, -30, 60, 1]
// let sum = 0
// let count = 0
// for (let i = 0; i < number.length; i++) {
//     if (number[i] > 0) {
//         sum += number[i]
//         count++
//     }
// }
// console.log(sum / count);


// 3. Տրված number զանգվածը ձևափոխել այնպես, որ պարունակի միայն դրական
// արժեքներով տարրեր
// let number = [11, -20, 83, -90, -30, 60, 1]

// for (let i = number.length - 1; i >= 0; i--) {
//     if (number[i] < 0) {
//         number.splice(i, 1)
//     }
// }
// console.log(number);


//4․Վերադարձնել զանգված, որը բաղկացած կլինի միայն թվերից

// let number = [10, "20", 80, -90, NaN, 60, 1, undefined, 87, null, true, false, 85, "25", 14, 17, 18, 18]

// for (let i = number.length - 1; i >= 0; i--) {
//     if (typeof number[i] !== "number" || isNaN(number[i])) {
//         number.splice(i, 1)
//     }
// }
// console.log(number);


// //5.Վերադարձնել բնական թվերի գումարը

// let number = [10, "20", 80, -90, NaN, 60, 1, undefined, 87, null, true, false, 85, "25", 14, 17, 18, 18]
// let sum = 0
// for (let i = 0; i < number.length; i++) {
//     if (parseInt(number[i]) > 0) {
//         sum += +number[i]
//     }
// }
// console.log(sum);


// // 6. Ելքագրել զույգ ինդեքս ունեցող տարրերի գումարը

// let number = [1, 5, -1, 7, -5, -4, 9, 8, 7, 2, -10]
// let sum = 0

// for (let i = 2; i < number.length; i += 2) {
//     sum += number[i]
// }
// console.log(sum);


// // 7. Ելքագրել զույգ ինդեքս ունեցող տարրերի արտադրյալը

// let number = [1, 5, -1, 7, -5, -4, 9, 8, 7, 2, -10]
// let multiplication = 1

// for (let i = 2; i < number.length; i += 2) {
//     multiplication *= number[i]
// }
// console.log(multiplication);


// // 8. Ելքագրել կենտ տարր ունեցող ինդեքսների գումարը

// let number = [1, 5, -1, 7, -5, -4, 9, 8, 7, 2, -10]
// let sum = 0

// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 !== 0) {
//         sum += i
//     }
// }
// console.log(sum);


// // 9. Ելքագրել դրական և բացասական տարրերի քանակը
// let number = [1, 5, -1, 7, -5, -4, 9, 8, 7, 2, -10]

// let count_drakan = 0
// let count_bacasakan = 0
// for (let i = 0; i < number.length; i++) {
//     if (number[i] > 0) {
//         count_drakan++
//     } else if (number[i] < 0) {
//         count_bacasakan++
//     }
// }
// console.log(count_drakan);
// console.log(count_bacasakan);


// let str="barev inchpes eq"
// let str2=str
//
// str="hajox"
// console.log(str)
// console.log(str2)


// let arr=[1,2,3,4,5,6]
// let arr2=arr
//
// arr.push(7)
// console.log(arr)
// console.log(arr2)

// let num=25
//
// let person='Vahag'
//
// let sort=[10,20,30,40,50]
//
// let sortclone=["barev",...sort,60,70]
// // for (let i=0;i<sort.length;i++){
// //     sortclone.push(sort[i])
// // }
// // sort.push(150)
// // console.log(sort)
// console.log(sortclone)

// let x="barev"
// alert(x)


// let sort=[10,20,30,40,50]

// for (let i=0;i<sort.length;i++){
//     console.log(sort[i])
// }
//
// for(let res in sort){
//     // console.log(sort[i])
//     console.log(sort[res])
// }

// console.log(Math.min(...sort))
// console.log(Math.max(...sort))

//
// let x = ["aaa", "bbb", "ccc", "ddd", 'eee']
// for (let i in x){
//     let y = x[i].split('')
//     y[0] = y[0].toUpperCase()
//     y = y.join((''))
//     x[i] = y
//
// }
// console.log(x)

// let x = ["aaa", "bbb", "ccc", "ddd", "eee"];
//
// for (let i = 0; i < x.length; i++) {
//     x[i] = x[i][0].toUpperCase() + x[i].slice(1);
// }
// console.log(x);



// tnayin

let x = ["aaa", "bbb", "ccc", "ddd", "eee"];
// unenq xary tverov zangvac ztel krnvoxnery heracnel
// 2
// exanakov
 // mna 2 chmna

let p=[1,4,67,9,58,2,5,6,8]


// push
// pop
// x[x.length]="FFFF"
// x.length-=1
// console.log(x)
// shift
// unshift
// revercer































