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
   
  return (name+ ", JUST DO IT");
  }

  console.log(justDoIt("Noorah"));

// PART 1: Big or Small String?

function bigOrSmallString(word){
if(word.length >10){
  return "This word is loooooong!";
}
else{
  return "This word is short 😬";  
}
}

console.log(bigOrSmallString("noorah"));
console.log(bigOrSmallString("Weekend is the best thing ever"));

// PART 2: Odd or Even String Length?

function oddOrEvenString(string){
  if ((string.length %2 )== 0){
     return "This string length is TOTALLY even!";
    }
  else{
      return "This string's length is odd..";
  }
}

console.log(oddOrEvenString("Noorah"));

// PART 3: Median


function median(nums) {
  var median = 0;
  var numsLen = nums.length;
  nums.sort();
  if ( numsLen % 2 === 0 ) {
      median = (nums[numsLen / 2 - 1] + nums[numsLen / 2]) / 2;
  } 
  else { 
      median = nums[(numsLen - 1) / 2];
  }

  return median;
}

console.log(median([1,2,6,5,4]));

// PART 4: Sum Array



var sumArray = function(arr){
var s = 0;
for(var i=0; i < arr.length; i++) {
  s += arr[i];
}
    return s;
  }

console.log(sumArray([1,2,3,4,5]));

// PART 5: Vowel Count

function vowelCount(str) {
  str = str.toLowerCase();
  var count=0;
  for(var i=0; i < str.length; i++){
      if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
          count++;
      }
     
  }
  return count;
}

console.log(vowelCount("It's and Apple"));

// PART 6: Initials


var getInitials = function (name) {
  var parts = name.split(' ') ;
  var initials = '';
  for (var i = 0; i < parts.length; i++) {
    if ((parts[i].length > 0 ) && (parts[i] !== '')) {
      initials += parts[i][0]
    }
  }
  return initials
}

console.log(getInitials('Noorah Ahmed Alghamdi'));


// PART 7: Days of the week

// Tried making the computer knows the day of today
var d = new Date();
var weekday = [ "Sunday" , "Monday" , "Tuesday","Wednesday","Thursday","Friday","Saturday"];
var today = weekday[d.getDay()];

function dayOfWeek() {
var day = prompt("Please write the day", today);
if(day == "Monday")
{alert("Energize!");}

else if(day == "Tuesday")
{alert("Just getting started!");}

else if(day == "Wednesday")
{alert("Hump Hump!");}

else if(day == "Thursday")
{alert("Almost there!");}

else if(day == "Friday")
{alert("Weeeeeee!");}

else if(day == "Saturday")
{alert("Weeeeeee!");}

else if(day== "Sunday")
{alert("Weeeeeee!");}

else
{alert("Huh, sorry didn't get that?");
}

}
//dayOfWeek();  



// PART 8: Let's take the Subway

 // way 2 : using function
  
 function subway() {
  var sub = prompt("Please  choose between The (L) Train, The (N) Train, The (S)ix Train");{
  if(sub == "L")
  {alert("L train \n Stops: \n 8th Ave \n 6th Ave \n Union Square \n 3rd Ave \n 1st Ave \n Bedford Ave");
}
  
  else if(sub == "N")
  {alert(" N train \n Stops: \n Times Square \n Herald Square \n 28th St \n 23rd St - DAPS Nexus \n Union Square \n 8th St");}
  
  else if(sub == "S")
  {alert(" S train \n Stops: \n Grand Central \n 33rd St \n 28th St \n 23rd St \n Union Square \n Astor Place");}

  else
  {alert("Please choose between L,N,S trains");}
}
alert("Thank you");
  }

  //subway(); 


// Using Switch 
  function subway1() {
    var sub = prompt("Please  choose between The (L) Train, The (N) Train, The (S)ix Train");{
    switch(sub){
    case 'L': {alert("L train \n Stops: \n 8th Ave \n 6th Ave \n Union Square \n 3rd Ave \n 1st Ave \n Bedford Ave");
    break; } 
    
  case 'N': {alert(" N train \n Stops: \n Times Square \n Herald Square \n 28th St \n 23rd St - DAPS Nexus \n Union Square \n 8th St");
  break;}

  case 'S': {alert(" S train \n Stops: \n Grand Central \n 33rd St \n 28th St \n 23rd St \n Union Square \n Astor Place");
  break;}
  }
  alert("Thank you");
    }
      }
    //subway1();


// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];

function truthyFalsey(arr){
  for(var i = 0; i < arr.length; i++){
   if(arr[i])
    {console.log((arr[i]) + " is truth-y ");}
    else
   { console.log((arr[i]) + " false-y");}
}

}
truthyFalsey(arr);

// BONUS: Double X Counter

var countXx = function (word) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if ((word.charAt(i) === 'x') &&  (word.charAt(i + 1) === 'x')) {
        count++;
    } 
  }
  return count;
}

console.log( countXx("xxxx") );


// BONUS Two-Dimensional Array


/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');