import { NgModule, OnInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import 'rxjs'

import { AddItemComponent } from './additem.component'
import { BuyitContainerComponent } from './buyitcontainer.component'
import { BuyitListComponent } from './buyitlist.component'

const routes = [
    { path: '', component: BuyitListComponent,
        children: [
            { path: '', component: AddItemComponent }
        ] }
]

@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpModule, JsonpModule ],
    declarations: [ AddItemComponent, BuyitContainerComponent, BuyitListComponent ],
    bootstrap: [ BuyitContainerComponent ]
})
export class AppModule implements OnInit
{
    constructor()
    {}

    ngOnInit()
    {}
}