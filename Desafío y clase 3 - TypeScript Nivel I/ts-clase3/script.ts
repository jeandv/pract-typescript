class Persona {
    private _nombre: string
    private _altura: number

    public dibujarPersona() {
        console.log('dibujando...');
    }

    get name(): string {
        return this._nombre
    }
}