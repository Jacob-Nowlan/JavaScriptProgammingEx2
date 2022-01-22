let l = ('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let firstName = 'Chris';
let lastName = 'Cusack';
let age = 29;

// Concentation
let msgConcat = 'My name is ' + firstName + ' ' + lastName + ' and my age is ' + age + '.';
console.log(msgConcat);
console.log(1);

//String literals
let msgStringLiteral = `My name is ${firstName} ${lastName} and my age is ${age}.`;
console.log(msgStringLiteral);
console.log(1);

//Print string length
console.log(msgStringLiteral.length);
console.log(1);

//Escape and New Line
let a = "Add a new line \n\nThis is another line.";
console.log(a);
console.log(l);

let b = "I quoted the person stating \"I love JavaScript\".";
console.log(b);

let c = 'It\'s right over there.';
console.log(c);

let d = 'I quoted the person stating "I love JavaScript".';
console.log(d);

let e = "It's right over there.";
console.log(e);

let f = `It's right over there. I stated "I love JavaScript".`;
console.log(f);

console.log(l);
console.log("Functions on string");

let g ="abcdefg";

//upper case
console.log(g.toUpperCase());

let h = g.toUpperCase();
console.log(h.toLowerCase());

//Substring
let i = h.substring(3,6);
console.log(i);

//indexOf
g += 'c';
console.log(g);
let index = g.indexOf('c');
console.log(index);