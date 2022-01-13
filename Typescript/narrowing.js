function getValue(value) {
    //here a variable can be int or string so when user
    // add string it will display string and if number then number
    return value;
}
function displayValue() {
    var c = getValue("Hello");
    console.log(c);
}
displayValue();
