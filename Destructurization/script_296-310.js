  // Задание 296 №1
console.log('Результат задачи 296 №1:');
let arr296 = ['John', 'Smit', 'development', 'programmer', 2000];
let [first_name, surname, department, position, salary] = arr296; 
console.log(first_name, surname, department, position, salary);

// Задание 297 №1
console.log('Результат задачи 297 №1:');
function func297() {
	return ['Chip and Dale: Rescue Rangers', 'Series', 'Zipper', 'Disney', 1989];
}
let [movie, genre, hero, production, year] = func297(); 
console.log(func297());  

// Задание 298 №1
console.log('Результат задачи 298 №1:');
let arr298 = ['Plants', 'Flowers', 'Roses', 'Pink', 'Symbol of love'];
let [,, type, color,] = arr298; 
console.log(type, color)

// Задание 300 №1
console.log('Результат задачи 300 №1:');
let arr300 = ['Angelina Ballerina', 'Story', 'Katharine Holabird', 'Eksmo', 2019];
let [title, genres, author, publisher, date] = arr300; 
let info = arr300.slice(2);
console.log(info);  

// Задание 301 №1
console.log('Результат задачи 301 №1:');
let arr301 = ['Club Heaven', 'Nessa Barrett', 'Pop rock'];
let [song, author_name, type_of_song, publication = '2023'] = arr301; 
console.log(song, author_name, type_of_song, publication);