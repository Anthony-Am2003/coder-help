const validateEmail = (email) => {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email)
}


const validateName = (name) => {
    const nameWithoutSpaces = name.trim();
    const firstLetter = nameWithoutSpaces.charAt(0).toUpperCase();
    const restWord = nameWithoutSpaces.slice(1);
    return `${firstLetter}${restWord}`;
}


module.exports = {
    validateEmail,
    validateName
}