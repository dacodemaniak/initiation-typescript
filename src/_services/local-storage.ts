import { LocalPersistance } from "./local-persistance";

/**
 * src/_services/local-storage.ts
 *  Specialize LocalPersistance with use of LocalStorage native JS
 * @see LocalPersistance
 * @author Jean-Luc Aubert<jean-luc.aubert@aelion.fr>
 */
export class LocalStorage extends LocalPersistance {
    constructor() {
        super()
        this._key = '_USER_'
    }

    public store(data: any) {
       let _data

       if (typeof data !== 'string') {
        _data = JSON.stringify(data)
       } else {
        _data = data
       }

       localStorage.setItem(this._key, _data)
    }

    public retrieve() {
        const data = localStorage.getItem(this._key)
        if (data !== null) {
            if (data.substring(0, 1) === '{' || data.substring(0, 1) === '[') {
                return JSON.parse(data)
            }
            return data
        }
        throw new Error(`Key ${this._key} was not found`);
    }
}