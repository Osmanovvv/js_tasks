// Задание 200 №1
console.log('Результат задания 200 №1:');
function func() {
	console.log('Katushka');
}
func();

// Задание 200 №2
console.log('Результат задания 200 №2:');
function res200_2() {
	let sum200_2 = 0;
	for(let i = 1; i <= 100; i++){		
		sum200_2 += i;
	}
  console.log(sum200_2);
}
res200_2();

// Задание 201 №1
console.log('Результат задания 201 №1:');
function cub(num201_1) {
	console.log(num201_1 ** 3);
}
cub(5);

// Задание 201 №2
console.log('Результат задания 201 №2:');
function positive_or_negative(num201_2) {
	if (num201_2 < 0){
		console.log('---');	
	}
	else {
		console.log ('+++')
	};
}
positive_or_negative(5);
positive_or_negative(-5);

// Задание 202 №1
console.log('Результат задания 202 №1:');
function sum202(num202_1, num202_2, num202_3) {
	console.log(num202_1 + num202_2 + num202_3);
}
sum202(5,10,15);

// Задание 203 №1
console.log('Результат задания 203 №1:');
function sum203(num203_1, num203_2, num203_3) {
	console.log(num203_1 + num203_2 + num203_3);
}
let param203_1 = 1;
let param203_2 = 2;
let param203_3 = 3;
sum203(param203_1, param203_2, param203_3);

// Задание 204 №1
console.log('Результат задания 204 №1:');
function func(num = 5) {
	console.log(num * num);
}
func(2); 
func(3);
func(); 

// Задание 204 №2
console.log('Результат задания 204 №2:');
function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func(2, 3);
func(3); 
func();  

// Задание 205 №1
console.log('Результат задания 205 №1:');
function func205_1(num205_1) {
	return num205_1 ** 3;
}
let res205_1 = func205_1(3);
console.log(res205_1);

// Задание 205 №2
console.log('Результат задания 205 №2:');
function func205_2(num205_2) {
	return Math.sqrt(num205_2);
}
let res205_2 = func205_2(3) + func205_2(4);
console.log(res205_2);

// Задание 206 №1
console.log('Результат задания 206 №1:');
function sqrt206_1(num) {
	return Math.sqrt(num);
  }
  function round206_1(num) {
	return num.toFixed(3);
  }
  const res206_1 = round206_1(sqrt206_1(2));
  console.log(res206_1); 


  // Задание 206 №2
console.log('Результат задания 206 №2:');
function sqrt206_2(num) {
return Math.sqrt(num);
}
function sum206_2(num206_1, num206_2, num206_3) {
return num206_1 + num206_2 + num206_3;
}
const res206_2 = sum206_2(sqrt206_2(2), sqrt206_2(3), sqrt206_2(4));
console.log(res206_2); 

// Задание 206 №3
console.log('Результат задания 206 №3:');
function sqrt206_3(num) {
return Math.sqrt(num);
}
function sum206_3(num206_1, num206_2, num206_3) {
return num206_1 + num206_2 + num206_3;
}
function round(num) {
return num.toFixed(3);
}
const res206_3 = round(sum206_3(sqrt206_3(2), sqrt206_3(3), sqrt206_3(4)));
console.log(res206_3); 

// Задание 207 №1
function func(num) {
return num;
let res = num ** 2; 
return res;
}
console.log(func(3));

// Задание 207 №2
function func(num) {
	if (num <= 0) {
	  return Math.abs(num);
	} else {
	  return num ** 2; 
	}
  }
  console.log(func(10)); 
  console.log(func(-5));

// Задание 207 №3
function func(num) {
	if (num <= 0) {
	  return Math.abs(num); 
	}	
	return num ** 2; 
  }  
  console.log(func(10)); 
  console.log(func(-5));

// Задание 208 №1
console.log('Результат задания 208 №1:');
function func208(num) {
let sum208 = 0;
for (let i = 1; i <= num; i++) {
  sum208 += i; 
}
return sum208; 
}
console.log(func208(5)); 

// Задание 209 №1
console.log('Результат задания 209 №1:');
function func209(num) {
let res209 = 0;
while (num >= 10) {
  num /= 2;
  res209++; 
}
return res209; 
}
console.log(func209(160)); 

// Задание 210 №1
console.log('Результат задания 210 №1:');
function func210(num210_1, num210_2) { 
if (num210_1 > 0 && num210_2 > 0) {
  return num210_1 * num210_2;
} else {
  return num210_1 - num210_2;
}
}
console.log(func210(3, 4));  


// Задание 211 №1
console.log('Результат задания 211 №1:');
let arr211_1 = [12,42,64,68];
function func211_1(arr211_1) {
	for (let elem211_1 of arr211_1) {
		if (elem211_1 % 2 == 0) {
			return true;
		}
	}	
	return false;
}
console.log(func211_1(arr211_1));

// Задание 211 №2
console.log('Результат задания 211 №2:');
let num211_2 = 535;
function func211_2(num211_2) {
    let str = num211_2.toString();
    for (let elem211_2 of str) {
      if (Number(elem211_2) % 2 == 0) {
        return false;
      }
    }
    return true;
  }
  console.log(func211_2(num211_2));

// Задание 211 №3
console.log('Результат задания 211 №3:');
  let arr211_3 = [5,15,25,25,45,55];
  function func211_3(arr211_3) {
    for (let i = 1; i < arr211_3.length; i++) {
      if (arr211_3[i] === arr211_3[i - 1]) {
        return true;
      }
    }
    return false;
  }
  console.log(func211_3(arr211_3));

// Задание 212 №1
console.log('Результат задания 212 №1:');
function func212_1(a, b) {
	return a == b;
}
console.log(func212_1(5,10));

// Задание 212 №2
console.log('Результат задания 212 №2:');
function func212_2(l, k) {
	return l != k;
}
console.log(func212_2(1,3));

// Задание 212 №3
console.log('Результат задания 212 №3:');
function func212_3(c, d) {
	return c + d >= 10;
}
console.log(func212_3(15,12));

// Задание 212 №4
console.log('Результат задания 212 №4:');
function func212_4(num212_4) {
	return num212_4 >= 0;
}
console.log(func212_4(-5));