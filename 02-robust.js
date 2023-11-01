function getPerson(person) {
    try {
        if (typeof person !== "object" || !person.name || !person.age) {
            throw new Error("invalid parameter type");
        }
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        return error.message;
    }
}
console.log(getPerson({ name: "Pratik", age: 21}));
console.log(getPerson({ name: "Pratik"}));

