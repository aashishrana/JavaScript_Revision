var x = 10;

function foo() {
  console.log(x);
  var x = 20;
}

// foo();`




var x = 1;

function outer() {
  var x = 2;

  function inner() {
    console.log(x);
  }

  return inner;
}

var innerFunc = outer();
// innerFunc();

// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);

var a = [1, 2, 3];
var b = a;
a.push(4);

// console.log(b);





function outer() {
  var x = 10;

  function inner() {
    console.log(x);
  }

  // x = 20;
  return inner;
}

var closureFunc = outer();
//   closureFunc();
// console.log(closureFunc);




var x = 1;
var y = 2;

function foo() {
  setTimeout(function () {
    console.log(x);
    y = 10;
  }, 2000);

  x = 5;
}

// foo();
// console.log(y);      Ask to the mentor




var a = 10;

function outer() {
  var b = 20;

  function inner() {
    var c = 30;
    console.log(a + b + c);
  }

  return inner;
}

var innerFunc = outer();
// innerFunc();





function greet() {
  console.log("Hello, " + name);
  var name = "John";
}

// greet();




function multiply(a, b) {
  console.log(a * b);
}

// multiply(2);




function foo() {
  var a = 1;

  function bar() {
    var b = 2;

    function baz() {
      var c = 3;
      console.log(a + b + c);
    }

    baz();
  }

  bar();
}

// foo();





function outer() {
    var x = 10;
  
    function inner() {
      console.log(x);
    }
  
    x = 20;
    // inner();
  }
  
//   outer();
  





function outer() {
    var x = 10;
  
    function inner() {
      console.log(x);
    }
  
    return inner;
  }
  
  var closureFunc = outer();
//   closureFunc();





var x = 1;

function foo() {
  console.log(x);
  var x = 2;
}

// foo();






var x = 5;

function outer() {
  function inner() {
    console.log(x);
  }

  var x = 10;
  return inner;
}

var closureFunc = outer();
// closureFunc();
  