
var pokimon={
    name:"pkoji",
    last:"mon",
    getFullName: function (){
        return this.name+" "+this.last
    }
}

var getPokimon=function (emp,memp){
    return this.getFullName()+" "+emp+" "+memp;

}
console.log(getPokimon.call(pokimon,"emp","mamp"))
console.log(window.pokimon)
console.log(window.getPokimon("ram",1))