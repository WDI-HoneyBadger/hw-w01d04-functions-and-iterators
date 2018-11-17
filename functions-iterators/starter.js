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
function sumArray(arr) {
 if(!Array.isArray(arr)) 
 return;
 let sum=0;
 arr.forEach(each => {
   sum+=each;

 })
 return sum
}


// PART 5: Vowel Count
function vowelCount(str) {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0 ;
}


// PART 6: Initials
function initials(personName) {
  var personName = { fullName:["Masarah", "Ahmad"]
  }
return  personName.fullName[0]+ ' ' + personName.fullName[1];

}

// PART 7: Days of the week


/*
var answer=prompt("What day is today?");
  if (answer == 'Monday')
   {alert("Energize!");
  }else if (answer == 'Tuesday') 
  {
    alert("Just getting started!!");
  } else if (answer == 'Wednesday')
   {
     alert("JHump Hump!");
  } else if (answer == 'Thursday')
   {
     alert("Almost there!");
  } else if (answer == 'Friday' || answer == 'Saturday' || answer =='Sunday') 
  {
    alert ("Weeeeeee!");
  } else {
    alert ("Huh, sorry didn't get that?");
  }*/

// PART 8: Let's take the Subway


/* 
When the script is run, a menu should be prompted displaying:

A list of three trains - The (L) Train, The (N) Train, The (S)ix Train
And asking the user to make their selection!
If the user enters: L

An alert should output a message containing the user's selection labeled as L train and display the following stops:
8th Ave
6th Ave
Union Square
3rd Ave
1st Ave
Bedford Ave
If the user enters: N
An alert should output a message containing the user's selection labeled as N train and display the following stops:
Times Square
Herald Square
28th St
23rd St - DAPS Nexus
Union Square
8th St
If the user enters S
An alert should output a message containing the user's selection labeled as S train and display the following stops:
Grand Central
33rd St
28th St
23rd St
Union Square
Astor Place
Finally, a Thank You message should alert.

The program then exits.
*/


// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];
function truthyFalsey(arr){
  return arr ? "truthey" : "falsey";
}



// BONUS: Double X Counter



// BONUS Two-Dimensional Array




/* connection checker console log */
//console.log('starter.js is connected! Let\'s get to work! 💪');
console.log(justDoIt("Masarah"));
console.log(bigOrSmallString("is this string small or big"));
console.log(oddOrEvenString("is this string odd or even"));
console.log(medianOfArray([1,2,3,4,5,6,8]));
console.log(sumArray([1,2,3,4,5,6,8]));
console.log(vowelCount("vowel count"));
console.log(initials("Masarah Ahmad"));
console.log(truthyFalsey("Masarah Ahmad"));
