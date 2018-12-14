export enum sexEnum {
    hombre,
    mujer
}
export class User {

    constructor(
        public id: number,
        public name: string,
        public color: string,
        public sex: string,
        public isOk: boolean,
        public email?: string
    ) { }

}
