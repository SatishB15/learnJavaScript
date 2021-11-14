
greeting("Satish");
console.log(x);
var x=7;

function greeting(name)
{
    console.log("Hello "+name);
}
/*
Hoisting allows functions to be safely used in code before they are declared.

Variable and class declarations are also hoisted, so they too can be referenced before they are declared.
Note that doing so can lead to unexpected errors, and is not generally recommended.

If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted.
Trying to read the variable before it is initialized results in ReferenceError exception.
*/