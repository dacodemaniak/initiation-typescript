export class PersonModel {
    private _lastname: string
    firstname: string
    protected _birthDate: Date | null

    public readonly today = new Date()
    
    constructor() {
        this._lastname = ''
        this.firstname = ''
        this._birthDate = null
    }

    get lastname(): string {
        return this._lastname
    }

    set lastname(lastname: string) {
        this._lastname = lastname
    }

    get birthDate(): Date | null {
        return this._birthDate
    }

    set birthDate(birthDate: Date) {
        this._birthDate = birthDate
    }

}