export class Quote {
    constructor(
        public id: number = 0, //for upvoting and downvoting
        public author: string = '',
        public content: string = '',
        public votes: number = 0
    ){}
}
