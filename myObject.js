const obj1 = {
    name: "Yash",
    role: "student",
    email: "yash@mmdu.com",

    isloggedIn: true,

    registerUser: function () {
        console.log(`${this.name} is a registerd user`);
    }
}

obj1.email = "yash@ladva.com"
console.log(obj1);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));

// console.log(obj1.name);
// console.log(obj1.role);
// console.log(obj1.registerUser);



// key is a number and string is a value
const obj2 = {
    10: "number10",
    20: "number20"
}

//console.log(obj2[10]);


// const key1 = symbol()

const key1 = Symbol("key1");  //declaring symbol as a key 
const key2 = Symbol("key2");

const obj3 = {
    [key1]: "hitesh",  //using symbol as a key
    [key2]: "pwskills"
}

// console.log(obj3)      
// console.log(obj3[key1])  // now printing

// const obj4 = new Object() new method of creating objects same as above
// obj4.name = "hitesh"

// console.log(obj4.name);