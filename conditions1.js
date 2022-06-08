console.log("Hello World");

// create variable for random number 0.0-1
let randomNumber = Math.random();

// if condition with random number that is greater than 0.5
if (randomNumber < 0.50) {
// block of code if greater than 0.5 this block of code runs 
    console.log("Condition was Met");
    console.log(randomNumber)
}

// created if condition
if (randomNumber >= 0.5){
// output the variable if random number is greater than 0.5
    console.log('Condition Was Met');
    console.log(randomNumber);
}

// // create a day of the week. declare variable
// const dayOfWeek = 'Saturday'

// // call variable
// if (dayOfWeek === 'Monday'){

//     console.log("yay its Monday!");
// } else if (dayOfWeek === 'Friday'){

//     console.log('yay its Friday!');
// }else if (dayOfWeek ==='Saturday!'){

//     console.log('you have the correct day from the variable');
// }

// create variable for age and run prompt function 
// const age = prompt("enter an age");
// // run if condition
// if (age < 5){
//     console.log("hey you're a baby");
// }else if (age < 10){
//     console.log("hey you're just a kid");
// }else if (age < 35){
//     console.log("you're getting older");
// }
// // if all other conditions fail - else
// else{
//     console.log("you're over the age of 35");
// }



// using switch case statement to make it cleaner. 
// create a switch statement 
// declare a variable 
// const fruit = 'peach';
// // manipulate variable by passing variable into argumentative parameter
// switch (fruit){

//     case 'oranges':
//         console.log("oranges are $0.59 a pound");
//         break;
//     case 'banana':
//         console.log("bananas are $0.10 a pound");
//         break;
//     case 'avocados':
//         console.log("avocados are expensive");
//         break;
//     case 'papayas':
//         console.log("papayas are $0.70 a pound");
//         // breaks out of the switch block
//         break; 

//         // if all of above fails it runs this 
//     default:
//         console.log("last resort if all conditions fail");

// }

// if condition with nested condition
// create password variable 
// const password = prompt("enter in a new password");
// // create first if condition. check length 
// if (password.length >= 6){
// // nested condition. another if condition. 
//     if(password.indexOf('') === -1){
//         console.log("valid password");

//     }else{
// // condition to not have spaces
//         console.log("password cant have spaces");
//     }
// }else{

//     console.log("password is too short");
// }


// created a function (declaration statement) with name and argument parameters. inside the parameter is value.
// manipulate variable in block of code
function singSong(){

    console.log("do");
    console.log("re");
    console.log("me");

}
// call function
singSong()
singSong()
singSong()

// created function. 1 argument
function greet(firstName){
// pass. create template literal. embedded expression. 
    console.log(`hey there, ${firstname}`)
} 
greet('boomer');

// created function. 2 arguments
function greet(firstName, lastName){
    // pass. create template literal. embedded expression. 
        console.log(`hey there, ${firstname} ${lastName}`)
    }
    greet('boomer', 'sooner');