/**
 * tests/unit/set-map.spec.ts
 * Set and Map collections test case
 * @author DaCoDeMaNiaK <jean-luc.aubert@aelion.fr>
 * @version 1.0.0
 * @see https://github.com/dacodemaniak/initiation-typescript/tree/step-8
 */
describe('Set and Map test case', () => {
    it(`Should set a Set of strings`, () => {
        // Sets a Set object using new keyword
        const names: Set<string> = new Set<string>()
        names.add('Jean-Luc')
        names.add('Jean-Luc')
        expect(typeof Array.from(names)[0]).toBe('string')
        expect(names.size).toBe(1)
    })

    it(`Should considers doublons`, () => {
        // Sets an object
        const firstObject: any = {
            firstname: 'James',
            lastname: 'Bond'
        }
        // Reference firstObject in another const
        const secondObject = firstObject
        // Populate Set with these objects
        const list: Set<any> = new Set<any>()
            .add(firstObject)
            .add(secondObject)
            .add({... firstObject})
        expect(list.size).toEqual(2)
    })


})