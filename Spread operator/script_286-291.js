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
