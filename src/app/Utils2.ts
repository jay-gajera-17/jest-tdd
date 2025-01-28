export class PasswordVerifier {
    verify(password: string) {
        if (password == null) {
            throw Error('password should not be null')
        }
        if(password.length<8){
            throw Error('password should be larger than 8 characters')
        }
        throw Error('password should have at least one uppercase letter')
    }
}