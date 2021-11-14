function Equal() {
    let x=5;
    let y=x;
    console.log(y);
}
Equal();


function addAll() {
    let arr=[3,4,5,6,7,8];

    for(let i=0;i<arr.length;i++)
    {
        arr[i]+=1;
    }
    console.log(arr);
}
function subAll() {
    let arr=[3,4,5,6,7,8];

    for(let i=0;i<arr.length;i++)
    {
        arr[i]-=1;
    }
    console.log(arr);
}
function mulAll() {
    let arr=[3,4,5,6,7,8];

    for(let i=0;i<arr.length;i++)
    {
        arr[i]*=5;
    }
    console.log(arr);
}
function divAll() {
    let arr=[3,4,5,6,7,8];

    for(let i=0;i<arr.length;i++)
    {
        arr[i]/=2;
    }
    console.log(arr);
}
function modAll() {
    let arr=[3,4,5,6,7,8];

    for(let i=0;i<arr.length;i++)
    {
        arr[i]%=2;
    }
    console.log(arr);
}
function expoAll() {
    let arr=[3,4,5,6,7,8];

    for(let i=0;i<arr.length;i++)
    {
        arr[i]**=2;
    }
    console.log(arr);
}


addAll();
subAll();
mulAll();
divAll();
modAll();
expoAll();
