export class OrderMethod {
    static sortDirective = 1

    static sorter(n1: number, n2: number): number {
        return (n1 - n2) * OrderMethod.sortDirective
    }
}