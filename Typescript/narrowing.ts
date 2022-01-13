function getValue(value: string | number): any {
    //here a variable can be int or string so when user
    // add string it will display string and if number then number
    return value;
}

function displayValue(): void {
    let c = getValue(5);
    console.log(c);
}
displayValue();