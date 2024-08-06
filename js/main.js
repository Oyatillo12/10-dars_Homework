// Misollar

// 1 Task

// let array = []
// function fillArr(number){
//     let newValue = prompt(array.length + 1 + " - Sonni kiriting") - 0;
//     array.push(newValue)
//     let newNumber = number - 1
//     if(newNumber > 0) fillArr(newNumber)
// }
// fillArr(5)
// let res = array.sort((a,b) => b-a)
// console.log("Qiymatlarning kattasi:",res[0]);


// 2 Task
// let arr = [5,6,true,null,8]
// let arr2 = [0,2,5,false,6]

// function totalArr(arr,arr2){
//     let concatArr = arr.concat(arr2)
//     return concatArr.reduce((total,value) => total += value,0)
// }
// console.log("Arraylarning yigindisi:",totalArr(arr,arr2));


// 3 Task

// let arr = [12,45,9,15,19,34]
// let minIndex = arr[0]
// function minNumIndex(arr){
//    for(let i = 0; i < arr.length; i++){
//     if(minIndex > arr[i]){
//         minIndex = arr[i]
//     }
//    }
//     return  arr.indexOf(minIndex)  
// }
// console.log(arr);
// console.log("Kichik qiymatning index orni:", minNumIndex(arr));


// 4 Task ??? berilmagan


// 5 Task 
// let arr1= [5,4,3,6,3,7,1]
// let arr2 = [22,1,42,34,55,67,11,32]

// function sortedArras(arr1,arr2) {
//     return arr1.concat(arr2).sort((a,b) => a-b)
// }
// console.log(sortedArras(arr1,arr2));


// 6 Task 

// let carsArr = [
//     {
//         name:"Lacetti",
//         price:9000
//     },
//     {
//         name:"Damas",
//         price:7800
//     },
//     {
//         name:"Cobalt",
//         price:12500
//     },
//     {
//         name:"Gentra",
//         price:14000
//     },
//     {
//         name:"Onix",
//         price:1700
//     },
// ]
// let carsArr2 = [...carsArr]
// function sortedCars(carsArr,carsArr2){
//     let sortName = carsArr.sort((a,b) => a.name > b.name ? 1 : -1)
//     let sortPrice = carsArr2.sort((a,b) => a.price > b.price ? 1 : -1)
//     console.log("Sort Name:", sortName);
//     console.log("Sort Price:", sortPrice);
// }
// sortedCars(carsArr,carsArr2)

// yoki bu usul name kiritsez name boyicha, yoki price boyicha
// function sortedCars(casrArr,enter){
//     return casrArr.sort((a,b) => a[enter] > b[enter] ? 1 : -1)
// }
// console.log(sortedCars(casrArr,'name'));


// 7 Task

// let arr = ["Salom","Rahmat"]

// function addValue (a){
//     let enterWord = prompt("Soz kiriting")
//     arr.splice(1,0,enterWord)
//     let b = a-1
//     if(b > 0){
//         addValue(b)
//     }
// }
// addValue (2)
// console.log(arr);

// 8 Task

// function reversedValue(enter){
//      if(typeof enter == 'number'){
//         return enter.toString().split('').reverse().join('') 
//     }
//     // else if(typeof enter == 'string'){
//     //     return enter.split('').reverse().join(' ') //  harflar boyicha reverse 
//     // }
//     else if(typeof enter == 'string'){
//         return enter.split(' ').reverse().join(' ') //  Soz boyicha reverse 
//     }
//     else{
//         return "Togri amal yozing"
//     }
//   }
// console.log(reversedValue('Hello world'));
// console.log(reversedValue(2786723));
// console.log(reversedValue(false));





