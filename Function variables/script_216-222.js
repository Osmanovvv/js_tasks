// Задание 216 №1
let num216_1 = 1;
function func() {
    console.log(num216_1);
}
func();

// Задание 216 №2
let num216_2 = 1;
function func() {
    console.log(num216_2);
}
num216_2 = 2;
func();  

// Задание 216 №3
function func() {
    console.log(num216_3);
}
let num216_3;
num216_3 = 1;
func();
num216_3 = 2;
func();

// Задание 217 №1
function func() {
	let num217_1 = 5;
	return num217_1;
}
console.log(num217_1);

// Задание 217 №2
function func() {
	let num217_2 = 5;
	return num217_2;
}
console.log(func());

// Задание 218 №1
let num218_1 = 1;
function func() {
	num218_1 = 2;
}
func();
console.log(num218_1);

// Задание 218 №2
let num218_2 = 1;
function func() {
	let num218_2 = 2;
}
func();
console.log(num218_2);


// Задание 219 №1
let num219_1 = 1;
function func() {
  num219_1 = 2;
}
func();
console.log(num219_1);

// Задание 219 №2
let num219_2 = 1;
function func() {
  num219_2 = 2;
}
console.log(num219_2);

// Задание 219 №3
let num219_3 = 1;
function func() {
  let num219_3 = 2;
}
func();
console.log(num219_3); 

// Задание 219 №4
let num219_4 = 1;
function func() {
  let num219_4 = 2;
}
console.log(num219_4);
func(); 

// Задание 219 №5
let num219_5 = 1;
function func() {
  num219_5 = 2;
}
console.log(num219_5);
func(); 

// Задание 219 №6
let num219_6 = 1;
function func() {
  num219_6++;
}
func();
func();
func();
console.log(num219_6);

// Задание 219 №7
function func() {
  num219_7 = 2;
}
let num219_7 = 1;
console.log(num219_7);
func();

// Задание 219 №8
function func() {
  num219_8 = 2;
}
let num219_8 = 1;
func();
console.log(num219_8);

// Задание 220 №1
function func(localNum) {
  console.log(localNum);
}
func(1);

// Задание 220 №2
function func(localNum) {
  console.log(localNum);
}
let num220_2 = 1;
func(num220_2);

// Задание 220 №3
function func(localNum) {
  console.log(localNum);
}
let num220_3 = 1;
func(num220_3);
num220_3 = 2;

// Задание 220 №4
let num220_4 = 1;
function func(localNum) {
  console.log(localNum);
}
num220_4 = 2;
func(num220_4);

// Задание 220 №5
function func(localNum) {
  localNum = 2;
}
let num220_5 = 1;
func(num220_5);
console.log(num220_5);

// Задание 220 №6
function func(localNum) {
  num220_6 = 2;
}
let num220_6 = 1;
func(num220_6);
console.log(num220_6);

// Задание 220 №7
function func(localNum) {
  let num220_7 = 2;
}
let num220_7 = 1;
func(num220_7);
console.log(num220_7);

// Задание 221 №1
function func(num221_1) {
  num221_1 = 2;
}
let num221_1 = 1;
func(num221_1);
console.log(num221_1);

// Зание 221 №2
function func() {
  num221_2 = 2;
}
let num221_2 = 1;
func();
console.log(num221_2);

// Зание 221 №3
function func() {
  let num221_3 = 2;
}
let num221_3 = 1;
func();
console.log(num221_3);

// Зание 222 №1
function func(obj222_1) {
  obj222_1.a = '!';
}
let obj222_1 = {a: 1, b: 2, c: 3};
func(obj222_1);
console.log(obj222_1);

// Задание 222 №2
function func(arg) {
  arg = '!';
}
let obj222_2 = {a: 1, b: 2, c: 3};
func(obj222_2.a);
console.log(obj222_2);

// Задание 222 №3
function func(obj222_3) {
  obj222_3 = '!';
}
let obj222_3 = {a: 1, b: 2, c: 3};
func(obj222_3.a);
console.log(obj222_3);

// Задание 222 №4
function func(arr222_4) {
  arr222_4.splice(1, 1);
}
let arr222_4 = [1, 2, 3];
func(arr222_4);
console.log(arr222_4); [1, 3]
// Задание 222 №5
function func(arr222_5) {
  arr222_5.slice(1, 1);
}
let arr222_5 = [1, 2, 3];
func(arr222_5);
console.log(arr222_5); 

// Задание 222 №6
function func(arr222_6) {
  let newArr = arr222_6;
  newArr[0] = '!';
}
let arr222_6 = [1, 2, 3];
func(arr222_6);
console.log(arr222_6);  