import { StringUtils, daysInCurrentMonthBetween, getStringInfo, toUpperCase } from "../app/Utils";
import { PasswordVerifier } from "../app/Utils2";

// describe('Utils test suite', () => {

//     it('Should return upperCase of valid string', () => {

//         // arrange:
//         const sut = toUpperCase;
//         const expected = 'ABC';

//         // act:
//         const actual = sut('abc');

//         //assert:
//         expect(actual).toBe(expected);
//     })


//     describe('ToUpperCase examples', () => {
//         it.each([
//             { input: 'abc', expected: 'ABC' },
//             { input: 'My-String', expected: 'MY-STRING' },
//             { input: 'def', expected: 'DEF' }
//         ])('$input upperCase should be $expected', ({ input, expected }) => {
//             const actual = toUpperCase(input);
//             expect(actual).toBe(expected);
//         })
//     })

//     describe('getStringInfo for argument My-String', () => {

//         test('return right length', () => {
//             const actual = getStringInfo('My-String');
//             expect(actual.characters).toHaveLength(9);
//         })

//         test('return right lower case', () => {
//             const actual = getStringInfo('My-String');
//             expect(actual.lowercase).toBe('my-string');
//         });

//         test('return right upper case', () => {
//             const actual = getStringInfo('My-String');
//             expect(actual.uppercase).toBe('MY-STRING');
//         });


//         test('return right characters', () => {
//             const actual = getStringInfo('My-String');
//             expect(actual.characters.length).toEqual(9);
//             expect(actual.characters).toContain<string>('M');
//         });

//         test('return defined extra info', () => {
//             const actual = getStringInfo('My-String');
//             expect(actual.extraInfo).toEqual({})
//             expect(actual.extraInfo).not.toBe(null);
//         })

//     })



//     describe('StringUtils tests', () => {

//         let sut: StringUtils;

//         beforeEach(() => {
//             sut = new StringUtils();
//         })

//         //afterAll() //clear database

//         it('Should return correct uppercase', () => {

//             const sut = new StringUtils();

//             const actual = sut.toUpperCase('abc');

//             expect(actual).toBe('ABC');
//         })

//         it('Should throw error on invalid argument', () => {

//             function expectError() {
//                 const actual = sut.toUpperCase('');
//             }

//             expect(expectError).toThrow();

//         })

//         it('Should throw error  - try catch', (done) => {
//             try {
//                 sut.toUpperCase('');
//                 done('GetStringInfo should throw error')
//             }
//             catch (err) {
//                 expect(err).toBeInstanceOf(Error);
//                 expect(err).toHaveProperty('message', 'Invalid args');

//             }
//         })
//     })

// });




// describe.only('Month day test suite', () => {

//     it('Should return correct number of days for january', () => {
//         const startDate = new Date(2024, 7, 1); // January 1st, 2022
//         const endDate = new Date(2024, 7, 30); // February 1st, 2022
//         const month = 7;
//         const expected = 30;
//         const actual = daysInCurrentMonthBetween(startDate, endDate, month);
//         expect(actual).toBe(expected);
//     })

//     it.each([
//         { startDate: new Date(2024, 0, 1), endDate: new Date(2024, 0, 31), month: 0, expected: 31 },
//         { startDate: new Date(2024, 1, 1), endDate: new Date(2024, 1, 28), month: 1, expected: 28 },
//         { startDate: new Date(2024, 2, 1), endDate: new Date(2024, 2, 31), month: 2, expected: 31 },
//         { startDate: new Date(2024, 3, 1), endDate: new Date(2024, 3, 30), month: 3, expected: 30 },
//         { startDate: new Date(2024, 4, 1), endDate: new Date(2024, 4, 31), month: 4, expected: 31 },
//         { startDate: new Date(2024, 5, 1), endDate: new Date(2024, 5, 30), month: 5, expected: 30 },
//         { startDate: new Date(2024, 6, 1), endDate: new Date(2024, 6, 31), month: 6, expected: 31 },
//         { startDate: new Date(2024, 7, 1), endDate: new Date(2024, 7, 31), month: 7, expected: 31 },
//         { startDate: new Date(2024, 8, 1), endDate: new Date(2024, 8, 30), month: 8, expected: 30 },
//         { startDate: new Date(2024, 9, 1), endDate: new Date(2024, 9, 31), month: 9, expected: 31 },
//         { startDate: new Date(2024, 10, 1), endDate: new Date(2024, 10, 30), month: 10, expected: 30 },
//         { startDate: new Date(2024, 11, 1), endDate: new Date(2024, 11, 31), month: 11, expected: 31 }
//     ])('Should return correct number of days for month $month', ({
//         startDate,
//         endDate,
//         month,
//         expected
//     }) => {
//         const actual = daysInCurrentMonthBetween(startDate, endDate, month);
//         expect(actual).toBe(expected);
//     })


// })


describe('Password verification',()=>{
    const passwordVerifier = new PasswordVerifier()
    it('password should not be null',()=>{
        expect(()=>{
            passwordVerifier.verify(null)
        }).toThrow(Error('password should not be null'));
    })

    it('password should be larger than 8 characters',()=>{
        try{
            passwordVerifier.verify("abcde")
        }
        catch(e){
          
            expect(e.message).toContain('password should be larger than 8 characters')
        }
    })
    it('password should have at least one uppercase letter',()=>{
        try{
            passwordVerifier.verify("abcdefghijkl")
        }
        catch(e){
            expect(e.message).toContain('password should have at least one uppercase letter')
        }
    })
    it('password should have at least one lowercase letter',()=>{
        try{
            passwordVerifier.verify("ABCDEFGHJIKL")
        }
        catch(e){
            expect(e.message).toContain('password should have at least one lowercase letter')

        }
    })
    it('password contain at least one number',()=>{
        try{
            passwordVerifier.verify("Abcdefghijkl")
        }
        catch(e){
            expect(e.message).toContain('password contain at least one number')

        }
    })
    it('password should be valid if passes all validations',()=>{     
        expect(()=>passwordVerifier.verify('Abcdefghi123')).not.toThrow(Error)
    })

    it('password should be okay if it passes at least four validations',()=>{
        expect(()=>passwordVerifier.verify('Abcdefghijkl')).not.toThrow(Error)
    })


})