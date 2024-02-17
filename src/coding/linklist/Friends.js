var rachel={
    name:"rachel",
    total:200,
    deuctTotal:function (fee){
        this.total=this.total-fee;
        return this.name +" "+ this.total;
    }

}
var pra={name:"ptaveen",total:300}

var r=rachel.deuctTotal.bind(pra);
var c=rachel.deuctTotal.call(pra,10)
var d=rachel.deuctTotal.apply(pra,[20])
console.log(c)
console.log(r(90))
console.log(d)
