/* 
PART 0: Just DO it!!
Write a function justDoIt that accepts a string, your name, 
as an argument. The function should return a string that has your 
argument and the phrase "JUST DO IT".

//example usage
justDoIt('Zack');
// => "Zack, JUST DO IT!"; */
//var nawaf;
function justDoIt(Nawaf){
    return Nawaf + " JUST DO IT!";
}


// console.log(justDoIt("Nawaf"));

//----------------------------------------
/* 
PART 1: Big or Small String?
You may have to dig into some documentation for some of these!
Write a function called bigOrSmallString that accepts one argument, 
a string, and returns "This word is loooooong!" if the string's length 
is greater than 10, and "This word is short 😬" otherwise.
*/

function bigOrSmallString(word){
    if (word.length > 10)
        return "This word is loooooong";
    else 
        return "This word is short 😬";
}

 console.log(bigOrSmallString("wordooo"));

//-------------------------
/*
PART 2: Odd or Even String Length?
Write a function called oddOrEvenString that accepts one argument, 
a string, and returns "This string's length is odd.." if the length 
is an odd number, and "This string length is TOTALLY even!" if the 
string length is even. */

function oddOrEvenString(num){
    if (num.length %2== 0)
        return "This string length is TOTALLY even! ..";
    else (num.length % 1== 0)
        return "This string's length is odd";
}

console.log(oddOrEvenString("num"));

//------------------------------------

/*
PART 3: Median
Write a function called medianOfArray that takes an array as an 
argument. The function should return the median number in an array. 
Hmmmm, haven't you found a median of the array before? Maybe not..

Hint: Use some kind of sorting method to put the values in order first,
 then somehow access the median element, somehow using the length of 
 the array....maybe? We're going to go over arrays in depth on Monday 
 but see if you can find some Array methods that can accomplish what 
 you need. */
var nums =[1,14,5,27,8,9,10,39];

var arr =  nums.sort(function(a, b){return a-b});

function medianOfArray(nums){
    var count = 0;
    for(var i = 0;i<nums.length;i++){
        count=count + nums[i];
    }
    mediem = count / nums.length;
    return mediem;

}
var result = medianOfArray(arr);

console.log(result)

//---------------------------------

/*
PART 4: Sum Array
Create a function called sumArray that takes an array arr as an 
argument and returns the sum of all the numbers in the array. If the 
array is empty then return 0 */
var list =[1, 4, 7, 8, 9];
function sumArray(arr){
var sum= 0;
    for(var i =0; i < arr.length; i++){
        sum= sum + arr[i];

    }
    return sum;
}

var result = sumArray(list);
console.log(result);

//----------------------------------
/* 
PART 5: Vowel Count
Create a function called vowelCount that accepts a str as an argument 
and returns the number of vowels in that string. */

function vowelCount(str1)
{
  var vowelList = 'aeiouAEIOU';
  var vlcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowelList.indexOf(str1[x]) !== -1)
    {
      vlcount += 1;
    }
  
  }
  return vlcount;
}
console.log(vowelCount("I am working on my homework"));

//----------------------------------------

/*
PART 6: Initials
Write a function called initials that accepts one argument 
(person's name) and returns their initials.

It should work both with and without middle name being provided.
Hint! Remember, string methods? Use them!

initials('Neil Patrick Harris');
// NPH 
*/

function initials(fullname){
    var capptel = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var letter = "";
  
  for(var x = 0; x < fullname.length ; x++)
  {
    if (capptel.indexOf(fullname[x]) !== -1)
    {
      letter += fullname[x];
    }
  
  }
  return letter;

}
console.log(initials("Nawaf Ibrahim Alhahni"));

//---------------------------------------------------
/*
PART 7: Days of the week
Write an conditional JavaScript statement that prompts the user to 
specify what day is today. 📅

How do you create a prompt popup in the browser? Google might know 🙃

If it's Monday alert "Energize!"
If it's Tuesday alert "Just getting started!"
If it's Wednesday alert "Hump Hump!"
If it's Thursday alert "Almost there!"
If it's Friday, Saturday or Sunday alert "Weeeeeee!"
If it's not anything above alert "Huh, sorry didn't get that?"
*/

