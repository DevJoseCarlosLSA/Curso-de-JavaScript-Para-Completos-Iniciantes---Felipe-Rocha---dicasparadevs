const person = {
    firstName: "Luis",
    lastName: "Otavio",
    age: "09",
    hobbies: ["Assistir Streamers", "Jogos Eletronicos", "Ler"],
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

//(Destructuring) mesma coisa que acima
const { firstName: primeiroNome, lastName, age, hobbies } = person;

const read = person.hobbies[2];

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(person['age']);
console.log(read);