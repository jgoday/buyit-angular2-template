const express = require('express')
const Item = require('../models/item')

const router = express.Router()

// get items
const get_items = (req, res) =>
{
    Item.find().exec((err, items) =>
    {
        if (err)
        {
            res.send(Object.assign({error: true}, err))
        }
        else
        {
            res.json(items)
        }
    })
}
router.get('/items', get_items)

// get item
const get_item = (req, res) =>
{
    const id = req.params.id

    Item.findOne({_id: id})
        .exec((err, i) =>
        {
            if (err)
            {
                res.send(Object.assign({error: true}, err))
            }
            else
            {
                res.json(i)
            }
        })
}
router.get('/item/:id', get_item)

// create item
const create_item = (req, res) =>
{
    let item = new Item()
    item.name = req.body.name
    item.date = new Date
    item.comments = req.body.comments
    if (req.body.urls)
    {
        item.urls = req.body.urls
    }
    item.save()
        .then(r => res.json({ ok: true }))
        .catch(err => res.send(Object.assign({error: true}, err)))
}
router.post('/item', create_item)

// delete item
const delete_item = (req, res) =>
{
    const id = req.params.id

    Item.findByIdAndRemove(id)
        .then(r => res.json({ok: true}))
        .catch(err => res.send(Object.assign({error: true}, err)))
}
router.delete('/item/:id', delete_item)

// update item
const update_item = (req, res) =>
{
    const id = req.params.id
    const data = req.body

    let updateObject = { }
    if (data.name) updateObject.name = data.name
    if (data.comments) updateObject.comments = data.comments
    if (data.url)
    {
        updateObject.urls = [{
            url: data.url,
            price: data.price || 0,
            date: new Date
        }]
    }

    Item.findOneAndUpdate(
        {_id: id},
        updateObject,
        (err) =>
        {
            if (err)
            {
                res.send(Object.assign({error: true}, err))
            }
            else
            {
                res.json({ok: true})
            }
        })
}
router.put('/item/:id', update_item)

module.exports = router