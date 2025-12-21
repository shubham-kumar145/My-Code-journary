// const number = [5, 10, 15, 20, 25];
// // for(let num of numbers){
// //     console.log(num);
    
// // }
// // for(let num in numbers){
// //     console.log(`value at ${num} = ${numbers[num]}`);
    
// // numbers.forEach(numbers,num())=>{
// //     console.log(num);
    
// // // }

// // let num = numbers.map(a=> a*3)
// // console.log(num);



// // let newarry = numbers.filter(function(num){
// //     return num>20
// // })


// // console.log(newarry);





// // ......................................
// // let sum = numbers.reduce(function(acc,num){
// //     return acc+num;
// // },20);

// // console.log(sum);

// // .................................................
// // for each
// // numbers.forEach(fum)

// // function fum(num){
// //     console.log(num);
    
// // }

// // .......second

// // numbers.forEach(function(num){
// //     console.log(num);
    
// // })

// //  next 

// // numbers.forEach(num => console.log(num))

// // push
// const arr = [10,20,30,40,50,60,70,80,90,100]

// // numbers.push(arr)

// // arr.forEach((num) => numbers.push(num))

// // console.log(numbers);
// // const arr1 = numbers.pop()

// // console.log(`here we are printing the arr1 ${arr1}`);

// // let  numbers[] = number.push(arr)
// const numbers = [...number]
// numbers.push(...arr)

// console.log(`push ${numbers}`);


// numbers.pop()

// console.log(numbers);

// console.log(`we are trying to sort the element ${numbers.sort((d,p) => d-p)}`);

// console.log(`now trying to reverse the element ${numbers.reverse()}`);


// console.log(`slice ${numbers.slice(2,5)}`);

// console.log(`find ${numbers.find((num)=>{return num>50})}`);

// console.log(`spread  ${[...numbers]}`);

// let a = [...numbers]

// let b = a.join(" ,, ")

// console.log(`store then prient ${b}`);


// console.log(`spread ${numbers.join(" hello ")}`);

// // const






 



// // const mixedArray = [
// //   42,                          // Number
// //   "hello",                    // String
// //   true,                       // Boolean
// //   null,                       // Null
// //   undefined,                  // Undefined
// //   { name: "Alice", age: 25 }, // Object
// //   [1, 2, 3],                  // Array
// //   function() { return "Hi"; }, // Function
// //   Symbol("id"),              // Symbol
// //   new Date()                 // Date object
// // ];
// // const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// // let sum =0
// // for (let i = 0; i < numbers.length; i++) {
// //     // const num = numbers[i];
// //     // sum = sum + numbers[i]
// //     // console.log(typeof numbers[i]);
    
// //     // console.log(sum);
    
// //     // console.log(num);
// //     console.log(typeof (mixedArray[i]));
        
// // }



// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };

// let merged = { ...obj1, ...obj2 };
// console.log(merged);


let student = {
    name: "shubham",
    id:48
}
let student1={
    name1: "ayushi",
    id1:145
}
// let list = Object.assign({},student,student1);
let list = {...student,...student1}
console.log(list);
