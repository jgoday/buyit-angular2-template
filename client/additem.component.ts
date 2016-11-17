import { Component, OnInit } from '@angular/core'

import { Item, ItemUrl } from './item'
import { BuyitService } from './buyit.service'

const templateUrl = require('./additem.component.html')

@Component({
    selector: 'add-item',
    templateUrl: templateUrl
})
export class AddItemComponent
{
    name: string
    comments: string
    url: string
    price: number

    // error
    errorMessage: string

    constructor(private buyitService: BuyitService)
    {}

    ngOnInit()
    {}

    addItem()
    {
        const date = new Date
        const urls = [{ url: this.url, price: this.price }]
        const item = new Item(null, this.name, date, this.comments, urls)
        const handleResponse = (res) =>
        {
            if (res.ok) this.buyitService.reload()
            else this.errorMessage = res.error
        }
        this.buyitService.addItem(item)
            .subscribe(res => handleResponse(res),
                       err => this.errorMessage = err)
            
    }
}