/**
 * tests/unit/class.spec.ts
 * Class, attributes, methods testing
 * @author DaCoDeMaNiaK <jean-luc.aubert@aelion.fr>
 * @version 1.0.0
 * @see https://github.com/dacodemaniak/initiation-typescript/tree/step-9
 */
import { OrderMethod } from '../../src/_helpers/order-method'
import { PersonModel } from './../../src/models/person-model'

describe('Classes', () => {
    it(`Should type of 'Person'`, () => {
        // Sets a implicitly typed var using let keyword
        const person = new PersonModel()

        expect(person).toBeInstanceOf(PersonModel)
    })

    it(`Should have both firstname and lastname public attributes`, () => {
        const person = new PersonModel()
        expect(person.hasOwnProperty('_lastname') && person.hasOwnProperty('firstname'))
            .toBeTruthy()
    })

    it(`Should return 'Bond' after setting lastname`, () => {
        const person = new PersonModel()
        person.lastname = 'Bond'
        expect(person.lastname).toEqual('Bond')
    })

    it (`Should invoke constructor method`, () => {

        const person = new PersonModel()

        expect(person.lastname).toEqual('')
        expect(person.firstname).toEqual('')
        expect(person.birthDate).toBeNull()
    })

    it(`Should sort number array in ascending then descending order`, () => {
        const numbers: Array<number> = [58, 2, 8, 102, 3, 25]

        numbers.sort(OrderMethod.sorter)
        expect(numbers[0]).toEqual(2)

        OrderMethod.sortDirective = -1 // Change sorter order
        numbers.sort(OrderMethod.sorter)
        expect(numbers[0]).toEqual(102)


    })
})