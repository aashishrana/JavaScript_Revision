// function hello(a,b) {
//     console.log("hello world");
//     return a + b;
// }

// let a = hello(3,5);
// console.log(a);

function sayHello() {
    console.log("hello world");
    console.log("Hitesh sir");
}

//sayHello();

function addTwoNum(num1, num2) {
    let result = num1 + num2;
    return result;
}

let result = addTwoNum(4,4);
//console.log(result);


// amazon shoping cart

function cartBills(...numbers) {
    let sum = 0;

    for(const num of numbers ) {
        sum = sum + num;
    }
    return sum;
}

const user = {
    id: "123",
    name: "Rishav",
    email: "rana@gmail.com"
}

function addUser(obj) {
   // console.log(`A user name ${obj.name} got an email ${obj.email}`);
}

addUser(user);

// function addTwoNum1(num1 , num2) {
//     return num1 + num2;
// }


// both are same


const addTwoNumv2 = (num1, num2) => {
    return num1 + num2;
}


// single line code  no need of curley braces above code is same

// const addTwoNumv3 = (num1, num2) => 
//      num1 + num2;

 //  or

// const addTwoNumv4 = num1 => 5;     

//const addTwoNumv5 = (num1, num2) => ({email: "rohit@pw.live"});





function learningTwo()  {
   console.log(this);
}


const learningTwo3 = () => {
    console.log(this);
}


learningTwo();
learningTwo3();