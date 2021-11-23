class Message
{
    constructor(str) {
        this.str=str;        
    }
    cutString(from,to)
    {
        return this.str.slice(from,to);
    }
}

let m1 = new Message("Hello World");
let cuttedString=m1.cutString(2,5);
console.log(cuttedString);