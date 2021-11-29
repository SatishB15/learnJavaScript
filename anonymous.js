// A functio which has no name called as Anonymous Function
// it can be inkove using empty parenthersis => () <=
(function()
{
    console.log("Hello World");
})

();
// Anonymous function with parameters
let person = {
    firstName: 'Satish',
    lastName: 'Birhade'
};

(function (obj) {
    console.log(`${obj.firstName} ${obj.lastName}`);
})(person);