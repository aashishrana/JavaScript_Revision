const user = {
    username: "hitesh",
    email: "hitesh@google.com"
}

const {username, email} = user;

//user.username = "Aashish"; not working
console.log(username);

const myArr = [  // inside the array passing the object
    {
        username: "rana",
        email: "rana@google.com"
    },
    {
        username: "Aashish",
        email: "aashish@google.com"
    }
]

myArr.map((ele) => {   // Handling the object inside the array
   console.log(ele.username);
});

