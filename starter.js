//----------------Part0--------------------//

var name = 'Alanoud';
function justDoit(name ){
      console.log(name+ ' JUST DO IT!');
   }


//----------------part1--------------------//

function bigOrSmallString(words)
{
   if (words.length   > 10)
   {
     console.log("This word is loooooong!") ;
}
else {
  console.log( " The word is short ");
}
}
  bigOrSmallString(" AlanouBinSalamah");
  bigOrSmallString(" Alanoud");


//----------------Part2--------------------//


function oddOrEvenString (str){
    
    if(str.length % 2 ){
          console.log("This string's length is odd!") ;
    }else {
          console.log("This string length is TOTALLY even!") ;
    }
}

oddOrEvenString ("Nouf");
oddOrEvenString ("Abeer");


//----------------Part3--------------------//

                                               
  
var numbers = [ 34 , 16 , 10 , 70 , 45];

  function medianOfArray(median){
     median.so( function ( num1 , num2){ // I have a PROBLEM here
         return num1 - num2;
       });
      }

     var med = Math.floor(numbers.length/2);

      if(median.length % 2){
        return median[med];

    } else{
          return (median[med-1] + median[med]) / 2;
      }
     
      medianOfArray(numbers);

//----------------Part4--------------------//

                                               
var sum = [ 3 ,5 ,1 , 6, 9].reduce(add , 0);

function sumArray( num1 , num2){
    
     return num1 + num2;
    }

//console.log(sum);

//----------------Part5--------------------//

                                   
function vowelCount(vowel){

   var count = 0;

for(var i=0 ; i < vowel.length ; i++){

    if(vowel[i] == "a"||vowel[i] == "e"|| vowel[i] == "i"||vowel[i] == "u"||vowel[i] == "o"){

     return count += 1;
}

}
  return count;  
}
console.log(vowelCount ( 'lead'));

//----------------Part6--------------------//
                                      

function initials(init){

    var name = init.split('');
    var initName  = '';
for( var i=0; i<name.length; i++){
    if(name[i].length>0 && name[i]!=''){

      return  initName += name[i][0];
    }else{
      return initName ;
    }   
}
      
}
console.log(initials("Alanoud Mohammed "));

//----------------Part7--------------------//





                                          
//var day= prompt("Please enter the day","")// not defined also window.alert is not defined
function week (day){                        
if(day=="Monday")
    console.log("Energize!");

else if(day=="Tuesday")
    console.log("Just getting started!");

 else if(day=="Wednesday")
    console.log("Hump Hump!");

 else if(day=="Wednesday")
    console.log("Hump Hump!");

else if(day=="Thursday")
    console.log("Almost there!");

else if(day=="Friday" || day=="Saturday" || day=="Sunday")
    console.log("Weeeeeee!");

}
week("Sunday")
//----------------Part8--------------------//


var train1 = 'L';
var train2 = 'N';
var train3 = 'S';

if(LTrain.train1){
    console.log(LTrain);
}else if (NTrain.train2){
    console.log(NTrain);
}else {
    console.log(STrain.train3);
}

function LTrain ( ){
    
        console.log("8th Ave",
            "6th Ave",
            "Union Square",
            "3rd Ave",
            "1st Ave",
            "Bedford Ave"
      );
    }


   function NTrain (){
     console.log("Times Square",
      "Herald Square",
      "28th St",
      "23rd St - DAPS Nexus",
      " Union Square",
      "8th St");
}
  function STrain (){

      console.log("Grand Central",
          "33rd St",
          "28th St",
          "23rd St",
          "Union Square",
          "Astor Place")
}
  LTrain(train1);
  NTrain(train2);
  STrain(train3);

//----------------Part9--------------------//

  var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true,
   0 || null];

  function truthyFalsey( answer) {
       for(var i = 0 ; i<answer.length; i++){
  console.log(answer[i]);
       }
   }
   function hello() {
    alert('Hello!');
  }
