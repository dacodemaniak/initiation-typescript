/**
 * tests/unit/function.spec.ts
 * Function setup and usage
 * @author DaCoDeMaNiaK <jean-luc.aubert@aelion.fr>
 * @version 1.0.0
 * @see https://github.com/dacodemaniak/initiation-typescript/tree/step-6
 */

import { ascNumberSorter, reqAndDefParam, cumulator } from './../../src/_helpers/utils'

describe('Functions', () => {
    it(`Should type of 'stringVar' to be string`, () => {
        const op1 = 8
        const op2 = 5

        expect(ascNumberSorter(op1, op2)).toBe(3)
    })

    it(`Should be used without explicit parameters`, () => {
        const array: Array<number> = [12, 5, 3, 8, 2]
        array.sort(ascNumberSorter)
        expect(array[0]).toBe(2)
    })

    it(`Should be called with one or two parameters`, () => {
        expect(reqAndDefParam(8)).toBeTruthy()
        expect(reqAndDefParam(5, false)).toBeTruthy()
        expect(reqAndDefParam(8, false)).toBeFalsy()
        expect(reqAndDefParam(3)).toBeFalsy()
    })

    it('Should reduce to 30 the list number', () => {
        expect(cumulator(5, 10, 15)).toBe(30)
        expect(cumulator(8, 2, 10, 5, 5)).toBe(30)
    })
})