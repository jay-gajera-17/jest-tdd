import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PasswordChecker"


// describe('PasswordChecker test suite', () => {

//     let sut: PasswordChecker;

//     beforeEach(() => {
//         sut = new PasswordChecker();
//     })

//     it('Password with less than 8 character is invalid ', () => {
//         const actual = sut.checkPassword('1234567');
//         expect(actual.valid).toBe(false);
//         expect(actual.reasons).toContain(PasswordErrors.SHORT);
//     })

//     it('Password with more than 8 character is ok ', () => {
//         const actual = sut.checkPassword('12345673673Aa');
//         expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
//     })


//     it('Password with no uppercase is invalid ', () => {
//         const actual = sut.checkPassword('123456abcd');
//         expect(actual.valid).toBe(false);
//         expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
//     })

//     it('Password with  uppercase is ok ', () => {
//         const actual = sut.checkPassword('123456abcdA');
//         expect(actual.valid).toBe(true);
//         expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
//     })

//     it('Password with no lowercase is invalid ', () => {
//         const actual = sut.checkPassword('123456ABCD');
//         expect(actual.valid).toBe(false);
//         expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
//     })

//     it('Password with  lowercase is ok ', () => {
//         const actual = sut.checkPassword('abcdA');
//         expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
//     })

//     it('Complex password is valid',()=>{
//         const actual = sut.checkPassword('Abcd1234!@#$%^&*()');
//         expect(actual.valid).toBe(true);
//         expect(actual.reasons).toEqual([]);
//     })

// })
