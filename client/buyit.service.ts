import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import { Observable }     from 'rxjs/Observable';

import { Item, ItemUrl } from "./item"

@Injectable()
export class BuyitService
{
    private itemUrl = '/api/item'
    private listUrl = '/api/items'

    constructor(private http: Http)
    {}

    getItems(): Observable<Item[]>
    {
        return this.http.get(this.listUrl)
                        .map(res => res.json() || [])
                        .catch(err => Observable.throw(err))
    }

    reload()
    {
        this.getItems()
    }

    removeItem(item: Item): Observable<Item>
    {
        const headers = new Headers({'Content-Type': 'application/json'})
        const options = new RequestOptions({headers: headers})

        const handleResponse = (res) =>
        {
            if (res.ok)
            {
                return item
            }
            else
            {
                return Observable.throw(res.error)
            }
        }

        return this.http.delete(this.itemUrl + "/" + item._id, options)
                 .map(res => handleResponse(res))
                 .catch(err => Observable.throw(err))
    }

    addItem(item: Item): Observable<Item>
    {
        const headers = new Headers({'Content-Type': 'application/json'})
        const options = new RequestOptions({headers: headers})

        return this.http.post(this.itemUrl, item, options)
                        .map(res => res.json())
                        .catch(err => Observable.throw(err))
    }
}