for (let i = 0; i < 9 ; i+=2) {

    if((i % 2 ) != 0) {
        continue;
    }
    if(i == 10) {
        break;
    }
    console.log(i);
}
console.log("Aqui ya me sali :3");

//empty y null no son iguales

var1 = null;
// var2 = empty;
var3 = "";
var4 = 0;
var5 = false;
var6 = undefined;

console.log(var1);

//imprime un cero
console.log(var1 + var1);
// console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);

console.log(var6);
console.log(var6 + var6); //Nan --> Not A Number

var6 = 5;
console.log(var6);

