/*console.log(Math.max([1,90,3,4,5]))
console.log(Math.max.apply(this,[123,45,2,13]))

const arr=[1,2,3,4,5,2,12,90,7]
console.log(arr.slice(2))
console.log(arr)

function a(){
    const a=Array.prototype.slice.bind(arguments);
     const b=a()
    b.push(23)
console.log(b)*/

/*var b={
    x:10,
    sum :function (z){
        return this.x+this.y+z;
    }
}

var a={
    y:10,
}
var t=b.sum.bind(a,8)
console.log(t())*/

//without proto above will give nan because x is not in a
/*var b={
    x:10,
    sum :function (z){
        return this.x+this.y+z;
    }
}

var a={
    y:10,
    __proto__:b
}
var t=b.sum.bind(a,8)
console.log(t())*/

//with proto above will give 28 because x is in a
console.log(Array.prototype)


function Foo(y){
    const x=10;
    this.y=y;
}

Foo.prototype.name="praveen"
Foo.prototype.sum=function (z){
    console.log(this.y+" "+z)
    return this.y+z
}
const c=new Foo(5)
c.sum(8)


