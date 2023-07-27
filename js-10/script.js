//
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0 && i % 3 === 0) {
//         console.log(`${i} բաժանվում է և՛ 2-ի, և՛ 3-ի`);
//     }
// }


// 2. Տպել 1-100 միջակայքի կենտ թվերը
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 !== 0) {
//         console.log(`${i} կենտ թիվ է`);
//     }
// }
//
// // II տարբերակ
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         continue
//     }
//     console.log(`${i} կենտ թիվ է`);
// }
//
// 3.Տպել 1-100 բոլոր թվերը։
//  Եթե հերթական թիվն անմնացորդ բաժանվում է 3-ի, ապա նրա փոխարեն տպել Fizz,
//     հակառակ դեպքում, եթե այն բաժանվում է 5-ի անմնացորդ, ապա նրա փոխարեն տպել Bizz,
//     իսկ եթե թիվը միաժամանակ բաժանվում է և՛ 3-ի, և՛ 5-ի անմնացորդ,
//     ապա նրա փոխարեն տպել FizzBizz:
//
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log(`FizzBizz, քանի որ ${i} բաժանվում է և՛ 3-ի, և՛ 5-ի`);
//         } else if (i % 3 == 0) {
//             console.log(`Fizz, քանի որ ${i} բաժանվում է 3-ի`);
//         } else if (i % 5 == 0) {
//             console.log(`Bizz, քանի որ ${i} բաժանվում է 5-ի`);
//         }
//     }
//
// //4. Մուտքագրվում է x թիվը, անհրաժեշտ է գտնել մինչ այդ թիվը եղած թվերի գումարը
// let num = prompt(`Մուտքագրել բնական թիվ`)
// regExp = /[^\""\''null]+/
// let gumar = 0
// if (regExp.test(num)) {
//     num = parseInt(num)
//     if (num > 0) {
//         for (num; num > 0; num--) {
//             gumar += num
//         }
//         console.log(gumar);
//     } else {
//         console.log(`${num} բնական թիվ չէ`);
//     }
// } else {
//     console.log(`Դուք մուտքագրում չեք կատարել`);
// }
//
// II տարբերակ
// let num = parseInt(prompt(`Մուտքագրել բնական թիվ`))
// let gumar = 0
// if (num > 0) {
//     for (num; num > 0; num--) {
//         gumar += num
//     }
//     console.log(gumar);
// } else {
//     console.log(`${num} բնական թիվ չէ`);
// }
//
// //5․ Մուտքագրվում է x,y թվերը, անհրաժեշտ է հաշվել x-ի y աստիճանը
// let num = prompt(`Մուտքագրել թվեր հետևյալ ձևաչափով՝ 2,5`)
// let regExp = /[^\""\''null]+/
// let degree = 0
//
// if (regExp.test(num)) {
//     let firstNumber = parseFloat(num)
//     let secondNumber = parseInt(num.slice(num.indexOf(',') + 1))
//     if (secondNumber > 0 || secondNumber === 0) {
//         for (let i = 0; i <= secondNumber; i++) {
//             degree = firstNumber ** i
//         }
//     } else if (secondNumber < 0) {
//         for (let i = 1; i <= -secondNumber; i++) {
//             degree = 1 / (firstNumber ** i)
//         }
//     }
//     console.log(degree);
// } else {
//     console.log(`Դուք մուտքագրում չեք կատարել`);
// }
//
// console.time('t1')
// let xy="2,50"
// let x=xy.slice(0,xy.indexOf(','))
// let y=parseInt(xy.slice(xy.indexOf(',')+1))
// let res=0
// for (let i=0;i<=y;i++){
//     res+=i
// }
//
// console.log(res)
// console.timeEnd('t1')

// let i1=parseInt(prompt("Greq mi tiv baci 0"));
// let i2 = (i1 + 1) / 2 * i1
// console.log(i2)



//
// let name="Naira"
//
// // for (let i=name.length-1;i>=0;i-- ){
// //     console.log(name[i],i)
// // }
//
// let i=name.length-1
// while (i>=0){
//
//     console.log(name[i])
//     i--
// }

// let x=7
// console.log(x-- > 5)//7
// console.log(x)//6
//
// // console.log(--x > 5)//6
// console.log(x)//6

// debugger
// let i = 0;
// while (++i < 5) alert( i );
// let i = 0;
// while (i++ < 5) alert( i );1,2,3,4,5



// _____________________-Tnayin
// 1. prompti mej inch anun greq  // Jordan->JoRdAn
// 2. prompti mej greq anun veradarcni Jordan-> nadroJ
// 3. nadroJ-> Nadroj

// bonus
// 2 // prompt unenaq tiv greq hashvi ayd tvi mijin tvabanakay //10 x,y

// 3 unenaq prompt avandakan mexanizmov 2,5 skzbunqy dher xndir e
// 1 arajin tivy meish petq e mets lini 2 rd tvic
// ete hakarakn e duq avtomat poxeq texery
// u erb poxeq verjacneq hashveq grvac aranqi tveri factoryaly


// 4,12->12,4=>4*5*6*7*8*9*10*11*12


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math













