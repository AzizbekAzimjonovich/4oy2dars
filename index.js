/**
 * let som=prompt("mablag'ingizni kiriting so'mda");
let hisob=(som-750*11000.34-120*12354.03);
if(hisob>=0){
    safar=("oq yo'l Alisher");
}
else{
    safar=("Alisher, ozgina sabr qilish kerak bo'lar ekan")
}
console.log(safar);
 */

//1-misol
/**
 * let number1=prompt("1-son");
let number2=prompt("2-son");
let number3=prompt("3-son");
if(number1>number2&&number1>number3){
    max=number1
}
else if(number2>number1&&number2>number3){
    max=number2
}
else if(number3>number2&&number3>number1){
    max=number3
}
console.log(max);
 */

//2-misol
/**
 * let number1=prompt("1-son");
let number2=prompt("2-son");
if(number1>number2){
    max=number1
}
else{
  if (number2>number1) {
        max=number2
  }
  else{
    max=0
  }
}
if (max!=0) {
    kub=Math.pow(max,3);
}
else{
    kub=("teng")
}
console.log(kub);
 */

//3-misol
/**
 * let number1=+prompt("1-son");
let number2=+prompt("2-son");
let number3=+prompt("3-son");
let toq=0;
if(number1%2==1){
    toq=toq+number1
}
if (number2%2==1) {
    toq=toq+number2
}
if (number3%2==1) {
    toq=toq+number3
}
console.log(toq);
 */

//4-misol
/**let number1=+prompt("1-son");
let number2=+prompt("2-son");
let number3=+prompt("3-son");
let number4=+prompt("4-son");
let karrali3=0;
if(number1%3==0){
    karrali3=karrali3+1
}

if(number2%3==0){
    karrali3=karrali3+1
}
if(number3%3==0){
    karrali3=karrali3+1
}
if(number4%3==0){
    karrali3=karrali3+1
}

console.log(karrali3);
 */

//5-misol
let son=+prompt("son kiriting");
if (son%3==0&&son%5==0) {
    javob=true
}
else{
    javob=false
}
console.log(javob);