/*
function a(name,age){
    this.name=name;
    this.age=age;
}
//console.log(a.prototype)

function b(a,b){
    console.log(a+b);
}
//console.log(b.prototype)

class A{
    A(a,b){
        this.a=a;
        this.b=b;
    }

    sum(){
       return  this.a+this.b
    }
}
var ab=new A(2,3);
console.log(ab.sum.prototype);

var temp={
    a:"o",
    b:"b",
    c:function (n,m){console.log(n+m)}
}


console.log(temp.c(7,8))*/
/*

function makeWorkout(){
    var name="praveen";

    return function (){
        console.log(name);
    }
}


var name="ankur"
var work=makeWorkout();
work()

function makecounter(){
    var i=0;
    var name="pk";
    return function (){
        console.log(i++);
    }
}

var count=new makecounter()
console.log(count.name)

function sum(a,b){
   return {a:"praveen",b:"singh"}
}
sum.prototype.mul=()=>{console.log("this is me")}

var t= sum(2,3)
sum.prototype.sumt=(a,b)=>{return a+b}
var l=sum(2,3)
console.log(l)
console.log(t.a+" "+t.b)

function user(a,b){
    this.a=a;
    this.b=b;
}
user.prototype.sum=(a,b)=>{return a+b}

var usr= new user(7,1);

console.log(usr.a+" "+usr.b)
console.log(usr.sum(7,8))
*/


/*function divide(){
    var a=10;
    var b=20;
    console.log(a/b)
    return  function sum(){
        console.log("indise nested")
    }
}
var a=divide()
console.log(a.prototype.mul=function (){console.log(this.a*this.b)})*/
/*
function a(){(function (a,b,c){
    console.log("selfcalling "+a+" "+b+" "+c)
})("ram","shyam","ghanshayam");}
a()*/

//closure and ifi

/*
var a=(function(){
    var a=function(){console.log("this is private")}
    return{
        public:function(){ a()}
    }
} )();

a.public()
*/

/*

function sum(a){

    if(arguments.length>1){
        return arguments[0]+arguments[1];
    }
    return function(b){
        return a+b;
    }
}
console.log(sum(1,2))
console.log(sum(10)(89))

var obj={
    first: function (){console.log("first"); return obj},
    second: function (){console.log("second"); return obj},
    third: function (){console.log("third"); return obj}
}

console.log(obj.first())

obj.first().second().third()*/


