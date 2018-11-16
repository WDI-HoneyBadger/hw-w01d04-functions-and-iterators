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
function justDoIt(name) {
  typeof name == String
return (` ${name} JUST DO IT`)
}

// PART 1: Big or Small String?
function bigOrSmallString(word) {
  typeof word == "string"
  if ((word).length > 10 ){
    return 'This word is loooooong!'
  } else {
   return 'This word is short 😬'
  }
}


// PART 2: Odd or Even String Length?

function oddOrEvenString (stringdete){
 typeof stringdete == "string"
  if ((stringdete).length % 2) {
    return "This string's length is odd.."
  }else {
    return "This string length is TOTALLY even!"
  }
}

// PART 3: Median
function medianOfArray(array) { 
var medianOfArray = 0, numsLen = array.length;
array.sort(); 
if (numsLen % 2 === 0)
  {
    medianOfArray = (array[numsLen / 2 - 1] + array[numsLen / 2]) /2
  } else {
    medianOfArray = array[(numsLen - 1) / 2];
  }
  return medianOfArray;
}


// PART 4: Sum Array



// PART 5: Vowel Count



// PART 6: Initials



// PART 7: Days of the week



// PART 8: Let's take the Subway



// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];




// BONUS: Double X Counter



// BONUS Two-Dimensional Array




/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');
console.log(justDoIt("Masarah"));
console.log(bigOrSmallString("is this string small or big"));
console.log(oddOrEvenString("is this string odd or even"));
console.log(medianOfArray([1,2,3,4,5,6,8]));