export const ascNumberSorter = (a: number, b: number): number => a - b

export const reqAndDefParam = (param1: number, _odd: boolean = true) => _odd ? param1 % 2 === 0 : param1 % 2 !== 0

export const cumulator = (...args: Array<number>) => 
    args.reduce((cumulator: number, value: number) => cumulator + value, 0)