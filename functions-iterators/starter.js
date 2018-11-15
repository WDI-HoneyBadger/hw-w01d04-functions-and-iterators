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

function justDoIt(string){
  return `${string}, JUST DO IT`;
}
//console.log(justDoIt('Abdulrab'));

// PART 1: Big or Small String?

function bigOrSmallString(string){
  if (string.length > 10){
    return `This word is loooooong!`;
  } else {
    return `This word is short 😬`;
  }
}
//console.log(bigOrSmallString("Abdulrab"));

// PART 2: Odd or Even String Length?

function oddOrEvenString(string){
  if (string.length % 2 == 0){
    return `This string length is TOTALLY even! : ${string.length}`;
  } else {
    return `This string's length is odd. : ${string.length}`;
  }
}
//console.log(oddOrEvenString('Abdulrab'));

// PART 3: Median
var number1 = [10, 20, 30, 40, 50, 77, 89];
function medianOcfArray(arr){
  var median;
  if (arr.length % 2 == 1){
    median = (arr.length - 1) / 2;
    return arr[median];
  } else {
    console.log('The lenght of array is event.')
  }
}
//console.log(medianOcfArray(number1));

// PART 4: Sum Array
var number2 = [20, 20, 20, 20, 20];
function sumArray(arr){
  var totalNumber = 0;
  for (var i = 0; i < arr.length; i++){
    totalNumber += arr[i];
  }
  return totalNumber;
}
//console.log(sumArray(number2));


// PART 5: Vowel Count
function vowelCount(str){
  // str = str.toLowerCase(); we don't need to write the case of capetal character in if condition.
  var count = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] == 'a' || str[i] == 'A'){
      count++
    } if (str[i] == 'e' || str[i] == 'E'){
      count++
    } if (str[i] == 'i' || str[i] == 'I'){
      count++
    } if (str[i] == 'o' || str[i] == 'O'){
      count++
    } if (str[i] == 'u' || str[i] == 'U'){
      count++
    }
  }
  return count;
}

console.log(vowelCount('Abdulrab'))

// PART 6: Initials



// PART 7: Days of the week



// PART 8: Let's take the Subway



// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];




// BONUS: Double X Counter



// BONUS Two-Dimensional Array




/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');