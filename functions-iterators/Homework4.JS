// PART 1: Big or Small String?
function bigOrSmallString (string){

    if ( string.length > 10) {
    return "This word is loooooong!" }
    else {
    return `This word is short 😬`;
    }
}
// PART 2: Odd or Even String Length?

function oddOrEvenString(string){
    if (string.length % 2 == 0){
      return "This string length is TOTALLY even!";
    } else {
      return "This string's length is odd";
    }
  }

  // PART 3: Median

 var num = [30, 35, 45, 1, 5];
function plural(array1){
  var Total = 0;
  for (var i = 0; i < array1.length; i++){
    Total = Total + array1[i];

  }
  return Total;
}
console.log(plural(num)); 

// PART 4: Sum Array
function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element){
        total =total+ element;
    })
    return total;
}

var sum = sumArray([1,5,3,3])

console.log(sum)

/////// PART 5: Vowel Count
function vowelCount(str) {
    str = str.toLowerCase();
    var count=0;
    for(var i=0; i < str.length; i++){
        if(str[i] === "a" || 
           str[i] === "e" || 
           str[i] === "i" ||
           str[i] === "o" ||
           str[i] === "u"){
            count++;
        }
    }
    return count;
}

console.log(vowelCount("Mohammed Alghamdi"));

 //PART 6: Initials
    
 var str = "Mohammed Alghamdi";
var matches = str.match(/\b(\w)/g); // ['M','a']
var acronym = matches.join(''); // M A 

console.log(acronym)

// PART 7: Days of the week

/* ar person = prompt("What day is today?");

if (person == "Monday") {
  alert("Energize!!!!"); }


 else if (person == "Tuesday") {

  alert("Just getting started!");}

else if (person == "Wednesday") {

  alert("Hump Hump!");}

else if (person == "Thursday") {

  alert("Almost there!!!");}

else if (person == "Saturday"  || person == "Friday" || person == "Sunday") {
  alert("Weweeeeee!");
}
 
  else { 
    alert("Huh, sorry didn't get that?"); 
  } */

  // PART 8: Let's take the Subway

 // PART 9: Truth - y & False -y Checker
var array2 = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];

function truthyFalsey(array2){

    for (var i = 0; i < array2.length; i++){
  
      if (array2[i]){

        console.log((array2[i])  = "True");
      } else {
        console.log((array2[i])  = "False");
      }
    };
  
  };
  
  truthyFalsey(array2);
  