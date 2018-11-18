// PART 0: Just DO it!!
function justDoIt(yourName) {
    if (typeof(yourName) == 'string'){
    return `${yourName} , JUST DO IT!`; 
    }
}   console.log(justDoIt('muneera'));


// PART 1: Big or Small String?
function bigOrSmallString(word){
    if (typeof(word) == 'string' && word.length > 10 ){
        return `${word} This word is loooooong` ;
    }else if (typeof(word) == 'string' && word.length < 10){
        return `${word} This word is short 😬` ;
    } else {
        return `Enter a valid string. ` ;
    }
} 
console.log(bigOrSmallString('muneera'));
console.log(bigOrSmallString('muneerrrraaaaa'));
console.log(bigOrSmallString(99));  


// PART 2: Odd or Even String Length
function oddOrEvenString(word2){
 if (typeof(word2) == 'string' && (word2.length %2 ==0) ){
        return `${word2} This String's lenght is TOTALLY even!` ;
    } else if (typeof(word2) == 'string' && (word2.length %2 ==1)){
        return `${word2} This string's length is odd..`;
    }else {
        return `Enter a valid string.` ;
    }
} 
console.log(oddOrEvenString('muneera'));
console.log(oddOrEvenString('muneerrrraaaaa'));
console.log(oddOrEvenString(99));

//part 3
var numArr1 = [2 ,3 ,8, 1 ,4];
var numArr2 = [3, 4, 7, 2];
  function medianOfArray(arr){
    var ar= arr.sort(function(a,b) {return a - b;});
    var mediaaa = ar.length/2;
        if (ar.length %2 == 0 ){
        return (ar[mediaaa-1] + ar[mediaaa])/ 2
    }else {
        return ar[mediaaa-0.5];
    }
  } 
  console.log(medianOfArray(numArr1)); // even number 
  console.log(medianOfArray(numArr2)); // odd number 
   
   
   // part 4
   var myArr = [ 4 , 5, ,7];
   function sumArray(arr){
      var sum = arr.reduce(function(acc , curr){
        if (arr.length === 0){
            return 0; 
        }else {
            return acc +=curr;
          }
        },0) ;
        return sum;
    } 
         console.log(sumArray(myArr));


   // part 5 
   function vowelCount(str){
       var counter =0;
   var string = str.toString();
    for (var i = 0; i <= string.length; i++) {
      if (string[i] == "a" || string[i] == "e" || 
      string[i] == "i" ||string[i] == "o" || string[i] == "u") {
        counter++;
      }else { 
     }
    } return counter; 
} console.log(vowelCount('muneera')); 


// part 6 
function initials(name){
    
    var nameI='';

    var fullName = name.split(' ');
    for (var i = 0; i < fullName.length; i++){
        nameI += fullName[i][0];
    }
    return nameI.toUpperCase();
}console.log(initials('muneera mohammed binbaz'));

// part 7
function whatDay(){
     var day = prompt("What day is today ?");
      var answer;
      if (day === 'Monday'){
        answer = 'Energize'
      }else if ( day === 'Tusday'){
        answer = 'Just getting started';
      }else if ( day === 'Wednsday'){
        answer = 'Hump Hump';
      }else if (day === 'Thursday'){
        answer = 'Almost there';       
      } else if ( day === 'Friday' || day === 'Saturday' || day === 'Sunday'){
          answer = 'Weeeee!';
      }else {
          answer = "Huh, sorry didn't get that?";
      }
      //alert(answer);
  }  //whatDay();
 // part 8

 function subwayTrain(){
     var trains = prompt("Please make your selection!");
     var answer2;
     switch(trains){
         case 'L':
         answer2 = 
` * 8th Ave
  * 6th Ave
  * Union Square
  * 3rd Ave
  * 1st Ave
  * Bedford Ave`;
  alert(answer2);
  break;
  case 'N' :
  answer2 =
  `* Times Square
  * Herald Square
  * 28th St
  * 23rd St - DAPS Nexus
  * Union Square
  * 8th St`;
  alert(answer2);
   break;
   case "S" :
   answer2 = 
   `* Grand Central
   * 33rd St
   * 28th St
   * 23rd St
   * Union Square
   * Astor Place ` ;
   alert(answer2);
   break;

     } 
     alert("Thank you"); 
 } //subwayTrain(); 

 // part 9 

var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];

function truthyFalsey(arr){
    arr.forEach(element => {
       // console.log(element)
        if (element){
            console.log('truth-y value')
        }else {
            console.log('false-y value')
        } 
    });
} truthyFalsey(arr);

function countXx(str){
    var counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]=='x' && str[1]=='x'){
            counter++;
        }
        
    }
} console.log(countXx('xxx'));