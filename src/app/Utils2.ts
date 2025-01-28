export class PasswordVerifier {
    verify(password: string) {
        if (password == null) {
            throw Error('password should not be null')
        }
        if(password.length<8){
            throw Error('password should be larger than 8 characters')
        }
        if(password.toLowerCase()==password)
        {
            throw Error('password should have at least one uppercase letter')
        }
        if(password.toUpperCase() == password){
            throw Error('password should have at least one lowercase letter')
        }
        if(password.split("").every(char => isNaN(Number(char))))
        {
            throw Error('password contain at least one number');
        }

    }
}