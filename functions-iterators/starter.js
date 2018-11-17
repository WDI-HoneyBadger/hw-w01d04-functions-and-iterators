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
This will help us track your progress and it will give you practice writing
 good commit messages!! 
*/

/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */
/* ======================= WRITE YOUR ANSWERS HERE!!!!! =============== */
/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */

// PART 0: Just DO it!!

function justDoIt(userName) {

  return `${userName}, JUST DO IT!!!!!!!`;

}


// PART 1: Big or Small String?

function bigOrSmallString(userName) {

  return userName.length > 10 ? "This word is looooooooong! X_X" : "This word is short <3_<3";

}

// PART 2: Odd or Even String Length?

function oddOrEvenString(userName) {

  return userName.length % 2 == 0 ? "This string's length is TOTALLY even!! ;)" : "This string's length is odd O_o";

}

// PART 3: Median

function medianOfArray(arr) {

  console.log(arr.sort(function (a, b) { return a - b }));

  var mid = arr.length / 2;

  return mid % 1 ? arr[mid - 0.5] : (arr[mid - 1] + arr[mid]) / 2;

}


// PART 4: Sum Array

function sumArray(arr) {

  var total = arr.reduce(function (accum, curr) {

    return accum + curr;
  }, 0);

  return arr == 0 ? 0 : total;

}

// PART 5: Vowel Count

function vowelCount(str) {

  return (str.match(/[aeiou]/ig) || []).length;

}


// PART 6: Initials

function Initials(name) {

  var str = "";

  return name[name.indexOf(" ") + 1] == name[name.lastIndexOf(" ") + 1] ?
    str = name[0] + name[name.lastIndexOf(" ") + 1]
    : str = name[0] + name[name.indexOf(" ") + 1] + name[name.lastIndexOf(" ") + 1];

}

// PART 7: Days of the week

var answer = prompt("What day is today?");

if (answer == "Monday") {
  alert("Energize!!!!");

} else if (answer == "Tuesday") {

  alert("Just getting started!");

} else if (answer == "Wednesday") {

  alert("Hump Hump!");

} else if (answer == "Thursday") {

  alert("Almost there!!!");

} else if (answer == "Friday" || answer == "Saturday" || answer == "Sunday") {
  alert("Weweeeeee!");

} else {

  alert("Huh, sorry didn't get that?");
}


// PART 8: Let's take the Subway

var slector = prompt("Please select on what train would you choose: \nThe (L) Train \nThe (N) Train \nThe (S)ix Train ");

switch (slector) {

  case "L":

    alert("You select the L Train and you will have the following stops: \n8th Ave \n6th Ave \nUnion Square \n3rd Ave \n1st Ave \nBedford Ave");

    break;

  case "N":

    alert("You select the N Train and you will have the following stops: \nTime Square \nHerald Square \n28th St \n23rd St - DAPS Nexus  \nUnion Square \n8th St");

    break;

  case "S":

    alert("You select the S Train and you will have the following stops: \nGrand Central \n33rd St  \n28th St \n23rd St \nUnion Square \nAstor Place");

    break;

}

alert("Thank you :)");

// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];

function truthyFalsy(arr) {
  
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      console.log(`${arr[i]} is trueth - y`);
      
    } else {
      console.log(`${arr[i]} is False - y`);
     
    }
  }
}

truthyFalsy(arr);

// BONUS: Double X Counter

function countXx (str){
  
  var count = 0;
  for (i = 0; i < str.length; i++) {

    if (i !== str.length -1) {

      if (str[i] == 'x' && str[i + 1]) {

        count ++;
        
      }
      
    }
        
  }

  return count;

}

// BONUS Two-Dimensional Array



function twoArray(number){
  var arr = [];

  for (let i = 0; i < number; i++) {

    var temp = [];

    for (let j = 0; j < number; j++) {
      
      if (i === j) {

        temp.push(1);

      } else temp.push(0);
    }
    
    arr.push(temp);
  }
  return arr;
}

/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');