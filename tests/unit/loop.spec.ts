/**
 * tests/unit/loop.spec.ts
 * Variables and Constants definition and validation
 * @author DaCoDeMaNiaK <jean-luc.aubert@aelion.fr>
 * @version 1.0.0
 * @see https://github.com/dacodemaniak/initiation-typescript/tree/step-7
 */
describe('Loops feature', () => {
    it(`Should create alphabet string`, () => {
        // Sets the alphabet variable
        let alphabet = ''

        // Sets the ascii code number for a : 97
        const aAsciiCode = 97

        for (let i: number = 0; i < 26; i++) {
            alphabet += String.fromCharCode(i + aAsciiCode)    
        }

        expect(alphabet).toBe('abcdefghijklmnopqrstuvwxyz')
    })

    it(`Should give 50 after loop`, () => {
        const numbers: Array<number> = [5, 8, 2, 20, 15]
        let cumulator: number = 0

        for (const value of numbers) {
            cumulator += value
        }

        expect(cumulator).toBe(50)
    })

    it (`Should give 'James Bond' from introspection`, () => {
        // Set an object
        const person: any = {
            firstname: 'James',
            lastname: 'Bond'
        }

        // Sets the final string we want
        let greeting = ''

        // Use for... in to introspect the object
        for (const attribute in person) {
            if (person.hasOwnProperty(attribute)) {
                greeting += person[attribute] + ' '
            }
        }
        // Strip last space char
        greeting = greeting.substring(0, greeting.length - 1)

        expect(greeting).toBe('James Bond')
    })

    it(`Should build an array of even single value`, () => {
        // Sets the destination array
        let finalArray: Array<number>

        // Sets a Set object, used to avoid value duplication
        const uniqueEvenValues: Set<number> = new Set<number>()

        // Sets the original values
        const values: Array<number> = [5, 4, 2, 4, 8, 3, 10, 4]

        values.forEach((value: number) => {
            if (value % 2 === 0) {
                uniqueEvenValues.add(value)
            }
        })

        // Convert back Set to Array
        finalArray = Array.from(uniqueEvenValues)
        expect(finalArray).toStrictEqual([4, 2, 8, 10])
    })

    it (`Should have a counter to equal 4`, () => {
        // Sets the out var
        let next = true

        // Sets the counter
        let counter = 0

        while (next) {
            counter = counter + 1
            if (counter > 3) {
                next = false
            }
        }
        expect(counter).toBe(4)
    })

    it(`Should run once only`, () => {
        let next = false
        let counter = 0
        do {
            counter = counter + 1
        } while(next)
        expect(counter).toBe(1)
    })


})