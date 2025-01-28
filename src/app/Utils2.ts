export class PasswordVerifier {
    verify(password: string) {
        notNull(password);
        largerThanEightChars(password);
        atLeastOneUpperCase(password);
        atLeastOneLowerCase(password)
        atLeastOneNumber(password)
    }
}

const notNull = (password) => {
    if (password == null) {
        throw Error('password should not be null')
    }
}

const largerThanEightChars = (password) => {
    if (password.length < 8) {
        throw Error('password should be larger than 8 characters')
    }
}

const atLeastOneUpperCase = (password) => {
    if (password.toLowerCase() == password) {
        throw Error('password should have at least one uppercase letter')
    }
}

const atLeastOneLowerCase = (password) => {
    if (password.toUpperCase() == password) {
        throw Error('password should have at least one lowercase letter')
    }
}

const atLeastOneNumber = (password) => {
    if (password.split("").every(char => isNaN(Number(char)))) {
        throw Error('password contain at least one number');
    }
}