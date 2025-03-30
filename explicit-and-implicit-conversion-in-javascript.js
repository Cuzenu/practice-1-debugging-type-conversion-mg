/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

Before conversion output:
The result is: 3
This is valid!
Total Age: 255

Types
result: number
isValid: boolean
age: string
totalAge: string  set to number

After conversion output:
tbd
*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean(true);  // removed quotations from boolean to ensure it evaluates to a boolean value, set to True.
if (isValid) {
    console.log("This is valid!");
}

let age = 25; // Changed from string to number to avoid implicit conversion issues.
let totalAge = age + 5;  // This was originally a string concatenation due to the age being a string. Now it will be a number addition.
console.log("Total Age: " + totalAge);

// new code for examples

// example of implicit type conversion
let implicitResult = "100" + 50; // This will concatenate the string "100" with the number 50, resulting in "10050"
console.log(implicitResult); // Output: "10050", because JavaScript converts the number 50 to a string and concatenates it with "100"
console.log(typeof implicitResult); // Output: string, because the result of the concatenation is a string


// example of explicit type conversion
let explicitResult = null; // null is a special value in JavaScript, it will be converted to 0 when using Number()
console.log(typeof explicitResult); // Output: object, because null is of type object in JavaScript

let explicitResultNumber = Number(explicitResult); // Explicitly convert null to a number using Number()
console.log(Boolean(explicitResult)); // Output: false, because null is falsy in JavaScript
