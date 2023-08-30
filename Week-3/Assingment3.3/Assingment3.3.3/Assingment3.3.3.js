function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }

    if (password.includes("password")) {
        return false;
    }

    let hasUppercase = false;
    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
            break;
        }
    }

    return hasUppercase;
}

console.log(isStrongPassword("Qwerty")); 
console.log(isStrongPassword("qwerty123"));