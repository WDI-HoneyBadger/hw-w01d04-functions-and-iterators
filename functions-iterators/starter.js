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
  return `${name} JUST DO IT`;
}

console.log(justDoIt('Hanan'));

// PART 1: Big or Small String?

function bigOrSmallString (word){
  if(word.length >10){
      console.log('This word is loooooong!');
      return 'This word is loooooong!';
  }else if(word.length > 10){
      console.log('This word is short 😬 ');
      return 'This word is short 😬 ';

  }
      
  }


  bigOrSmallString('Hanan');

// PART 2: Odd or Even String Length?

function oddOrEvenString (totle){
  if (totle % 2===0) {
      console.log('This string length is TOTALLY even!');
  } else {
      console.log("This string's length is odd..");
      

  }
}

oddOrEvenString(10);


// PART 3: Median

function medianOfArray(arr){
	arr.sort(function(a,b){
  	return a-b;
  });
  var half = Math.floor(arr.length / 2);
  
  if (arr.length % 2)
  	return arr[half];
  else
  	return (arr[half - 1] + arr[half]) / 2.0;
}

console.log(medianOfArray([1,2,3,4,5,6,7]));
console.log(medianOfArray([1,2,3,4,5,6,7]));


// PART 4: Sum Array

function sumArray2(arr){
  var sum = 0;
  if( arr.length == 0){
      return 0;
  }
  
}
  /*
  Another sloution with while : 
  var i = 0;
  while(i < arr.length){
      sum += arr[i];
      i++;
  }
*/

//another sloution for loop
/*
  for( var i = 0 ; i < arr.length ; i++){
      sum += arr[i];

  }
  return sum;
}
*/
//console.log(sumArray2([]));
console.log(sumArray2([4,5,6,7]));





// PART 5: Vowel Count

function vowelCount(str) {
  return str.match(/[aeiou]/gi).length;
}

console.log(vowelCount('Hanan'));
//console.log(vowelCount('ear'));


// PART 6: Initials

function initials (personsname) {
  var initials = "";
  var names = personsname.split(' ');
  for (i = 0; i < names.length; i++) {
       initials += names[i].substring(0, 1).toUpperCase();
   }
   return initials;
};

console.log(initials('Neil Patrick Harris'));


// PART 7: Days of the week

var Day = prompt("What day is today.", "");
if(Day ==='Monday'){
    alert("Energize!");
}else if(Day ==='Tuesday'){
    alert("Just getting started!");
}else if (Day === 'Wednesday'){
    alert( "Hump Hump!");
}else if (Day === 'Thursday'){
    alert("Almost there!");
}else if (Day === 'Friday'|| Day ==='Saturday'|| Day === 'Sunday'){
    alert( "Weeeeeee!");
}else{
    alert("Huh, sorry didn't get that?");
}


// PART 8: Let's take the Subway

var Da = prompt("A list of three trains please selection! - The(L) Train, The (N) Train, The (S)ix Train .", "");
    if(Da ==='L'){
        alert("- 8th Ave \n - 6th Ave \n - Union Square \n - 3rd Ave  \n - 1st Ave Bedford Ave");
    }else if(Da ==='N'){
        alert(" Times Square \n Herald Square \n 28th St \n 23rd St - DAPS Nexus \n Union Square 8th St");
    }else if (Da === 'S'){
        alert("Grand Central \n 33rd St \n 28th St \n 23rd St \n Union Square \n Astor Place ");
    }

    var end = window.confirm("Thank You");
    

// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];
function truthyFalsey(arr){
  for(var i=0; i<arr.length; i++)
  if (arr[i]){
      console.log(" truth-y "); }
      
      else {
console.log(" false-y");
}

}

truthyFalsey(arr);



// BONUS: Double X Counter



// BONUS Two-Dimensional Array




/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');