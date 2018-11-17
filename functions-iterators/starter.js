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

function justDoIt(str){
  alert(`${str} JUST DO IT!!!`);
}
justDoIt('Jack');
justDoIt(9);


// PART 1: Big or Small String?
function bigOrSmallString(str){
  if (str.length >10){
    return 'This word is loooooong!';
  } else {
    return 'This word is short 😬';
  }
}
console.log(bigOrSmallString('maaaaaaaaaaay'));


// PART 2: Odd or Even String Length?
function oddOrEvenString(str){
  if  (typeof "" ){
    if (str.length % 2 === 0){
      return "This string length is TOTALLY even!";
    } else {
      return "This string's length is odd..";
    }
  } else {
    return 'not a string!'
  }
}
console.log(oddOrEvenString(9));


// PART 3: Median
var arrMid = [1, 2, 3, 4, 5, 6, 7, 8];
function medianOfArray(arr){
  var middle = arr[Math.floor(arr.length / 2)];
  if (arrMid % 2 !== 0){
    return `${middle}`;
  } else {
    return 'Nothing';
  }

}


// PART 4: Sum Array
function sumArray(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum
}
console.log(sumArray());


// PART 5: Vowel Count
var strText = "I love you so so so so so much!";
function vowelsCount(strText) {
  return strText.match(/[aeiou]/g).length;
}
console.log(vowelsCount(strText));


// PART 6: Initials
var personName = ('Neil Patrick Harris');
var getInitial = function (personName) {
  var names = personName.split(' ')
  var initials = ''
  for (var i = 0; i < names.length; i++) {
    if (names[i].length > 0 && names[i] !== '') {
      initials += names[i][0]
    }
  }
  return initials
}
console.log(getInitial(personName));


// PART 7: Days of the week
var daysOfTheWeek = prompt("What day is it today?");
switch(daysOfTheWeek) {
  case "Monday":
    alert ("Energize!");
    break;
  case "Tuesday":
    alert ("Just getting started!");
    break;
  case "Wednesday":
    alert ("Hump Hump!");
    break;
  case "Thursday":
    alert ("Almost there!");
    break;
  case "Friday":
  case "Saturday":
  case "Sunday":
    alert ("Weeeeeee!");
    break;
  /* case "Saturday":
    alert ("Weeeeeee!");
    break;
  case"Sunday":
    alert ("Weeeeeee!");
    break; */
  default:
    alert ("Huh, sorry didn't get that?");
    break;
}


// PART 8: Let's take the Subway
var rightSubway = prompt("Which train do you want to take? (L) Train, (N) Train, (S) Train");
switch(rightSubway) {
  case "L":
  case "l":
    alert ("You chose the L train, which have those stops:\n  8th Ave\n  6th Ave\n  Union Square\n  3rd Ave\n  1st Ave\n  Bedford Ave");
    break;
  case "N":
  case "n":
    alert ("You chose the N train, which have those stops:\n  Times Square\n  Herald Square\n  28th St\n  23rd St - DAPS Nexus\n  Union Square\n  8th St");
    break;
  case "S":
  case "s":
    alert ("You chose the S train, which have those stops:\n  Grand Central\n  33rd St\n  28th St\n  23rd St\n  Union Square\n  Astor Place");
    break;
  default:
    alert ("I don't get it!");
    break;
}

alert("Thanks for using the subway!");

// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', 'may', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];
function truthyFalsey(arr){
  for(var i = 0; i < arr.length; i++){
    if (arr[i]){
      console.log(`${arr[i]} is truthy`);
    } else {
      console.log(`${arr[i]} is falsey`);
    }
  }
 }

truthyFalsey(arr);

// BONUS: Double X Counter
function countXx(str){
  var counter = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] == 'x' && str[i+1] == 'x'){
     counter++;
    }
  }
  return counter;
}


console.log(countXx('abcxx'));
console.log(countXx('xxxxxxxx'));
console.log(countXx('xxxx')); 

// BONUS Two-Dimensional Array
/* function makeArr(x,y) {
  var arr = [];
  for(var i = 0; i < y; i++) {
      arr.push(Array(x).fill(0));
  }
  return arr; 
}
console.log(makeArr(4,5)); */
function makeArray(n){
  var arr1 = [];  
  for (var i = 0; i < n; i++) {
    var arr2 = [];
    for (var j = 0; j < n; j++) {
      arr2.push(0);
    }
    arr1.push(arr2);
  }
  console.log(arr1);
}

makeArray(4);
makeArray(5);


// SUPER MEGA BONUS!!!!!!
function mkArr(n){
  var arr1 = [];
  for (var i = 0; i < n; i++) { 
    arr2 = []; 
    for (var j = 0; j < n; j++) {
      if (i === j) {
        arr2.push(1);
      } else {
        arr2.push(0);
      }
    }
    arr1.push(arr2);
  }
  console.log(arr1);
}

mkArr(4);
mkArr(5);

/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');