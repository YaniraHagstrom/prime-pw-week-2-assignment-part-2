// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called 'name' and set it equal to string value 'Dane'.
// We use a conditional if statement to check is the variable 'name' equals string value 'Mary' and if it does we console log 'Hi, Mary'. Otherwise, if the variable 'name' does not equal 'Mary', we console log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare variables named 'secret' and 'code' and set 'code' equal to number 123.
// We use a conditional if statement to check the value of 'code'. If 'code' equals 123 then we set 'secret' equal to 'super' and 'code' equal to double itself. 
// 'code' now equals 246
// We use another conditional if statement to check If 'code' is greater than 250. 
// Since code is not greater than 250, we console log 'super'.
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare variables isStudent = true, age = 34 and zip = 55407.
// We use a conditional if statement. If isStudent is true and zip is greater than 80000 then we console log 'You're a student on the West Coast!'
// If this conditional is not true then we check if isStudent is false or age is less than 30. If either of these conditions are true we console log 'What are your hobbies?'.
// If neither conditions are true then we check if isStudent is true and is so we console log 'Welcome to Prime'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - colorOne should be set to 'blue' and colorTwo should be set to 'red'. 
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - colorTwo should be set to 'purple'. should include colorTwo = 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

// FIX - the constant 'time' should be a variable.
let temp = 40;
const time = 4;

// FIX - the conditional statement should have && instead of || to create an and statement instead of an or statement.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//FIX - 'minAge' should be a variable not a constant.
/*
let age = 21;
const minAge = 21;

//FIX - since 'age' == 'minAge' then we should be console logging 'no entry'.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

