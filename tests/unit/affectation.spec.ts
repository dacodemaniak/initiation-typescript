/**
 * tests/unit/affectation.spec.ts
 * Affectation operations
 * @author DaCoDeMaNiaK <jean-luc.aubert@aelion.fr>
 * @version 1.0.0
 * @see https://github.com/dacodemaniak/initiation-typescript/tree/step-4
 */
describe('Affectations', () => {
    it(`Expect toString convert number to a string type`, () => {
        // Sets a string typed var using let keyword
        let stringVar = 'Jean-Luc'

        // Sets a number typed var
        let numberVar = 99

        stringVar = numberVar.toString()

        expect(stringVar).toBe('99')
    })

    it(`Shoud be of type number`, () =>  {
        // Sets a string typed var using let keyword
        let stringVar = '99'

        // Sets a number typed var
        let numberVar = 100

        numberVar = +stringVar
        expect(numberVar).toBe(99)
    })

    it(`Two vars should be copies`, () => {
        let name = 'Bond'
        let other: string

        other = name
        expect(other).toBe('Bond')

        name = 'World'

        expect(name).not.toEqual(other)
    })

    it(`Object affectation should be references`, () => {
        let today = new Date(2023, 7, 2, 0, 0, 0, 0)
        const other = today

        expect(today).toEqual(other)

        today.setDate(today.getDate() + 1)

        expect(other).toEqual(today)
    })

    it (`Should be a copy (using flyweight)`, () => {
        const today = new Date(2023, 7, 2, 0, 0, 0, 0)
        let other: Date = new Date()

        other.setDate(today.getDate())
        other.setMonth(today.getMonth())
        other.setFullYear(today.getFullYear())
        other.setHours(today.getHours())
        other.setMinutes(today.getMinutes())
        other.setSeconds(today.getSeconds())
        other.setMilliseconds(today.getMilliseconds())

        today.setDate(today.getDate() + 1)
        expect(other).not.toStrictEqual(today)

    })

    it (`Should be a copy (using destructuration)`, () => {
        const today = new Date(2023, 7, 2, 0, 0, 0, 0)
        
        // Three dots destructuration syntax
        let other: Date = {... today}

        today.setDate(today.getDate() + 1)
        expect(other).not.toStrictEqual(today)

    })
})