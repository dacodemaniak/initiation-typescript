/**
 * tests/unit/array.spec.ts
 * Array definition and array manipulations
 * @author DaCoDeMaNiaK <jean-luc.aubert@aelion.fr>
 * @version 1.0.0
 * @see https://github.com/dacodemaniak/initiation-typescript/tree/step-5
 */
describe('Arrays', () => {
    it(`Should be instances of array`, () => {
        // Using Java like syntax
        const javaDefArray: Array<number> = []

        // Using C like syntax
        const cDefArray: number[] = []

        expect(javaDefArray).toBeInstanceOf(Array)
        expect(cDefArray).toBeInstanceOf(Array)
    })

    it(`Should have 3 elements`, () => {
        const javaDefArray: Array<number> = [5, 3, 8]

        expect(javaDefArray.length).toBe(3)
    })

    it (`Should add 3 values using push method`, () => {
        const array: Array<number> = [5, 3, 8]
        
        expect(array.push(10, 9, 7)).toBe(6)
    })

    it(`Should have only 2 first elements`, () => {
        const array: Array<number> = [5, 3, 8, 10, 9, 7]
        array.splice(
            2
        )
        expect(array.join(',')).toBe('5,3')
    })

    it(`Should be sorted ascending ASCII order`, () => {
        const array: Array<number> = [5, 3, 8, 10, 9, 7]
        array.sort()
        expect(array[0]).toBe(10)
    })

    it(`Should be sorted ascending number order`, () => {
        const array: Array<number> = [5, 3, 8, 10, 9, 7]
        const sorter = (a: number, b: number) => {
            return a - b
        }
        array.sort(sorter)
        expect(array[0]).toBe(3)
    })

    it(`Should get a 2 elements array`, () => {
        const array: Array<number> = [5, 3, 8, 10, 9, 7]
        const filter = (item: number) => {
            return item % 2 === 0
        }
        const evenArray = array.filter(filter)

        expect(evenArray.length).toBe(2)        
    })

    it(`Should return squarred value array`, () => {
        const array: Array<number> = [5, 3, 8, 10, 9, 7]
        const transform = (item: number) => {
            return item * item
        }
        const squarredArray = array.map(transform)

        expect(squarredArray[0]).toBe(25)        
    })

    it(`Should return 10 as array values average`, () => {
        const array: Array<number> = [5, 10, 15]
        const reducer = (item: number) => {
            return item / array.length
        }
        const average: number = array.reduce(
            (accumulator: number, item) => accumulator + reducer(item),
            0
            )

        expect(average).toBe(10)        
    })
})