/**
 * src/_services/local-persistance.ts
 *  Abstract class for local or session persistance
 * @author Jean-Luc Aubert <jean-luc.aubert@aelion.fr>
 */
export abstract class LocalPersistance {
    /**
     * @var string
     * Key for local or session storage to store or retreive
     */
    protected _key: string = ''

    public abstract store(data: any): void

    public abstract retrieve(): any

    public get key(): string {
        return this._key
    }
}