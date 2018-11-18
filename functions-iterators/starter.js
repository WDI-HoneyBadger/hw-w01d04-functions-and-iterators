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
  return (`${name}, JUST DO IT`);
}

// console.log(justDoIt('Nada'));


// PART 1: Big or Small String?
function bigOrSmallString(word){
  if (word.length > 10){
    console.log('This word is loooooong!');
  } else {
    console.log('This word is short 😬');
  }
}

// bigOrSmallString("this is Nada can I help");
// bigOrSmallString('Hola')


// PART 2: Odd or Even String Length?
function oddOrEvenString(myString){
  if (myString.length % 2 === 0){
    return ('This string length is TOTALLY even!');
  } else {
    return ('This string length is odd..');
  }
}

// console.log(oddOrEvenString('Lalala haha'));
// console.log(oddOrEvenString('Lalala'));

// PART 3: Median
var myArr1 = [3, 4, 7, 2, 9];
var myArr2 = [1, 2, 3, 4, 5, 6, 8, 9];

function medianOfArray(arr){
  arr.sort(function(a,b) {return a - b;});
  var half = Math.floor(arr.length /2);
  
  if (arr.length % 2){
    return arr[half];
  } else {
    return (arr[half-1] + arr[half]) / 2.0;
    }
}

// console.log(medianOfArray(myArr1));
// console.log(medianOfArray(myArr2));


// PART 4: Sum Array
var sumArr = [2, 8, 1, 4];

function sumArray(myArr){
  var sumOfArray = 0;
  for (var i = 0; i < myArr.length; i++){
    sumOfArray = sumOfArray + myArr[i];
  }
  return sumOfArray;
}

// console.log(sumArray(sumArr));


// PART 5: Vowel Count
function vowelCountstr(str){
  var numberOfVowel = str.match(/[aeiou]/gi);
  return numberOfVowel === null ? 0 : numberOfVowel.length;
}

// console.log(vowelCountstr('Hello Word!'));
// console.log(vowelCountstr('Never maind'));


// PART 6: Initials
function initials(name){
  var splitName = name.split(" ");
  var nameInitials = '';

  for(var i = 0; i < splitName.length; i++){
    nameInitials += splitName[i].charAt(0);  
  }
  return nameInitials.toUpperCase();
}

// console.log(initials('nada abdulkarem asghar'));
// console.log(initials(prompt('Please enter your name', 'Enter Your Name Here')));


// PART 7: Days of the week
function dayOfTheWeek() {
  var day = prompt('Please enter what day is today!', 'Enter the day here');

  switch (day.toLowerCase()) {
    case 'monday':
      alert('Energize!');
      break;
    case 'tuesday':
      alert('Just getting started!');
      break;
    case 'wednesday':
      alert('Hump Hump!');
      break;
    case 'thursday':
      alert('Almost there!');
      break;
    case 'friday':
    case 'saturday':
    case 'sunday':
      alert('Weeeeeee!');
      break;
    default:
      alert("Huh, sorry didn't get that?");
  }
}

// dayOfTheWeek();


// PART 8: Let's take the Subway
function subwayStops(){
  var trainL = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave', 'Bedford Ave'];
  var trainN = ['Times Square', 'Herald Square', '28th St', '23rd St - DAPS Nexus', 'Union Square', '8th St'];
  var trainS = ['Grand Central', '33rd St', '28rd St', '23rd St', 'Union Square', 'Astor Place'];
  var train = prompt('Choose the train you want! \nThe (L) Train \nThe (N) Train \nThe (S)ix Train', 'Please select the train');
  
  switch(train.toLowerCase()){
    case 'l':
      alert('L train:\n\n' + trainL.join('\n'));
      alert('Thank You');
    break;
    case 'n':
      alert('N train:\n\n' + trainN.join('\n'));
      alert('Thank You');
    break;
    case 's':
      alert('S train:\n\n' + trainS.join('\n'));
      alert('Thank You');
    break;
    default:
      alert('Invalid Input');
  }
}

// subwayStops();


// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];

function truthyFalsey(arrayInput){
  for(var i = 0; i < arrayInput.length; i++){
    if (arrayInput[i]){
      console.log('Truthy');
    } else {
      console.log('Falsey');
    }
  }
}

// truthyFalsey(arr);


// BONUS: Double X Counter
function countXx(str){
  var count = 0;
  for(var i = 0; i < str.length; i++){ 
      if (str[i] ==='x' && str[i+1] === 'x'){
        count ++;
      }
  }
  return count;
}

// console.log(countXx('abcxx'));
// console.log(countXx('xxx'));
// console.log(countXx('xxxx'));


// BONUS Two-Dimensional Array
function makeArray(num){
  var twoDimentionalArray = [];
  
  for(var i = 0; i < num; i++){
    var tempArray = [];
    for(var j = 0; j < num; j++){
      if (i === j){
        tempArray.push(1);
      }else{
        tempArray.push(0);
      }
    }
    twoDimentionalArray.push(tempArray);
  }
  console.log(twoDimentionalArray);
  return twoDimentionalArray;
}

// makeArray(6);

/* connection checker console log */
// console.log('starter.js is connected! Let\'s get to work! 💪');