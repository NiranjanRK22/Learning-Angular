export class Course {
    constructor(
        public courseName: string,
        public cost: number,
        public type: string,
        public medium: string, //online, offline
        public trainer?: string
    ){}
}
