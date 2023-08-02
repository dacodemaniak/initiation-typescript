/**
 * tests/unit/main.spec.ts
 * Variables and Constants definition and validation
 * @author DaCoDeMaNiaK <jean-luc.aubert@aelion.fr>
 * @version 1.0.0
 * @see https://github.com/dacodemaniak/initiation-typescript/tree/step-2
 */
describe('Main app', () => {
    it(`Should type of 'stringVar' to be string`, () => {
        // Sets a implicitly typed var using let keyword
        let stringVar = 'Jean-Luc'
        expect(typeof stringVar).toBe('string')
    })

    it(`Shoud be of type number`, () =>  {
        // Sets a type to a variable
        let numberVar: number
        numberVar = 15 // var is no more "undefined"
        expect(typeof numberVar).toBe('number')
    })

    it(`Should be of type boolean`, () => {
        let booleanVar: boolean
        booleanVar = true
        expect(typeof booleanVar).toBe('boolean')
    })

    it(`Should set a number constant with value 99`, () => {
        const UNDER_HUNDRED: number = 99
        expect(UNDER_HUNDRED).toBe(99)
    })

    it (`Should implicitly to be of boolean type`, () => {
        const TRUE_ASSERT = true
        expect(typeof TRUE_ASSERT).toBe('boolean')
    })
})