//Part 0: just do it
function justDoIt(name){

    //return `${name}, JUST DO IT!`;
      return name +", JUST DO IT!";
    
    };
    console.log(justDoIt('SHAHAD'));// return SHAHAD, JUST DO IT!
    
    //Part 1: Big or Small String
    
    function bigOrSmallString(word){
    
    if (word.length>10){
       
        return `This word is loooooong!`;
    }else{
    
        return `This word is short`;
    }
    };
    
    console.log(bigOrSmallString('congratulations'));
    console.log(bigOrSmallString('awesome'));
    
    
    //PART 2: Odd or Even String Length?
    
    function oddOrEvenString(stringLength){
    if (stringLength.length %2 ==0)
    {//even
    return `This string length is TOTALLY even!`;
    }else if (stringLength.length % 2 == 1)
    {//odd
      return `This string is length is odd.`;
    }
    }
    console.log(oddOrEvenString('happines'));
    console.log(oddOrEvenString('happy'));
    
    //PART 3: Median
    function medianOfArray(){
    
        {
          
            var median = 0, numsLen = numbers.length;
            numbers.sort();
         
            if (
                numsLen % 2 === 0 // is even
            ) {
                
                median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
            } else { 
                median = numbers[(numsLen - 1) / 2];
            }
         
            return median;
        }
    
    }
    var numbers =[1,2,3,4,5,6,7,8]; 
    console.log(medianOfArray(numbers));
    
    
    //PART 4: Sum Of Array
    function sumArray(arr){
    var sum =0;
    for(var i=0 ;i<arr.length;i++){
    
    sum += arr[i]; 
    
    }
    return sum;
    }
    var sumArr =[1,2,3];
    console.log(sumArray(sumArr));
    
    
    //PART 5: Vowel Count
    
    function vowelCount(str){
        var Counter=0;
        for (var i=0;i<str.length;i++){
            
            if (str[i]=='i' || str[i]=='e' || str[i]=='o' ||str[i]=='u' ||str[i]=='a' ||str[i]=='I' || str[i]=='E' || str[i]=='O' ||str[i]=='U' ||str[i]=='A')
            {
                Counter ++;
            }
           
        }
        return Counter;
        }
        console.log(vowelCount('Apple'));
    
        //PART 6: Initials
    
    var Initials = function(name) {
      var parts = name.split(' ')
      var initi = ''
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].length > 0 && parts[i] !== '') {
            initi += parts[i][0]
        }
      }
      return initi
    }
    
    console.log(Initials('Neil Patrick Harris'));
    
    //PART 7: Days of the week
    
    function whatDay(day){
      
        if (day=='Monday'||day=='monday'){ 
            alert("Energize");
        }
        else if(day=='Tuesday'||day=='tuseday'){
            alert("ust getting started!");
        }else if(day=='Wednesday'||day=='wednesday'){
            alert("Hump Hump!");
        }
        else if(day=='Thursday'||day=='thursday'){
            alert("Almost there!");
        }else if (day =='Friday'||day =='friday'||day =='Saturday'||day =='saturday'||day =='Sunday'||day =='sunday') {
            alert("Weeeee!");
        }else{
            alert("Huh, sorry didn't get that?");
        }
        };
          
        var day = prompt("Please enter day");
        whatDay(day);
        
    
        //PART 8: Let's take the Subway
        
        var selection = prompt("Please select on of the Trains type : The (L) Train, The (N) Train, The (S)ix Train");
    
    
        switch(selection){
            case 'L': alert('L train\n 8th Ave\n6th Ave\nUnion Square\n3rd Ave\n1st Ave\nBedford Ave')
            break;
            case 'N': alert('N train\n Time Square\nHerald Square\n28th St\n23rd St - DAPS Nexus\nUnion Square\n8th St')
            break;
            case 'S': alert('S train\n Grand Central\n33rd St\n28 St\n23rd St\nUnion Square\nAstor Place')
            break;
        };
        
        alert('Thank You *_*');
    
        //PART 9: Truth - y & False -y Checker
    
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
    
    
    
    
    
    
    
    
    
    
    