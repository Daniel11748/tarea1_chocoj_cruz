//stri1

let  saludo = "hola";
let upperStr = saludo.toUpperCase();
console.log(upperStr); // "HOLA"


//string 2

let string = "Hola mundo!";
let resultado = string.includes("mundo");
console.log(resultado); // true


//string 3

let dato = "Hola mundo!";
let substr = dato.substring(5,10 );
console.log(substr); // "Hola"


//number 1
let num = 123.456;
let fixedNum = num.toFixed(2);
console.log(fixedNum); // "123.46"

//number 2

let num2 = 123;
let strNum = num2.toString();
console.log(strNum); // "123"

//number 3

let num3 = 16;
let sqrtNum = Math.sqrt(num3);
console.log(sqrtNum); // 4


//bool 1

let blanco= true;
let negro = false;
let resultado1 = blanco && negro;
console.log(resultado1); // false

//bool 2

let a = true;
let b = false;
let resultado2 = a || b;
console.log(resultado2); // true

//bool 3

let y = true;
let resultado3 = !a;
console.log(resultado3); // false

//object 1

let obj1 = { a: 1, b: 2, c: 3 };
let keys = Object.keys(obj1);
console.log(keys); // ["a", "b", "c"]

//object 2

let obj2 = { a: 1, b: 2, c: 3 };
let values = Object.values(obj2);
console.log(values); // [1, 2, 3]

//object 3

let objeto1 = { a: 1 };
let objeto2 = { b: 2 };
let obj3 = Object.assign({}, objeto1, objeto2);
console.log(obj3); // { a: 1, b: 2 }

//array 1

let array1 = [1, 2, 3];
array1.push(4);
console.log(array1); // [1, 2, 3, 4]

//array 2

let array2 = [1, 2, 3];
let doubled = array2.map(x => x * 2);
console.log(doubled); // [2, 4, 6]

//array 3

let array3 = [1, 2, 3, 4];
let even = array3.filter(x => x % 2 === 0);
console.log(even); // [2, 4]

