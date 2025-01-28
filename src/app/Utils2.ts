export class PasswordVerifier {
    verify(password: string) {
        if (password == null) {
            throw Error('password should not be null')
        }
        throw Error('password should be larger than 8 characters')
    }
}