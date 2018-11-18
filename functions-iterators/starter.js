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

  console.log(`${name} JUST DO IT!`);
}

justDoIt("Khalid");

// PART 1: Big or Small String?

function bigOrSmallString(string){

  if(string.length > 10){
    console.log("This word is loooooong!");

  }else{
    console.log("This word is short 😬");
  }
}

bigOrSmallString("Sunday fun day ^_^");

// PART 2: Odd or Even String Length?

function oddOrEvenString(string){

  if(string.length % 2 ===0){

    console.log("This string length is TOTALLY even!");
  }else if(string.length % 2 > 0 ){

    console.log("This string's length is odd..");
  }
}

oddOrEvenString("General Assembly");

// PART 3: Median
var myArray = [221,46,42,988,9]

function medianOfArray (){


 var sortedArray = myArray.sort(function(a,b){

  return a - b;


});

var theMiddle = Math.floor(sortedArray.length  / 2);

console.log(sortedArray);


  if(sortedArray.length % 2 === 0) {
    console.log("The Median is " +(sortedArray[theMiddle - 1]  + sortedArray[theMiddle]));
  } else {
    console.log("The Median is "+ sortedArray[theMiddle]);
}
}





medianOfArray();


// PART 4: Sum Array

var sumArray = [44, 22, 33].reduce(sum, 0);

function sum(a, b) {
    return a + b;
}

console.log(sumArray);

// PART 5: Vowel Count

function vowelCount(str) {
  var matches = str.match(/[aeiou]/gi);

  if(matches.includes("i") ||matches.includes("o") || matches.includes("a") || matches.includes("e") || matches.includes("u") ){

    return matches.length;
  }else{

    return 0;
  }

}

console.log(vowelCount("Honey Badger"));



// PART 6: Initials

function initials(personName){

  var ini = personName.match(/\b(\w)/g);

  var str1 = ini.join();
  console.log(ini);
}

initials("General Assembly!");

// PART 7: Days of the week

function dayss(){

var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

if(n == "Monday"){

  window.alert("Energize");
}else if(n == "Tuesday"){

  window.alert("Just getting started!");

}else if(n=="Wednesday"){

  window.alert("Hump Hump!");
}else if(n == "Thursday"){

  window.alert("Almost there!");
}else if(n == "Friday" || n=="Saturday" || n=="Sunday"){

  window.alert("Weeeeeee!");
}}

//dayss();




// PART 8: Let's take the Subway

function train(){

  var selecion = window.prompt("Please select one of the following: \n \n The (L) Train, The (N) Train, The (S)ix Train");

  if(selecion == "L" || selecion == "l"){

    alert("The Stops:\n \n- 8th Ave \n- 6th Ave \n- Union Square \n- 3rd Ave \n- 1st Ave \n- Bedford Ave");
  
  }else if(selecion == "n" || selecion == "N"){
    alert("The Stops:\n \n- Times Square \n- Herald Square \n- 28th St \n- 23rd St - DAPS Nexus \n- Union Square \n- 8th St");

  }else if(selecion == "s" || selecion == "S"){
    alert("The Stops:\n \n- Grand Central \n- 33rd St \n- 28th St - 23rd St \n- Union Square \n- Astor Place");

  }
}

//train();

// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];



var counterX =0;
// BONUS: Double X Counter
function countXx(string){

  
  for (var i =0; i<=string.length; i++){
    if(string[i] == "x"  || string[i] == ("X") ){

      counterX++;
    }
  }

  console.log(counterX);
   if(counterX % 2 ===0){

     counterX =  counterX / 2;

     console.log(`You have ${counterX} pairs of x`);

   }else if(counterX % 2 != 0){

    counterX = (counterX - 1) / 2;

    console.log(`You have ${counterX} pairs of x`);

  }}
  



countXx("XXX Movie");


// BONUS Two-Dimensional Array



/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');