// function h1(x, fn) {
//     // h -> is a hof
//     // fn -> is a callback

//     console.log(x * x);
//     fn();
// }

// function h2(x, f2) {
//     console.log(x * x);
//     f2();
// }

// h1(10, function abc(){
//     console.log("higher order function");
// });

// h2(5, exec);

// function exec(n) {
//     console.log("squares value is", n);
// }
// execution of the code is line by line after completion of one then another is call synchronus
// java script by default is synchronus and single threaded





// setTimeout is a higher order function take another function as an argument 
console.log("start"); 
setTimeout(function f() {
    console.log("After how many milli second code will execute"); // 1 sec == 1000 mili sec
                            // after completion of time wait in the queue 
}, 500);

setTimeout(function f2(){
    console.log("millisecond prefernce");
}, 100) 
console.log("end");

for(let i = 0; i < 100; i++) {
    console.log("hello");       // first execute the native code then  after that runtime function settimeout
}

// this is call asynchronus parrallel execut all steps if one stop same time another execut.

// Event loop is a continos infineite loop used to check call stack is empty and global code is completly execute or not 

// inversion of control is a problem with callback our control with another hof.

// calll bck hell is a readability problem with callback function.