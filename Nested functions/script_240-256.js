// Задание 240 №1
console.log('Результат задания 240 №1:');
test(
	function() {return 1;},
	function() {return 2;},
	function() {return 3;}
);

function test(func240_1, func240_2, func240_3) {
	console.log(func240_1() + func240_2() + func240_3());
}

// Задание 241 №1
function test241(func1, func2, func3) {
    return func1() + func2() + func3();
}

// Задание 241 №2
console.log('Результат задания 241 №2:');
function func1() {
    return 1;
}
function func2() {
    return 2;
}
function func3() {
    return 3;
}
const result241_2 = test241(func1, func2, func3);
console.log(result241_2); 

// Задание 241 №3
console.log('Результат задания 241 №3:');
let func241_1 = function() {
    return 1;
};
let func241_2 = function() {
    return 2;
};
let func241_3 = function() {
    return 3;
};
const result241_3 = test241(func241_1, func241_2, func241_3);
console.log(result241_3); 


// Задание 242 №1
console.log('Результат задания 242 №1:');
function test242_1(func242_1) {
    console.log(func242_1(3));
}
test242_1(function(num) {
    return num * num * num; 
});

// Задание 242 №2
console.log('Результат задания 242 №2:');
function func242_2(num) {
    return num * num * num; 
}
function test242_2(func242_2) {
    console.log(func242_2(3));
}
test242_2(func242_2);

// Задание 242 №3
console.log('Результат задания 242 №3:');
let func242_3 = function(num) {
    return num * num * num; // Возвращаем куб числа
};
function test242_3(func242_3) {
    console.log(func242_3(3));
}
test242_3(func242_3);

// Задание 242 №4
function func242_4(a, b) {
    return a + b; 
}
function test242_4(func242_4) {
    alert('Результат задания 242 №4: ' + func242_4(2, 3)); 
}
test242_4(func242_4);

// Задание 243 №1
console.log('Результат задания 243 №1:');
function test243(num, func243_1, func243_2) {
    return func243_1(num) + func243_2(num);
}
function square(num) {
    return num * num;
}
function cube(num) {
    return num * num * num;
}
const result243 = test243(3, square, cube);
console.log(result243); 

// Задание 244
console.log('Результат задания 244:');
function test244(arr244, func244) {
    for (let i = 0; i < arr244.length; i++) {
        arr244[i] = func244(arr244[i]); 
    }
    
    return arr244; 
}
let result244 = test244([1, 2, 3], function(num) {
    return num * num * num; 
});
console.log(result244); 

// Задание 245 №1
console.log('Результат задания 245 №1:');
function func245(num1, num2) {
	function square245(num) {
	  return num * num;
	}
	function cube245(num) {
	  return num * num * num;
	}
	return square245(num1) + cube245(num2);
  }
  console.log(func245(2, 3)); 


// Задание 246 №1
//   function test() {
// 	let num = 1;
// 	function func() {
// 	  console.log(num);
// 	}
// 	func();
//   }
//   test();

// Задание 246 №2
// function test() {
// 	let num = 1;
// 	function func() {
// 	  console.log(num);
// 	}
//   }
//   test();

// Задание 246 №3
// function test() {
// 	let num = 1;	
// 	function func() {
// 	  console.log(num);
// 	}	
// 	func();
//   }

// Задание 246 №4
// function test() {
// 	let num;
// 	function func() {
// 	  console.log(num);
// 	}
// 	num = 1;
// 	func(); // Первый вызов
// 	num = 2;
// 	func(); // Второй вызов
//   }
//   test();

// Задание 247 №1
// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}
// 	func();
// }
// test(1, 2); 

// Задание 247 №2
// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}
// 	num1 = 2;
// 	func();
// }
// test(1, 2); 


// Задание 248 №1
// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum);
// 	}
// 	func(num);
// }
// test(1); 

// Задание 248 №2
// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum);
// 	}
// 	func(num + 1);
// }
// test(1); 

// Задание 248 №3
// function test(num) {
// 	function func(localNum) {
// 		console.log(num);
// 	}
	
// 	func(num + 1);
// }
// test(1); 

// Задание 248 №4
// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
	
// 	func(num);
// 	console.log(num);
// }

// test(1); 

// Задание 248 №5
// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
// 	func(num);
// 	console.log(localNum); 
// }
// test(1); 

// Задание 248 №6
// function test(num) {
// 	function func(localNum) {
// 		num = 2;
// 	}
// 	func(num);
// 	console.log(num);
// }
// test(1); 


// Задание 249 №1
// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
// 	func(num);
// }
// test(1); 

// Задание 249 №2
// function test(num) {
// 	function func(num) {
// 		num = 2;
// 	}
// 	func(num);
// 	console.log(num);
// }
// test(1); 

// // Задание 249 №3
// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
// 	num = 2;
// 	func(num);
// }
// test(1); 

// Задание 249 №4
// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
// 	func(num);
// 	num = 2;
// }
// test(1); 


// Задание 250 №1
console.log('Результат задачи 250 №1:');
function func250_1() {
	return function() {
		return 1;
	};
}
function func250_2() {
	return function() {
		return 2;
	};
}
console.log(func250_1()() + func250_2()());

// Задание 251 №1
console.log('Результат задачи 251 №1:');
function func251() {
	return function() {
		return function() {
			return function() {
				return '!';
			};
		};
	};
}

console.log(func251()()()()); 

// Задание 252 №1
console.log('Результат задачи 252 №1:');
function func252_1(num252_1) {
	return function(num252_2) {
		return function(num252_3) {
			return num252_1 + num252_2 + num252_3;
		};
	};
}
console.log(func252_1(2)(3)(4)); 

// Задание 252 №2
console.log('Результат задачи 252 №2:');
function func252_2(num1) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return function(num5) {
                    return [num1, num2, num3, num4, num5];
                };
            };
        };
    };
}
let result = func252_2(2)(3)(4)(5)(); 
console.log(result); 