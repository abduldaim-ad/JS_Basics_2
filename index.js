// JS_Basics_2
// Difference between == and ===

// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(typeof(num1));
// console.log(typeof(num2));

// var num=1;
// if(num==1){
//     console.log('The number is 1');
// }
// else{
//     console.log('The number is not 1');
// }

// //nested if else
// var year = 2020;
// debugger;
// if(year%4===0){
//     if(year%100===0){
//         if(year%400==0){
//             console.log("The year "+year+" is a leap year");
//         }else{
//             console.log("The year "+year+" is not a leap year");
//         }
//     }else{
//         console.log("The year "+year+" is a leap year");
//     }
// }
// else{
//     console.log("NOT Leap Year");
// }

// // total 5 falsy values values in javaScript
// // 0, "", undefined, null, NaN, false

// // if(score = 0){
// //     console.log("Better luck next time")
// // }
// // else{
// //     console.log("You have won the game");
// // }

// // if(score = 10){
// //     console.log("Better luck next time");
// // }
// // else{
// //     console.log("You have won the game");
// // }

// if(undefined){
//     console.log("Better luck next time");
// }
// else{
//     console.log("You have won the game");
// }

// // Conditional (ternary) operator takes three operands
// var n=2;
// var num;
// num=(n!=2)?5:7;
// console.log(num);

// // switch
// var day = 3;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid");
//         break;
// }

// //while loop
// var number = 1;
// //block scope
// // while(number<=10){
// //     console.log(number);
// //     number++;
// // }

// //Do while loop executes at least once
// do{
//     console.log(number);
//     number++;
// }while(number<=10);

// //For Loop
// for(var num=10;num>=1;num--){
//     debugger;
//     console.log("Number: "+num);
// }

// //Multiplication Table
// var table_num = 8;
// for(var start=1; start<=10; start++){
//     console.log(table_num+" * "+start+" = "+table_num*start);
// }

//Functions in javaScript
// function sum(){
//     var n1=3, n2=5;
//     var total = n1+n2;
//     console.log(total);
// }
// sum();

// function sum(n1,n2){
//     var total = n1+n2;
//     console.log(total);
// }
// sum();
// sum(20,30);
// sum(50,50);

// DRY => Do not repeat yourself

// function sum(n1=5,n2=3){
//     return total = n1+n2;
// }
// sum();
// //sum(20,30);
// var funcExp=sum(50,50);
// console.log(funcExp);

// Anonymous function => function without a name
// var funcExp = function(n1=5,n2=3){
//     var total = n1+n2;
//     return total;
// }
var funcExp = function(n1=5,n2=3){
    return total = n1+n2;
}

//console.log(funcExp);
var sum = funcExp(3,13);
console.log(sum);
//console.log(funcExp(5,15));

////////////////////// MODERN JAVASCRIPT /////////////////
// var => Function Scope
/// let and const => Block Scope

// var myName = "Abdul Daim";
// console.log(myName);

// myName = "AD";
// console.log(myName);

// let myName = "Abdul Daim";
// console.log(myName);

// myName = "AD";
// console.log(myName);

// const myName = "Abdul Daim";
// console.log(myName);

// ERROR!!!!!!
// myName = "AD";
// console.log(myName);

// var

// function biodata(){
//     var myFirstName = "ABC";
//     console.log(myFirstName);
//     if(true){
//        var myLastName = "DEF";
//        console.log('inner'+myLastName);
//        console.log('inner'+myFirstName);
//     }
//     console.log('innerOuter'+myLastName);
// }
// biodata();

// let

// function biodata(){
//     let myFirstName = "ABC";
//     console.log(myFirstName);
//     if(true){
//        let myLastName = "DEF";
//        console.log('inner'+myLastName);
//        console.log('inner'+myFirstName);
//     }
//     //ERROR!!!
//     //console.log('innerOuter'+myLastName);
// }
// biodata();

// let is much better than var

// Template Literals OR Template Strings
// for(let num=1;num<=10;num++){
//     let tableOf=8;
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`);
// }

// Default Parameters
// function mult(a=5,b=8){
//     return a*b;   
// }
// console.log(mult(5,3));
// console.log(mult());
// console.log(mult(9));

// FAT ARROW FUNCTION
const sumFunc = () => {
    let a = 5
    let b = 7;
    return `The sum of the two number is ${(a=23)+(b=23)}`;
}
// Arrow function in one line
// const sumFunc = () => `The sum of the two number is ${(a=23)+(b=23)}`;

console.log(sumFunc());

/////////////////////////////// ARRAYS ////////////////
// More than one data types in one array can also be stored in javaScript
var myCourses = ['Artificial Intelligence','Information Security','Web Engineering', 12345];
console.log(myCourses);