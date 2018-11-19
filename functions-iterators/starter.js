// //PART0://
var name = "Jumanah"

function justDoIt(name) {
    return name + " " + "JUST DO IT !!";
}

// console.log(justDoIt(name));


// //PART1://


function bigOrSmallString(bigOrS) {
    if (bigOrS.length >= 10) {

        return (`${bigOrS} "This word is loooooong!"`);
    } else {
        return (`${bigOrS}"this is short"`);
    }
}
//  console.log(bigOrSmallString('hlolalala'));



// // PART2 //



function oddOrEvenString(wordLength) {
    if (wordLength.length() % 2 === 0) {
        return ("This string length is TOTALLY even!")
    } else {
        return ("This string's length is odd..")
    }

}

//console.log(oddOrEvenString('complicated')); 



// //PART3 //


var array = [1, 5, 6, 2, 3, 4];

function medianOfArray(array) {
    array.sort();
    if (array.length % 2 === 0) {
        var array2 = array.length / 2;
        array[array2];


    } else {
        var array3 = array.lenth / 2;
        var jay = array[array3] + array[array3 + 1];
        return jay;
    }
}




// // PART 4 //


var numbers = [1, 2, 5, 6, 7];
var sum = 0;
function sumArray(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
}
//  console.log(numbers);


// // PART 5 //

// //      PART 5: Vowel Count


function vowelCount(str) {
    var vowelscount = 0
    var string = str.toString();

    for (var i = 0; i <= string.length - 1; i++)

        if ((string.charAt(i) == "a") || (string.charAt(i) == "e") ||
            (string.charAt(i) == "i") || (string.charAt(i) == "o") || (string.charAt(i) == "u")) {
            vowelCount += 1;
        }
}
return vowelCount;






// // PART 6 //


var name = 'Jumanah Alharbi';

var FirstLastName = function (name) {
    var separate = name.split(' ')
    var initial = ''
    for (var i = 0; i < separate.length; i++) {
        if (separate[i].length > 0 && separate[i] !== '') {
            initial += separate[i][0]
        }
    }
    return initial
}

// FirstLastName(name);






// // PART 7 //

var text;
var daysOfWeek = document.getElementById("weekdays").value;

switch (true) {
    case "Monday":
        text = "Energize!"
        break;
    case "Tuesday":
        text = "Just getting started!"
        break;
    case "Wednesday":
        text = "Hump Hump!"
        break;
    case "Thursday":
        text = "Almost there!"
        break;
    case "Friday":
    case "Saturday":
    case "Sunday":
        text = "Weeeeeee!"
        break;
    default:
        text = "Huh, sorry didn't get that?"

}


// console.log(text);



// // PART 8 //


var selectYourTrain;
var selectYourTrain = prompt("Lets take the subway,choose witch one you eant to kae ");
switch (switchTrain) {

    case 'L':
        selectYourTrain = "8th Ave",
            "6th Ave",
            "Union Square",
            "3rd Ave",
            "1st Ave",
            "Bedford Ave"
        break;

    case 'N':

        selectYourTrain = "Times Square"
        "Herald Square"
        "28th St"
        "23rd St - DAPS Nexus"
        "Union Square"
        "8th St"
        break;

    case 'S':
        selectYourTrain = "Grand Central",
            "33rd St",
            "28th St",
            "23rd St",
            "Union Square",
            "Astor Place"
        break;
}

alert("Thank you");









// PART 9 //

// Create a function truthyFalseythat accepts an array as an argument arr 
// (provided in the starter folder), goes through it, 
// and console logs whether it's a truth-y or false-y value

var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];

// function truthyFalseythat(arr){
// arr.forEach(function(inputarray){
//     if (inputarray){
//         console.log("Truthy")
//     }
//     else {
//         console.log("Falsy")
//     }
// })
// }
// truthyFalseythat(arr1);

function truthyFalseythat(arrInput) {

    for (var i = 0; i < arrInput.length; i++) {
        if (arrInput[i]) {
            console.log("Truthy");
        }
        else {
            console.log("Falsy");
        }
    }
}
console.log("hhhh")

truthyFalseythat(arr);
