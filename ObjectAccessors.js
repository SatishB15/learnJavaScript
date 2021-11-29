//Mainly Object Accessor are(Getter And Setters)

let Bench={
    length:"20ft",
    width:"10ft",
    color:"red",
    material:"wood",

    get mate()
    {
        return this.material;
    },
    set col(choice)
    {
        this.color=choice;
    }
}
Bench.col="blue";
console.log(Bench.mate);
console.log(Bench.color);