/* ============ BEFORE YOU GET STARTED ============ */

/* here is a very short function that pops up an alert window that says 'Hello!' */
function hello() {
  alert('Hello!');
}

/* Here's the steps to test it:

- Open index.html in chrome.
- Type the keyboard shortcut `cmd + option + j`. Dev tools should open to the console.
- You should see the message saying 'starter.js is connected!'
- Underneath that, next to the blue arrow, type `hello()` to call the `hello` function
- You should get an alert window that says HELLO!

*/

/* ================= AS YOU COMPLETE EACH STEP ============= */

/* After each step, perform the following commands in the terminal:
1. git add .
2. git commit -m "add completed part PART-NUMBER-HERE"
This will help us track your progress and it will give you practice writing good commit messages!! 
*/

/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */
/* ======================= WRITE YOUR ANSWERS HERE!!!!! =============== */
/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */

// PART 0: Just DO it!!

var justDoIt = function(str){
  return `${str}, JUST DO IT!`;
}

// PART 1: Big or Small String?

var bigOrSmallString = function(str){
  if(str.length > 10){
    return "This word is loooooong!";
  }
  else{
    return "This word is short 😬";
  }
}

// PART 2: Odd or Even String Length?

var oddOrEvenString = function(str){
  if(str.length % 2 === 0){
    return "This string length is TOTALLY even!";
  }
  else{
    return "This string's length is odd..";
  }

}

// PART 3: Median

var testArray = [1,2,8,4,5,6,7,3,9,10];

var medianOfArray = function(arr){
  arr.sort(function(a, b){return a - b});
  var midpoint = Math.floor(arr.length / 2);
  if ((arr.length % 2) !== 0){
    return /* `${arr} >>> ` + */ arr[midpoint];
  }
  else {
    //median of array with even number of elements, avg of the two middle elements.
    return /* `${arr} >>> ` + */ ((arr[midpoint] + arr[midpoint - 1]) / 2);
  }
  
}

// PART 4: Sum Array

var sumArray = function (arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i ++){
    sum += arr[i];
  }
  return sum;
}

// PART 5: Vowel Count

var testString = "Neil Patrick Harris";

var vowelCount = function (str){
  var sum = 0;
  var chr = "";
  str = str.toUpperCase();
  for (var i = 0; i < str.length; i++){
    chr = str.charAt(i);
    if (chr == "A" || chr == "E" || chr == "I" || chr == "O" || chr == "U"){
      sum += 1;
    }
  }
  return sum;
}


// PART 6: Initials



// PART 7: Days of the week



// PART 8: Let's take the Subway



// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];




// BONUS: Double X Counter



// BONUS Two-Dimensional Array




/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');