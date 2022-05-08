import { Item } from '../../src/services/itemService'
import { OrderRow } from '../../src/services/orderRowService'
import { items } from './itemsMock'

export const test1Cart = new Map([
    [items[0].code, new OrderRow(new Item(items[0].name, items[0].price, items[0].code), 1)],
    [items[1].code, new OrderRow(new Item(items[1].name, items[1].price, items[1].code), 1)],
    [items[2].code, new OrderRow(new Item(items[2].name, items[2].price, items[2].code), 1)]
])

export const test2Cart = new Map([
    [items[1].code, new OrderRow(new Item(items[1].name, items[1].price, items[1].code), 2)],
    [items[0].code, new OrderRow(new Item(items[0].name, items[0].price, items[0].code), 1)]
])

export const test3Cart = new Map([
    [items[1].code, new OrderRow(new Item(items[1].name, items[1].price, items[1].code), 2)],
    [items[0].code, new OrderRow(new Item(items[0].name, items[0].price, items[0].code), 1)],
    [items[2].code, new OrderRow(new Item(items[2].name, items[2].price, items[2].code), 1)]
])

export const test4Cart = new Map([
    [items[4].code, new OrderRow(new Item(items[4].name, items[4].price, items[4].code), 5)],
    [items[0].code, new OrderRow(new Item(items[0].name, items[0].price, items[0].code), 1)]
])