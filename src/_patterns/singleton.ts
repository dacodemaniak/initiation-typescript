/**
 * src/_patterns/singleton.ts
 * Singleton pattern sample
 * @author Jean-Luc Aubert <jean-luc.aubert@aelion.fr>
 */
export class Singleton {
    // Sets a static private attribute containing the instance of Singleton class
    private static _instance: Singleton | null = null

    // Only for test purpose, contains the number of occurrences of the instance
    private _instanceOcc: number = 0

    // Make constructor private to avoid accidentally instanciation
    private constructor() {
        this._instanceOcc = this._instanceOcc + 1
    }

    // This static method create the instance if static property is null, and return it
    public static getInstance(): Singleton {
        if (Singleton._instance === null) {
            Singleton._instance = new Singleton()
        }
        return Singleton._instance
    }

    public get instanceOcc(): number {
        return this._instanceOcc
    }
}