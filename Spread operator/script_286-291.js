// Задание 286 №1
console.log('Результат задачи 286 №1:');
let arr286 = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr286));

// Задание 287 №1
function func(n1, n2, n3, n4, n5, n6, n7, n8) {
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}
console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) ); 


// Задание 288 №1
console.log('Результат задачи 288 №1:');
let arr288 = [-10, -5, 0, 5, 10];
console.log(Math.min(...arr288));

// Задание 289 №1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr  = ['a', ...arr1, 'b', 'c', ...arr2];
console.log(arr); 

// Задание 289 №2
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
arr  = ['a', ...arr1, ...arr1, 'b', 'c'];
console.log(arr);

// Задание 289 №3
arr1 = [1, 2, 3];
arr2 = [...arr1, 4, 5, 6];
arr  = ['a', 'b', 'c', ...arr2];
console.log(arr);

// Задание 289 №4
arr1 = [1, 2, 3];
arr2 = [...arr1, 4, 5, 6];
let arr3 = [...arr2, 7, 8, 9];
arr  = [0, ...arr3];
console.log(arr);

// Задание 289 №5
arr1 = [1, 2, 3];
arr2 = [...arr1];
console.log(arr2);