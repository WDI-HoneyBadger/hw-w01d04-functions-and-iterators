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

function justDoIt (name){
    console.log(name, 'just do it!')
}
justDoIt('AK');


// PART 1: Big or Small String?

function bigOrSmallString(word){
    if (word.length > 10){
        console.log('This word is loooooong!');
    } else {
        console.log('This word is short');
    }

}

// PART 2: Odd or Even String Length?

function oddOrEvenString (word) {
    if (word.length %2 == 0)
          {console.log('It is even number');
          }
   
      else {
          (word.length %2 != 1)
          console.log('it is odd number');



// PART 3: Median

function medianOfArray(num){

    var lengthNum =0;
    for (var i = 0; ; i++){
        if( num[i]){
            lengthNum++;  
        } else {
            break;
        }

    }

return lengthNum;

}

// PART 4: Sum Array

function sumArray(arr){
    return arr.reduce(function(a, b){
      return a+b;
    },0);
  }
  console.log(sumArray([1,2,3]));
  console.log(sumArray([]));


// PART 5: Vowel Count

function vowelCount(str) {
    return str.match(/[a/e/i/o/u/y]/g).length
};
console.log(vowelCount('hello world'));  



// PART 6: Initials

function initials (name){
    return name.match(/[N/P/H]/g);  
}; 
console.log(initials('Neil Patrick Harris'));
console.log(initials('Neil Harris'));
console.log(initials('Neil')); 



// PART 7: Days of the week

var daysOfTheWeek = {
    days:[ 'Sunday', 'Monday', 'Teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
 
function today(thisDay){

    if (thisDay == daysOfTheWeek.days[1]) {
        console.log('Energize');

    } else if (thisDay == daysOfTheWeek.days[2]) {
        console.log('Just getting started!');

    } else if (thisDay == daysOfTheWeek.days[3]) {
    console.log('Hump Hump!');

    } else if (thisDay == daysOfTheWeek.days[4]) {
        console.log('Almost there!');

    } else if (thisDay == daysOfTheWeek.days[5] || thisDay == daysOfTheWeek.days[6] || thisDay == daysOfTheWeek.days[0]) {
            console.log('Weeeeeee!');

    } else {
        console.log("Huh, sorry didn't get that?");


            }
}

today('Monday');
today('Teusday');
today('Wednesday');
today('Thursday');
today('Friday');
today('Saturday');
today('Sunday');
today('dkjahkfahsdjkfkadsfsdh');



// PART 8: Let's take the Subway

var trains = prompt("The (L) Train, The (N) Train The (S)ix Train ");

 switch (trains) {
 
    case "L":
    alert('8th Ave, 6th Ave, Union Square, 3rd Ave, 1st Ave, Bedford Ave');
 
     break;
     
     case "N":
     alert('Time Square, nHerald Square, 28th St, 23rd St - DAPS Nexus, Union Square, 8th St');
 
     break;

     case "S":
     alert('Grand Central, 33rd St, 28th St, 23rd St, Union Square, Astor Place');
 
     break;
 
 }
 
 console.log(alert('Thank you'));  



// PART 9: Truth - y & False -y Checker

var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];
function truthyFalsy(arr){
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        console.log(arr[i] + 'True-y');
        
      } else {
        console.log(arr[i] + "False-y');
      }
    }
  }
    truthyFalsy(arr);




// BONUS: Double X Counter



// BONUS Two-Dimensional Array




/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');

 

