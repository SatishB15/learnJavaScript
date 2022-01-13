function addValues(a: number, b: number, c?: number): number {
    if (c != undefined) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
console.log(addValues(1, 2));