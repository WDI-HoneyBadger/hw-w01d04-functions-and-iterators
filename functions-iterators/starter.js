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

function justDoIt(){
  return "JUST DO IT!";
}

console.log(justDoIt('Norah'));


// PART 1: Big or Small String?


function oddOrEvenString(word){
  if (word < 10 ) {
      return "This word is loooooong!";
  }
  else {
      return "This word is short";
  }
}

console.log(oddOrEvenString('Norah'));

// PART 2: Odd or Even String Length?



// PART 3: Median



// PART 4: Sum Array

var val;
var a = ["a", "b", "c"];
for (val of a) {
    console.log(val);
}

// PART 5: Vowel Count


function getVowels(str) {
  var vowelsCount = 0;

  
  var string = str.toString();


  for (var i = 0; i <= string.length - 1; i++) {

    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

console.log(getVowels('Norah'));

// PART 6: Initials



// PART 7: Days of the week



// PART 8: Let's take the Subway



// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];




// BONUS: Double X Counter



// BONUS Two-Dimensional Array




/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');