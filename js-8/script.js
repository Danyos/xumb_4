
// 0,false,undefined,null,'',NaN
// console.log(NaN && 0)


// let res=(5<3 || 8%2 === 0) ?"duq chisht eq":"duq sxal eq mtacum"

// console.log(res)


// let service=12000
// let vivacel=3900
//
// if(vivacel>=service){
//     vivacel-=service
//     console.log(`tsarayutyuny activacvats e dher hashvekshiry kazmum e ${vivacel} dram`)
// }else{
//     console.log(`Dher balancy chi hamapatasxanum, gortcarq-i
//      giny kazmum e ${service} dram isk dher hashvin arka e ${vivacel} dram`)
// }



// let vtb=500
// let ameria=1700
// let idbank=3400
// let product=24500

// let res=''
//
// if(vtb>=product){
//
//     vtb-=product
//     res=`gandzum ${product} vcharumy katarvel e vtb hamakargov dher balancy kazmum e ${vtb} dram`
//
// }else if( ameria>=product){
//     ameria-=product
//     res=`gandzum ${product} vcharumy katarvel e ameria hamakargov dher balancy kazmum e ${ameria} dram`
// }else if( idbank>=product){
//     idbank-=product
//     res=`gandzum ${product} vcharumy katarvel e idbank hamakargov dher balancy kazmum e ${idbank} dram`
// }else{
//     res=`Anbav arar mijocner Nshvats bolor qarteric`
//
// }
// console.log(res)
// let areq="626"
// if (typeof areq === "string") {
//
//     if(areq>0){
//         alert("drakan")
//     }else{
//         alert("bacasakan")
//     }
//
// }else{
//     alert("string chi inqy "+typeof areq +" a")
// }




// login passwordy patrastel if ov

// 2 unenaq prompt marduc harcneq ir tarqiy ete tariqy minchev 17 tarekan aseq duq poqr eq 18-63 duq grancveciq
// 63-99 duq shat mets eq sxal tariq


// 2 prompt 1 gre 2 tiv 10,30
// 2 grum eq gortxutyan shany +-*/

// stugel regexp ov
// 10+30// 40

// console.time("T1")
// for (let i=0;i<50000;++i){
//     console.log(i)
// }
// console.timeEnd("T1")

// Homework 1
// // let str = prompt("Գրել վերջին տառը մեծատառ")
// let word="Martiros"
// let x = word.slice(-1)
// // x=x===x.toUpperCase()?:x.toUpperCase()
// if(x===x.toUpperCase()){
//     x=x.toLowerCase()
// }else{
//     x=x.toUpperCase()
// }
// // x = x.toUpperCase()//S
// let z = word.slice(0,word.length-1)
// console.log(z+x)

// Homework 2
// debugger
// let wordd=prompt("գրել առաջին տառը փոքրատառ")
// let res = wordd.slice(0,1)
// let res1 = res.toLowerCase()
// let res2 = wordd.slice(1,wordd.length)
// res2=res1+res2
// console.log(res2)


// let x=NaN

// x=" "+x
// y=" "+y

// console.log(!!x === false)
// // Homework 3
// let num = prompt("մուտքագրել այնպիսի թիվ,որը կլինի բնական, զույգ և կբաժանվի 3-ի")
//
// if(num >= 0 && num%2 === 0 && num%3 === 0){
//     console.log("դուք մուտքագրել եք ճիշտ թիվ")
// }
// else{
//     alert("սխալ թիվ")
// }

// 50

// let c= parseInt((82.4 - 32) * 5/9)
// // (°C * 9/5) + 32 = °F
// let f=(28 * 9/5) + 32
//
// console.log(c)
// console.log(f)






//
// let name = prompt("grir anund qo anuny");
// let result = name[0].toLowerCase() + name.slice(1);
//
// console.log(result)



//
// let str_name = parseInt(prompt("Grir mi tiv"))
// let name1 =''
// switch (str_name){
//     case 7:
//          name1 = "Armen"
//         break;
//     case 8:
//          name1 = "Yuro"
//         break;
//     case 9:
//          name1 = "Arjuk"
//         break;
//     default:
//      name1="Ando"
// }
// console.log(name1)

// const name = prompt("grir anuny").trim();
// let modifiedName
// if(name[name.length-1] === name[name.length-1].toLowerCase()){
//     modifiedName= name.slice(0,name.length-1) + name[name.length-1].toUpperCase()
// }else{
//     modifiedName= name.slice(0,name.length-1) + name[name.length-1].toLowerCase()
// }
// console.log(modifiedName)




// let x='Mazda'
//
// switch (x){
//     case 'Mazda':
//         console.log("Mazda");
//         break
//         case 'Mers':
//             console.log("Mers");
//             break
//             case 'Toyota':
//                 console.log("Toyota");
//                 break
//                 case 'BMW':
//                     console.log("BMW")
//     default:
//         console.log("Sxal")
//
// }


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// let anun=prompt("Greq dher anun@")
//let res=6
// for(let i=0;i<anun.length;i++){

//     console.log(i,anun[i])

// }


// let i=0
// let p=+prompt("grir tiv")
// for (;i<90;i++){
//     if(i===p){
//         i++
//         break
//     }
//     // ...
//     console.log(i)
// }
// for (;i<90;i+=2){
//     console.log(i)
// }



// let i=0;
// while (i<7){
// if(i>3){
//     i+=2
// }else{
//     i++
// }
//
//
//     console.log(i)
// // }
// let i=0;
// do{
//     // ...
//
//     console.log(i)
//     i++
// }while (i<7)



console.time("T1")
for (let i=0;i<50000;++i){
    console.log(i)
}
console.timeEnd("T1")





// 1. 1-100
// gtnel ayn tvery voronq bajanvum en 2 i ev 3 i
// 2. tpel miayn kentery
// 3. 3 i vra e bajanvum tpi fiz ete 5 vra biz ete ham 3 i ham 5 i tpi fizbiz
// 4. promptov greq tiv veadarcni minchev ayd tvi gumar//1+2+3+4+5
// 5. unenal mek prompt vory kgrvi ayd devachapov (2,5) inqy veadarcni 2*2*2*2*2//2**5

// console.log(2**5)
// https://learn.javascript.ru/while-for










