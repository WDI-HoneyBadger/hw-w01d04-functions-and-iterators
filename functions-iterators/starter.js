
function hello() {
  alert('Hello!');
}

// PART 9: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];





/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');



from here my homork\>


//PART 0: Just DO it!!
/*
function justDoIt(name){
   console.log(`"${name} JUST DO IT!"`);
}
justDoIt('Hamad');    */

//________________________________________________

//PART 1: Big or Small String?
/*
function bigOrSmallString (s){
    if (s.length>10){
        return "This word is loooooong";
    }else{return "This word is short 😬"};
}
 console.log(bigOrSmallString("m              😬😬😬ه               l"));
    
                                      */ 
 //______________________________________________________________________
 
 //Odd or Even String Length?
 /*
 function oddOrEvenString (str){
     if(str.length %2 == 0){
        return "This string length is TOTALLY even!";

     }else if(str.length % 2 != 0){
         return "his string's length is odd";
     }


 }
 var s=oddOrEvenString("aliiii");
 console.log(s);






*/



 //____________________________________________________________________
 //PART 3: Median :

  
 /*
 function medianOfArray (num){
     num.sort();

    if(num.length % 2 == 0){
        var m = 0;
        m=num.length /2 ;
        return num[m];

    }else if(num.length % 2 !=0)
    { var n=0;
        n= num.length/2;
          var s= (num[n]+num[n+1]);
          n=s;
          return num[n];
    
    
    
    }else if(num.length ===0){
        console.log("array is empetty");

    }
 }
var ret=medianOfArray([2,1,5,99.13])
console.log(ret);



*/
//__________________________________________________

//PART 4: Sum Array
/*
function sumArray(arr){
    var s=0;
    
    if(arr.length != 0){
        for(var i=0;i<=arr.length;i++){
            
            s+=arr[i];
            return s;


        }
    }else {console.log("empty array");}
}
var d=sumArray([4,8,3]);
console.log(d);
*/

//___________________________________________

//PART 5: Vowel Count:
/*
function vowelCount (str){

    var n=0;
        
    for(var i=0;i< str.length;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=="o" || str[i]=='u' || str[i]=='i' ){
            n+=1;
            return n;
        }
    
    }
            return "not Vowel "
}
var m=vowelCount('hamad');
console.log(m);
*/
//---------------------------------
/* function initials (nam) {
    for(var j=0;j<=nam.length;j++){

        
        
    for(var i=0;i<=nam.length;i++){
            if(nam[i]==" "){
            
               var c=c+(nam[0].toUpperCase());
                return c;
            }
    }
  }

}
var m=initials("hamad alsheri moh");
console.log(m); */
//-___________another solution ___________________________
// function initials (nam) {
//     var initials = nam[0].toUpperCase();
//     loop1:
//     for(var j=0;j<nam.length;j++){

//     // while(nam[j]==" "){
//         if(nam[j]===" "){
//             initials += nam[j + 1].toUpperCase();
//             var c = nam[j+1].toUpperCase(); // this is not quite right
//             // every time you see a space, add the letter after the space to "initials"
//             // return c;
//             // continue loop1 ;

//         }
        
//     // }
//     }
//     return initials;
// //   return nam[0].toUpperCase();//whene 

// }
// var m=initials("cristino ronaldo jsdfads uuuykljljhliliyyiykkk");
// console.log(m);
//______________________________________________________

// PART 8: Let's take the Subway
// function train(){
//   var selecion = window.prompt("Please select one of the following: \n \n The (L) Train, The (N) Train, The (S)ix Train");
//   if(selecion == "L" || selecion == "l"){
//     alert("The Stops:\n \n- 8th Ave \n- 6th Ave \n- Union Square \n- 3rd Ave \n- 1st Ave \n- Bedford Ave");
  
//   }else if(selecion == "n" || selecion == "N"){
//     alert("The Stops:\n \n- Times Square \n- Herald Square \n- 28th St \n- 23rd St - DAPS Nexus \n- Union Square \n- 8th St");
//   }else if(selecion == "s" || selecion == "S"){
//     alert("The Stops:\n \n- Grand Central \n- 33rd St \n- 28th St - 23rd St \n- Union Square \n- Astor Place");
//   }
// }
// //train();
// // PART 9: Truth - y & False -y Checker
// var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];
// var counterX =0;
// // BONUS: Double X Counter
// function countXx(string){
  
//   for (var i =0; i<=string.length; i++){
//     if(string[i] == "x"  || string[i] == ("X") ){
//       counterX++;
//     }
//   }
// // BONUS Two-Dimensional Array
//   console.log(counterX);
//    if(counterX % 2 ===0){
//      counterX =  counterX / 2;
//      console.log(`You have ${counterX} pairs of x`);
//    }else if(counterX % 2 != 0){
//     counterX = (counterX - 1) / 2;
//     console.log(`You have ${counterX} pairs of x`);
//   }}
  
// countXx("Movie");
