import { Component, OnInit } from '@angular/core'

import { Item, ItemUrl } from "./item"
import { BuyitService } from "./buyit.service"

const templateUrl = require('./buyitlist.component.html')

@Component({
    selector: 'buyit-list',
    providers: [ BuyitService ],
    templateUrl: templateUrl
})
export class BuyitListComponent implements OnInit
{
    errorMessage: string
    items: Item[]

    constructor(public buyitService: BuyitService)
    {
    }

    ngOnInit()
    {
        this.getItems()
    }

    getItems()
    {
        this.buyitService.getItems()
            .subscribe(
                items => this.items = items,
                error => this.errorMessage = error)
    }

    removeItem(item)
    {
        if (confirm('Are you sure ?'))
        {
            this.buyitService.removeItem(item)
                .subscribe(
                    ok => this.items = this.items.filter(i => i._id != item._id),
                    error => this.errorMessage = error)
        }
    }
}