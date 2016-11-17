export class ItemUrl
{
    constructor(
        public url: string,
        public price: number)
    {}
}

export class Item
{
    constructor(
        public _id: string,
        public name: string,
        public date: Date,
        public comments: string,
        public urls: ItemUrl[])
    {}
}