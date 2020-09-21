// 19
/* Write a program to construct the following pattern:
*
* *  
* * *  
* * * *   */

let x = 4;
str = "";
for(let i = 0; i<x; i++){
    str = str + "*";
    // console.log(str);
}
for(let i=0; i<x; i++){
    console.log(str)
}

// andere Lösung:
let h = 4;
let str = "";
for(let i = 1; i<=h; i++){
    str = "";
    for(let n = 1; n<=i; n++){
        str += "*";
    }
    console.log(str);
}

// 20
/* Write programs that produce the following outputs:
100 200 300 400 500 600 700 800 900 1000
1 2 4 8 16 32 64 128
0 2 4 6 8 10
3 6 9 12 15
9 8 7 6 5 4 3 2 1 0
1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 
 */
// 100 200 300 400 500 600 700 800 900 1000:
for(let i = 1; i <= 10; i++){
    console.log(i * 100);
}
// andere Lösung:
var x = 1000;
var i = 100;
while(i<=x){
    console.log(i);
    i = i + 100;
}

// 1 2 4 8 16 32 64 128:
for(let i = 1; i<=128;){
    console.log(i);
    // i = i + i;
    i = i * 2;
}

// 0 2 4 6 8 10:
for(let i = 0; i<=10;){
console.log(i);
i = i + 2;
}

// 3 6 9 12 15:
for(let i = 3; i<=15;){
    console.log(i);
    i = i + 3;
}

// 9 8 7 6 5 4 3 2 1 0:
for(let i = 9; i >= 0;){
    console.log(i);
    i--;
}

// nested loop 1 1 1 2 2 2 3 3 3 4 4 4:
for(let i = 1; i<=4; i++){  
    for(let n = 1; n <= 3; n++){
        console.log(i);
    }
} 
// andere lösung:
for(let i = 1; i <= 4; i++){
    console.log(i+""+(i)+""+(i));
}
// andere Lösung:
for(let i = 1; i <= 4; i++){
    console.log(i);
    console.log(i);
    console.log(i);
}
// andere Lösung:
for(let i = 1; i <= 4; i++){
    console.log("i".repeat(3));
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4:
for(let i = 1; i< 4; i++){
    for(let n = 0; n <= 4; n++){
        console.log(n)
    }
}

// 21
/* 2. Months. Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
Examples:
monthName(3) ➞ “March”
monthName(12) ➞ “December”
monthName(6) ➞ “June” */

const monthOfYear = ["January", "February", "March","April","May","June","July","August","September","October", "November","December"];
const monthName = (num)=>{
    let myNumber = num-1;
    let message = myNumber >= 0 && myNumber <= 11 ? 
    monthOfYear[myNumber] : "sorry, repeat again";
    return message;
}
console.log(monthName(5));

// 22
/* c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
Examples:
hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r” */

const hackerSpeak = (str)=> {
    let mySplitted = str.toLowerCase().split("");
    for(let i = 0; i<mySplitted.length; i++){
        if(mySplitted[i]=="a"){
            mySplitted[i]= "4";
        }
        if(mySplitted[i]=="e"){
            mySplitted[i]= "3";
        }
        if(mySplitted[i]=="i"){
            mySplitted[i]= "1";
        }
        if(mySplitted[i]=="o"){
            mySplitted[i]= "0";
        }
        if(mySplitted[i]=="s"){
            mySplitted[i]= "5";
        }
    }
    return mySplitted.join("");
}
console.log(hackerSpeak("javascript is cool"));