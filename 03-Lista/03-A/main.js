const names = ["Felipe", "Mario", "Zak", "Julia", 10, false];

const joao = names[1];

// Adciona PEDRO
names.push("Pedro");

console.log(names);

//ADCIONA no INICIO DA STRING
names.unshift("20Anos-Fernanda");

console.log(names);

names.pop();
names.pop();
names.pop();

//TROCAR STRINGS
names[3] = "José";

//INDEX STRINGS
console.log(names.indexOf("Felipe"));

const indexOfFelipe = names.indexOf("Felipe");

const sortedNames = names.sort();

console.log(names);
console.log(sortedNames);
