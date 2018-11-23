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

function justDoIt(name){
  console.log(`${name}, JUST DO IT !!`);
}

// PART 1: Big or Small String?

function bigOrSmallString (myName){
  if (myName.length > 10){
    console.log (" This Worf id loooong 😬")
  }else{ console.log (" This Word is Small");
  }
  
} console.log(bigOrSmallString('myName'));

// PART 2: Odd or Even String Length?

function oddOrEvenString (myString){
  if (myString.length %2==0){
    console.log ("This String is TOTALLY Even");
}else { if (myString.length%2 != 0)
console.log (" This is Odd ");
}
}


// PART 3: Median

function medianOfArray (numArray){

sort(numArray);

if (numArray.length % 2 == 0){
    console.log(numArray[numArray.length/2] + numArray[numArray.length/2 - 1])/2;
}else{
    console.log([numArray.length/2]);
}}

// PART 4: Sum Array

function sumArray (arr){

  for(var i;arr.length !=0; i++ ){
    console.log(arr.length[i])
  }
  
}

// PART 5: Vowel Count

/* function vowelCont (myVowel){
  for( var i=0; i< myVowel.length)
} */

// PART 6: Initials



// PART 7: Days of the week


var weekDay = prompt ("what is today?");
function theday (){
  if (theday == "Sunday"){
    return " Weeeeeee!!"
  }else if( theday ==  "Monday"){
    return " Energize!"
  }else if( theday ==  "Tuesday"){
    return " Just getting Statrted"
}else if( theday ==  "Wednesday"){
  return " Hump Hump!"
}else if( theday ==  "Thursday"){
  return " Almost there!!"
}else if( theday ==  "Friday"){
  return " Weeeeeee!"
}else if( theday ==  "Saturday"){
  return " Weeeeeee!"
} else {
  return "Huh, sorry didn't get that?"
}
} 
// PART 8: Let's take the Subway



// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];




// BONUS: Double X Counter



// BONUS Two-Dimensional Array




/* connection checker console log */
/* console.log('starter.js is connected! Let\'s get to work! 💪'); */