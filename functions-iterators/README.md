# Functions, loops, and conditionals, oh my!!

#### WRITE ALL YOUR ANSWERS IN `starter.js` file. Test early, test often! Remember, you can use node for that by typing `node starter.js` in your terminal. 

#### But, you'll have to run this script in a web browser for some of the later questions since they ask you to use alerts and prompts. Instructions on how to do this are in `starter.js`.

### PART 0: Just DO it!!
Write a function `justDoIt` that accepts a string, your name, as an argument. The function should **return** a string that has your argument and the phrase "JUST DO IT".

```javascript

function justDoIt(string) {
    var name = string + ", Just Do It ";
    return name
}
justDoIt('mohrah');
//PART 1: Big or Small String?

function bigOrSmallString(s) {
    if (s.length > 10) {
        return "This word is loooooong";
    }
    else {
        return "This word is short 😬"
    };
}
bigOrSmallString("mohrah mohammed alateeq ");



//Odd or Even String Length?

function oddOrEvenString(s) {
    if (s.length % 2 != 0) {
        return "his string's length is odd";
    } else if (s.length % 2 == 0) {
        return "This string length is TOTALLY even!";
    }
}
oddOrEvenString("mohrah");



//PART 3: Median :


function calculateMedian(int) {
    int.sort();
    if (int.length % 2 == 0) {
        var m = 0;
        m = int.length / 2;
        return int[m];
    } else if (int.length % 2 != 0) {
        var n = 0;
        n = int.length / 2;
        var s = (int[n] + int[n + 1]);
        n = s;
        return int[n];

    } else if (int.length === 0) {
        console.log("empty");
    }
}
calculateMedian([3, 4, 2, 6.7])



//PART 4: Sum Array

function sumArray(arr) {
    var array = 0;
    if (arr.length != 0) {
        for (var i = 0; i <= arr.length; i++) {
            array += arr[i];
            return array;
        }
    } else {
        return "empty array";
    }
}
sumArray([3, 2]);



//PART 5: Vowel Count:
function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowel_count("The quick brown fox"));

// PART 6: Initials
function initials(name) {
    for (var i = 0; i <= name.length; i++) {
        for (var j = 0; j <= name.length; j++) {
            if (name[j] == " ") {
                var name1 = name1 + (name[0].toUpperCase());
                return name1;
            }
        }
    }
}
initials(" gfhjwk huijcqlcj ");


//PART 7 : Day Of The Week

var day;
var week = document.getElementById("myInput").value;
switch (week) {
    case "monday":
        day = "energize!";
        break;
    case "tuesday":
        day = "gust getting started";
        break;
    case "wednesday":
        day = "Hump Hump";
        break;

    case "thursday":
        day = "almost there";
        break;
    case "friday":
        day = "weeeeeeeee";
        break;
    default:
        day = "Huh ,sorry didn't get that";
}
