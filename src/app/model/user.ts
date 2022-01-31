import { Address } from "./address";


export class User {
    constructor(
        public name: string,
        public password: string,
        public email: string,
        public gender: string,
        public address: Address,
    ){}
}
