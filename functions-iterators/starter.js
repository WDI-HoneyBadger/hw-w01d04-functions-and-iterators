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
console.log(' ');
console.log('PART 0');
function justDoIt(yourName){

  return `${yourName} Just DO it!!`;
}
 console.log(justDoIt('Yahya'));

// PART 1: Big or Small String?
console.log(' ');
console.log('PART I');
function bigOrSmallString(word){
   if(word.length < 10){
    return `${word} is too short`;
  } else {
    return `${word} is too loooong`;
  }
}

console.log(bigOrSmallString('hahahahahahahahah'));
console.log(bigOrSmallString('hi'));


// PART 2: Odd or Even String Length?
console.log(' ');
console.log('PART II');
function oddOrEvenString(word){
  if(word.length %2 != 0){
  return "the string's length is Odd";
  } else {
    return "the string length is TOTALLY even !!"
  } 
}

console.log(oddOrEvenString('yahya'));
console.log(oddOrEvenString('jana'));


// PART 3: Median
 console.log(' ');
console.log('PART III');
function medianOfArray(arr){
  var half_length = Math.ceil(arr.length / 2); // to handle decimals 
  if(arr.length%2 == 0){
    var leftSide = arr.splice(0,half_length); // array 
    var rightSide = arr;
    var median1 = leftSide.length - 1;

    return `The array is even so your medians are : ${leftSide[median1]} AND ${rightSide[0]}`;
  } else {

   return `The array is odd so your median is : ${arr[half_length - 1]}`; 
  }
}

arr = [1,3,4,6,77,33,45,90];
arr1 = [1,2,3,4,5,6,7];
var medianOdd = medianOfArray(arr1);
var median = medianOfArray(arr);
console.log(median); 
console.log(medianOdd); 
 


// PART 4: Sum Array
console.log(' ');
console.log('PART IV');

var sum = 0;
function sumArray(arr){
  if (arr.length === 0){
    return 0;

  }else{
    for (var i = 0; i < arr.length; i++){
      sum += arr[i];
      
    }
    return `The sum of [${arr}] is :${sum} `;
  }
}
 
arr2 = [1,2,3,4];
console.log(sumArray(arr2));


// PART 5: Vowel Count
console.log(' ');
console.log('PART V');
var totalVowels = 0; // Global var
var vowels = ['a','e','u','o','i'];
function vowelCount(word){
for(var i = 0; i < word.length; i++){
  for (var j = 0; j < vowels.length; j++){
      if(word[i] === vowels[j]){
        totalVowels++;
      }
  }

   /*  if(word[i] == 'a' || word[i] == 'e'|| word[i] == 'i' || word[i] == 'o' || word[i] == 'u' ){
      totalVowels ++;
    } */
  }
  return `the number of vowels in ${word} is = ${totalVowels}`;
}

console.log(vowelCount('aaa'));

// PART 6: Initials
console.log(' ');
console.log('PART VI');
 function initials(name){
   var fullName = name.split(' ');
   var inital = '';
   for(var i = 0; i < fullName.length; i++){
      inital += fullName[i].charAt(0);
   }
   var capitalizedIni = inital.toUpperCase();
   return capitalizedIni;
}

console.log(initials('yahya mohammed aloyoni'));

// PART 7: Days of the week
/* var message;
 var answer = prompt("What Day is't today ? ");

   switch(answer) {
    case 'monday':
    message = 'Energize!';
    break;
    case 'tuesday':
    message = 'Just getting started!';
    break;
    case 'wednesday':
    message = 'Hump Hump!';
    break;
    case 'thursday':
    message = 'Almost there!';
    break;
    case 'friday':
    case 'saturday':
    case 'sunday':
    message = 'Weeeee!';
    break;
    default:
    message = "Huh, sorry did't get that?";
    break;
  }
    alert(message);
  */
 

 

// PART 8: Let's take the Subway

function subway(){
var train = prompt("choose one of the trains: The (L) Train, The (N) Train, The (S) ix Train");
var trainsDetails = '';
switch(train){
  case 'L':
  trainsDetails = 
  `L train stops at: 
  * 8th Ave
  * 6th Ave
  * Union Square
  * 3rd Ave
  * 1st Ave
  * Bedford Ave`;
  break;
  case 'N':
  trainsDetails =
  ` N train stops at: 
* Times Square
* Herald Square
* 28th St
* 23rd St - DAPS Nexus
* Union Square
* 8th St
  `;
  break;
  case 'S':
  trainsDetails = 
  `
    S train stops at:
* Grand Central
* 33rd St
* 28th St
* 23rd St
* Union Square
* Astor Place  

  `
  break;
  default: alert("enter one of the provided trains");

}
  alert(trainsDetails);
  alert('Thanks, Safe travels (:!');
}
//subway();
// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];
// falsies: undefined, null, NaN, 0, "" and false
function truthyFalseythat(arr) {
  for(var i = 0; i < arr.length; i++){
     if (!arr[i]){
      console.log(`${arr[i]} is falsey`);  
    }
          if(arr[i]){
            console.log(`${arr[i]} is truthy`);
          }
    }
  }

  truthyFalseythat(arr);


// BONUS: Double X Counter

function countXx(str){
  var xcounter = 0;
  for(var i = 0; i < str.length; i++){
    var curr = str[i];
    var next = str[i + 1];
    if(curr === 'x' && next ==='x'){
      xcounter++;
    }

  }
  return xcounter;
}

 console.log(countXx('abcxx')); // 1
 console.log(countXx('xxx')); // 2
 console.log(countXx('xxxx'));  // 3
// BONUS Two-Dimensional Array
function arrayCreator(n){
  var arr1 = [], arr2;
  for (var i = 0; i < n; i++) {
    
    for (var j = 0, arr2 = []; j < n; j++) {
      // arr[i][j] =  0;
      arr2.push(0);
    }
    arr1.push(arr2);
  }
  console.log(arr1);
}

// arrayCreator(5);

// SUPER MEGA BONUS!!!!!!

function arrayCreator2(n){
  var arr1 = [], arr2;
  for (var i = 0; i < n; i++) {  
    for (var j = 0, arr2 = []; j < n; j++) {
      // arr[i][j] =  0;
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

arrayCreator2(10);
/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪')


