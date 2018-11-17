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
  return `${name}, JUST DO IT!`;
}

// test PART 0
// console.log(justDoIt('Moroj'));


// PART 1: Big or Small String?
function bigOrSmallString(testLength){
  if (testLength.length > 10){
    return `This word is loooooong!`;
  } else {
    return `This word is short 😬`;
  }
}

// test PART 1
// console.log(bigOrSmallString('Moroj'));


// PART 2: Odd or Even String Length?
function oddOrEvenString(testLength){
  if (testLength.length % 2 === 0){
    return `This string length is TOTALLY even!`;
  } else {
    return `This string's length is odd.`;
  }
}

// test PART 2
// console.log(oddOrEvenString('Moroj'));


// PART 3: Median
function medianOfArray(arr){
  arr = arr.sort();
  var getLength = (arr.length) / 2;
  // console.log(getLength);
  getLength = Math.floor(getLength);
  if (getLength % 2 === 0){
    // console.log((arr[g-1]+arr[g])/2);
    return (arr[getLength-1]+arr[getLength])/2;
  } else {
    return arr[getLength];
  }
}

// test PART 3
// console.log(medianOfArray([1,3,3,6,7,8,9]));
// console.log(medianOfArray([1,2,3,4,5,6,8,9]));


// PART 4: Sum Array
function sumArray(arr){
  if (sumArray.length === 0){
    return 0;
  } else {
    return arr.reduce(function(accum,num){
      return accum+num;
    },0);
  }
}

// test PART 4
// console.log(sumArray([]));
// console.log(sumArray([1,2,3]));


// PART 5: Vowel Count
function vowelCount(countVowel){
  var count = 0;
  for (var i = 0 ; i<countVowel.length ; i++){
    if (countVowel[i] === "a" || countVowel[i] === "e" || countVowel[i] === "i" ||  countVowel[i] === "o" || countVowel[i] === "u"){
      count++;
    }
  }
  return count;
}

// test PART 5
// console.log(vowelCount('Moroj'));


// PART 6: Initials
function initials(fullName){
  var name = fullName.split(' ');
  var getinitials='';
  name.forEach(function(firstLetter){
    getinitials += firstLetter[0];
  });
  console.log(getinitials);
}

// test PART 6
// initials('Moroj Alharbi');


// PART 7: Days of the week
function dayOfTheWeek(){
  var day = prompt("What day is today?");
  var message;

  if (day === 'Monday'){
    message = 'Energize!';
  } else if ( day === 'Tuesday'){
    message = 'Just getting started!';
  } else if ( day === 'Wednesday'){
    message = 'Hump Hump!';
  } else if ( day === 'Thursday'){
    message = 'Almost there!';
  } else if ( day === 'Friday' || day === 'Saturday' || day === 'Sunday'){
    message = 'Weeeeeee!';
  } else {
    message = "Huh, sorry didn't get that?";
  }
  alert(message);
}

// test PART 7
// dayOfTheWeek();


// PART 8: Let's take the Subway
function subway(){
  var day = prompt("Select your Train. The (L) Train, The (N) Train, The (S)ix Train");
  var output;
  switch(day) {
    case "L":
      output = 'The (L) Train: \n 8th Ave \n 6th Ave \n Union Square \n 3rd Ave \n 1st Ave \n Bedford Ave';
        break;
    case "N":
      output = 'The (N) Train: \n Times Square \n Herald Square \n 28th St \n 23rd St - DAPS Nexus \n Union Square \n 8th St';
        break;
    case "S":
      output = 'The (S)ix Train: \n Grand Central \n 33rd St \n 28th St \n 23rd St \n Union Square \n Astor Place';
        break;
    default:
      output = 'Sorry';
        break;
}
alert(output);
alert('Thank You');
}

// test PART 8
// subway();


// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];

function truthyFalsey(arr){
  arr.forEach(function(element){
    if (element === null || element === '' || element === 0 || element === false || element === undefined){
      console.log(`${element} is Falsey value`);
    } else {
      console.log(`${element} is Truthy value`);
    }
  });
}

// test PART 9
// truthyFalsey(arr);


// BONUS: Double X Counter
function countXx(word){
  var count= 0;
  for (var i = 0 ; i<word.length ; i++){
    if (word[i] ==='x' && word[i+1] === 'x'){
      count++;
    }
  }
  console.log(count);
}

// test BONUS: Double X Counte
// countXx('abcxx');
// countXx('xxx');
// countXx('xxxx');


// BONUS Two-Dimensional Array
function makeArray(n){
  var arr1 = [];
  for (var i = 0 ; i<n ; i++){
    var arr2 = [];
    for (var j = 0 ; j<n ; j++){
      if (i === j){
        arr2.push(1);
      } else {
        arr2.push(0);
      }
    }
    arr1.push(arr2);
  }
  console.log(arr1);
}

// test BONUS: Two-Dimensional Array
// makeArray(4);
/* => [[1 0 0 0],
       [0 1 0 0],
       [0 0 1 0],
       [0 0 0 1]] */
//  makeArray(5);
 /* => [[1,0,0,0,0],
        [0,1,0,0,0],
        [0,0,1,0,0],
        [0,0,0,1,0],
        [0,0,0,0,1]] */


/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');