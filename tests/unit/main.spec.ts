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
})