var daysOfWeek = "Sunday";
switch (daysOfWeek) {
    case "Monday":
    console.log("Energize");
        break;
    case "Tuesday":
        alert("ust getting started!");
        break;
        case "Wednesday":
        console.log("Hump Hump");
        break;
    case "Thursday":
    console.log("Almost there!");
            break;
    case "Friday ":
    case "Saturday":
    case "Sunday":
    console.log("Weeeeeee!");
         break;
    default :
        console.log("Huh, sorry didn't get that?");
           
}



//________________________________________________--

/*
PART 8: Let's take the Subway
Let's take the Subway. Write out JavaScript that would do the following 🚉

Hint: maybe you need a switch statement, maybe you need a function? You choose 😉

When the script is run, a menu should be prompted displaying:

A list of three trains - The (L) Train, The (N) Train, The (S)ix Train
And asking the user to make their selection!

And asking the user to make their selection!")
var listOfTrains;



THEN:

If the user enters: L

An alert should output a message containing the user's selection labeled as L train and display the 
following stops:

8th Ave
6th Ave
Union Square
3rd Ave
1st Ave
Bedford Ave
If the user enters: N
An alert should output a message containing the user's selection labeled as N train and display the following stops:
Times Square
Herald Square
28th St
23rd St - DAPS Nexus
Union Square
8th St
If the user enters S
An alert should output a message containing the user's selection labeled as S train and display the following stops:
Grand Central
33rd St
28th St
23rd St
Union Square
Astor Place
Finally, a Thank You message should alert.

The program then exits.
*/


console.log("The (L) Train, The (N) Train, The (S)ix Train");
console.log("Please choose one of the trains\n ");
var listOfTrains = "L";
switch (listOfTrains) {
    case "L":
        console.log("you selction L train");
        console.log("8th Ave \n6th Ave\n Union Square \n3rd Ave\n1st Ave\nBedford Ave")
        break;
    case "N":
        console.log("you selction N train");
        console.log("Times Square\nHerald Square\n28th St\n23rd St - DAPS Nexus\nUnion Square\n8th St")
        break
    case "S":
         console.log("you selction S train");
        console.log("Grand Central\n33rd St\n28th St\n23rd St\nUnion Square\nAstor Place")
    default:
        break;
}
//------------------------------------------------
/* 
PART 9: Truth - y & False -y Checker
Create a function truthyFalseythat accepts an array as an argument arr (provided in the starter folder),
 goes through it, and console logs whether it's a truth-y or false-y value

*/
function truthyFalsey(arr){
return "anything"
}
 
//____________________________________________________________________________
/*
BONUS: Double X Counter
Write a function called countXx. Count the number of "xx" in the given string. We'll say that overlapping 
is allowed, so "xxx" contains 2 "xx".
*/
function countXx(value){
    var count = 0;
    for(var i =0;i<value.length;i++){
        
        if(value.charAt(i) == "x" && value.charAt(i+1) == "x"){
            count = count+1;
        }
    }
    return "count of xx is : "+ count;
}
console.log(countXx("xxxx"));

//----------------------------------------------------------------------

/*
SUPER BONUS: Two-Dimensional Array
Write a function that takes a number n and returns a two-dimensional array that is n * n 
(n height by n length) consisting of all 0's. This is tough, this is practice if you want to practice 
algorithms.


*/

function makeArray(n){
    var x = new Array(n);
   // x = [];
    for (var i = 0; i < x.length; i++) {
      x[i] = new Array(n);
      
    }
    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < x.length; j++) {
            x[i][j] =0;
        }        
      }
    

    console.log(x);
}
makeArray(4);

//----------------------------------------
/*
SUPER MEGA BONUS!!!!!!
Change the previous function so that every time the height index === width index add a 1, instead of a 0. 
Such that arr[0][0] = 1, arr[0][1] = 0, arr[1][0] = 0, arr[1][1] = 1
*/
function makeArray2(n){
    var x = new Array(n);
   
    for (var i = 0; i < x.length; i++) {
      x[i] = new Array(n);
      
    }
    /* =>  [[1 0 0 0],
            [0 1 0 0],
            [0 0 1 0],
            [0 0 0 1]] */

    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < x.length; j++) {
            if(i == j)
                 x[i][j] =1;
            else
                x[i][j] =0;
        }        
      }
    

    console.log(x);
}
makeArray2(4);