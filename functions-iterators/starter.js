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
  return `${name} Just Do it ` ;
  
 }

console.log(justDoIt('Aishah'));


// PART 1: Big or Small String?

 function bigOrSmallString(string){
  if(string.length > 10){
    console.log(`${string} , "This word is loooooong!"`);   
  } else {
       console.log(`${string} , "TThis word is short"`);   
 
   }

 }

bigOrSmallString('Aishah');
bigOrSmallString('sdfhjkljhygetfmnbsw');

// PART 2: Odd or Even String Length?
function oddOrEvenString(string) {
  if(string.length % 2 === 0) {
    console.log(`${string} This string length is TOTALLY even!`);
  } else {
    console.log(`${string} This string's length is odd`);
  }
}
oddOrEvenString('maram');
// PART 3: Median

  
  
var values = [2, 56, 3, 41, 0, 4, 100, 23];
values.sort((a, b) => a - b);
 lowMiddle = Math.floor((values.length - 1) / 2);
 highMiddle = Math.ceil((values.length - 1) / 2);
 median = (values[lowMiddle] + values[highMiddle]) / 2;
  console.log(median);


// PART 4: Sum Array
//sumArray
var arr = [1, 2, 3].reduce(sumArray, 0);
function sumArray(a, b) {
    return a + b 
}
console.log(arr);


// PART 5: Vowel Count

function vowelCount(str){
  var a =0;
  var i =0;
  var u =0;
  var e =0;
  var o =0;
for(var y =0 ; y<str.length ; y++){
switch(str.charAt(y)){
  case 'a':
  a++;
  break;
  case 'i':
  i++;
  break;
  case 'u':
  u++;
  break;
  case 'e':
  e++;
  break;
  case 'o':
  o++;
  break;
default:
break;

}
}
console.log('a='+a+'i='+i+'u='+u+'e='+e+'o='+o );
var count = a+i+o+u+e ;
console.log(count);
}
vowelCount('mama');



// PART 6: Initials

function initials(int){
  var name = "  ";
  var words = int.split(" ");
  for (var i=0;i<int.length;i++)
{
  name += words[i].charAt(0);
}
return name ;
}
initials('aisha maghrabi');
console.log(name);





// PART 7: Days of the week

// var day = prompt("Please specify what day is today : ");
// switch(day.toLowerCase()) {
//     case "monday":
//     alert("Energize");
//         break;
//     case "tuesday":
//     alert("ust getting started!");
//         break;
//     case "wednesday":
//     alert("Hump Hump!"); 
//         break;
//         case "friday" :
//         case  "saturday" :
//         case "sunday":
//         alert("Weeeeeee!");
//         break;
//     default:
//     alert("Huh, sorry didn't get that?");
//         break;
// }
 



// PART 8: Let's take the Subway

// <select id="subway" onchange="train(this)"> //dropdown list 
//     <option value="1">The (L) Train</option>
//     <option value="2">The (N) Train</option>
//     <option value="3">The (S)ix Train</option>
// </select>
// function train(select) {

//   alert(select.options[select.selectedIndex].text); //your chooes 
// }

// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];
function truthyFalsey(arr){
  for( var i =0 ; i<arr.leng ; i++)
  if(arr[i]){
    console.log([i]== true);
  }else {
    console.log([i]== false);

  }
}



// BONUS: Double X Counter

function countXx(str){
  var x =0;
 
for(var y =0 ; y<str.length ; y++){
if(str.charAt(y)=='x'){
 x++; 
} 
}
console.log('x='+x );
var count = x / 2 ;
console.log(Math.round(count));
}
countXx('mamaxxx');

// BONUS Two-Dimensional Array

// function Create2DArray(rows) {
  
//   rows *= rows;
//   for (var i=0;i<rows;i++) {
//     var arr=newArr();

//       arr[i] =0;
    
//   }

//   return arr;
// }
// console.log(Create2DArray(7));

/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');