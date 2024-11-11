// Задание 80 №1
let obj80 = {1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4:'Thursday', 5:'Friday', 6:"Saturday", 7:"Sunday"};
console.log(obj80[1], obj80[2], obj80[3], obj80[4], obj80[5], obj80[6], obj80[6]);

// Задание 81 №1
let obj81 = {1: 'January', 2: 'February', 3: 'March', 4: "April", 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};
console.log(obj81);

// Задание 82 №1
let user82={name: "Catherine" , surname: "Grebeneva", patronymic: "Andreevna"};
console.log(user82["surname"]+" "+user82["name"]+' '+user82["patronymic"]);

// Задание 83 №1
let date83= {year:"2024", month:"10", day:"03"};
console.log(date83.year+'.'+date83.month+"."+date83.day);

// Задание 84 №1
// let obj84_1 = {
// 	'1a': 1, - кавычки обязательны
// 	'b2': 2, - кавычки не обязательны
// 	'с-с': 3, - кавычки обязательны
// 	'd 4': 4, - кавычки обязательны
// 	'e5': 5 - кавычки не обязательны
// };

// Задание 84 №2
let obj84_2 = {
	'1a': 1, 
	'b2': 2, 
	'с-с': 3, 
	'd 4': 4, 
	'e5': 5
}; 
console.log(obj84_2['1a']);
console.log(obj84_2.b2);
console.log(obj84_2['c-c']);
console.log(obj84_2['d 4']);
console.log(obj84_2.e5);

// Задание 85 №1
let obj85 = {x: 1, y: 2, z: 3};
obj85.x = obj85.x ** 2;
obj85.y = obj85.y ** 2;
obj85.z = obj85.z ** 2;
console.log(obj85);

// Задание 86 №1
let obj86 = {};
obj86.a = 'love';
obj86.b = 'kind';
obj86.c = 'miracle';
console.log(obj86);

// Задание 87 №1
let obj87 = {5: 'rosetta', 25: 'tinker bell', 15: 'silvermist'};
console.log(obj87[5])
console.log(obj87[15]); 
console.log(obj87[25]);

// Задание 88 №1
let obj88 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj88);
console.log(keys);

// Задание 89 №1
let obj89 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj89).length);

// Задание 90 №1
let obj90 = {x: 1, y: 2, z: 3};
let key90 = 'x';
console.log(obj90[key90]);

// Задание 91 №1
let obj91_1 = {x: 1, y: 2, z: 3};
console.log(obj91_1['x']);

// Задание 91 №2
let obj91_2 = {x: 1, y: 2, z: 3};
let key91 = 'x';
console.log(obj91_2[key91]);

// Задание 92 №1
let obj92_1 = {x: 1, y: 2, z: 3};
let prop92_1 = 'x';
console.log(obj92_1[prop92_1]);

// Задание 92 №2
let obj92_2 = {x: 1, y: 2, z: 3};

let prop92_2 = 'x';
console.log(obj92_2[prop92_2]);

// Задание 93 №1
// let key93 = 'x';
// let obj93_1 = {
// [key93]: 1,
// y: 2,
// z: 3
// };

// Задание 93 №2
// let obj93_2 = {
// 	[key93_1]: 1,
// 	[key93_2]: 2,
// 	[key93_3]: 3
// 	};
// 	let key93_1 = 'x';
// 	let key93_2 = 'y';
// 	let key93_3 = 'z';

// Задание 94 №1
let obj94 = {x: 1, y: 2, z: 3};
console.log('x' in obj94);
console.log('w' in obj94); 

// Задание 95 №1
let obj95 = {x: 1, y: 2, z: 3};
delete obj95.x;
console.log('x' in obj95);

// Задание 96 №1
// console.log( typeof {x: 1, y: 2, z: 3} );

// Задание 96 №2
// console.log( typeof {} );

// Задание 96 №3
// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj );

// Задание 96 №4
// let obj1 = {x: 1, y: 2, z: 3};
// console.log( typeof obj1['x'] ); 

// Задание 97 №1
// console.log( typeof {x: 1, y: 2, z: 3} ); 

// Задание 97 №2
// console.log( typeof [1, 2, 3] ); 

// Задание 97 №3
// let arr1 = [1, 2, 3];
// console.log( typeof arr1 ); 

// Задание 97 №4
// let arr2 = [1, 2, 3];
// console.log( typeof arr2[0] ); 

// Задание 97 №5
// let arr3 = ['1', '2', '3'];
// console.log( typeof arr3[0] ); 

// Задание 98 №1
// console.log( Array.isArray([1, 2, 3]) );

// Задание 98 №2
// console.log( Array.isArray({x: 1, y: 2, z: 3}) ); 

// Задание 99 №1
// let test = {x: 1, y: 2, z: 3};
// console.log(test);

// Задание 99 №2
// let test = {x: 1, y: 2, z: 3};
// console.log(test.x);

// Задание 99 №3
// let test = [1, 2, 3];
// console.log(test);

// Задание 99 №4
// let test = [1, 2, 3];
// console.log(test[1]);

// Задание 99 №5
// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1);

// Задание 99 №6
// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1[test2]);

// Задание 99 №7
// Примитивные типы данных в JavaScript:
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol (ES6)
// 7. bigint (ES11)

// Задание 100 №1
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// console.log(arr2);

// Задание 100 №2
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[1] = 'b';
// console.log(arr1);

// Задание 100 №3
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[0] = 'b';
// console.log(arr2);

// Задание 101 №1
const arr101_1 = ['a', 'b', 'c'];
arr101_1[1] = '!';
console.log(arr101_1);

// Задание 101 №2
const arr101_2 = ['a', 'b', 'c'];
arr101_2 = [1, 2, 3];
console.log(arr101_2);

// Задание 101 №3
const arr101_3 = ['a', 'b', 'c'];
arr101_3 = ['a', 'b', 'c'];
console.log(arr101_3);

// Задание 102 №1
const arr102 = [1, 2, 3, 4, 5];
const res102 = arr102[1] + arr102[2];
console.log(res102);

// Задание 103 №1
let obj103_1 = {x: 1, y: 2, z: 3};
console.log(objobj103_1['x']); 

// Задание 103 №2
let obj103_2 = {x: 1, y: 2, z: 3};
let key103_2  = 'x';
console.log(obj103_2[key103_2 ]);

// Задание 103 №3
let obj103_3 = {x: 1, y: 2, z: 3};
let sum = obj103_3['x'] + obj103_3['y'] + obj103_3['z']; 
console.log(sum); 

// Задание 103 №4
let obj103_4 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj103_4).length); 