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

// Задание 253 №1
console.log('Результат задачи 253 №1:');
function each(arr253_1, callback) {
	let result253_1 = [];
	
	for (let elem253_1 of arr253_1) {
		result253_1.push( callback(elem253_1) ); 
	}
	
	return result253_1;
}

let result253_1 = each([5, 10, 15, 25, 30], function(num253_1) {
	return num253_1 ** 2;
});

console.log(result253_1);

// Задание 253 №2
console.log('Результат задачи 253 №2:');
function each(arr253_2, callback) {
	let result253_2 = [];
	for (let elem253_2 of arr253_2) {
		result253_2.push( callback(elem253_2) ); 
	}
	return result253_2;
}
let result253_2 = each(['kate', 'grebeneva'], function(str253_2) {
	return str253_2.split("").reverse().join("");
});
console.log(result253_2);

// Задание 253 №3
console.log('Результат задачи 253 №3:');
function each(arr253_3, callback) {
	let result253_3= [];
	for (let elem253_3 of arr253_3) {
		result253_3.push( callback(elem253_3) ); 
	}
	return result253_3;
}
let result253_3 = each(['kate', 'grebeneva'], function(str253_3) {
	let splitted = str253_3.split("");
	return splitted[0].toUpperCase()+ str253_3.slice(1);;
});
console.log(result253_3);

// Задание 254 №1
console.log('Результат задачи 254 №1:');
function square(num254) {
	return num254 ** 3;
   }
   function each(arr254, callback) {
	 let result254 = [];
	 for (let i = 0; i < arr254.length; i++) {
	   result254.push(callback(arr254[i]));
	 }
	 return result254;
   }
   
   let result254 = each([2, 5, 10], square);
   console.log(result254);

   // Задание 256 №1
console.log('Результат задачи 256 №1:');
function filter(arr256, callback) {
	let result256  = [];
	for (let elem256 of arr256) {
		if ( callback(elem256) === true ) {
			result256 .push(elem256);
		}
	}
	return result256 ;
}
let result256 = filter([1, 2, 3, 4, 5], elem256 => elem256 > 0);
console.log(result256)