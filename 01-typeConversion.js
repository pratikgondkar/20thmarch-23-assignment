function converToNumber(str) {
    try {
        const num = Number(str);
        if (Number.isNaN(num)) {
            throw new Error ("Invalid Number");
        }
        return num;
    } catch (error) {
        return error.message;
    }
}
console.log(converToNumber("123"));
console.log(converToNumber("abc"));
console.log(converToNumber("123Pratik"));