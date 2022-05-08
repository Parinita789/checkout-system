import 'mocha';
import { expect } from 'chai';
import { Cart }  from '../../src/services/cartService';
import { items } from '../mock/itemsMock';
import { UPDATE_TYPE } from '../../src/constants/OrderUpdateType';
import { Item } from '../../src/services/itemService';

let testCart1;

describe('Cart Test',  () => {
    let cartService = new Cart();

    it('Should add item in the cart', () => {
        const itemData = items[0];
        const item = new Item(itemData.name, itemData.price, itemData.code)
        const cart = cartService.add(item);
        const orderRow = cart.get(itemData.code);
        const response = {
            item: itemData,
            totalQuantity: 1,
            totalPrice: itemData.price
        }
        expect(cart.size).to.equal(1);
        expect(orderRow).to.have.property('item');
        expect(orderRow).to.have.property('totalQuantity');
        expect(orderRow).to.have.property('totalPrice');
        expect(orderRow).to.deep.equal(response)
    })

    it('Should increase item quantity', () => {
        const updatedCart = cartService.update(items[0].code, UPDATE_TYPE.INCREMENT);
        const orderRow = updatedCart.get(items[0].code);
        expect(orderRow.getTotalQuantity()).to.equal(2);
        expect(orderRow.getTotalPrice()).to.equal(3.9)
    })

    it('Should decrease item quantity', () => {
        const updatedCart = cartService.update(items[0].code, UPDATE_TYPE.DECREMENT);
        const orderRow = updatedCart.get(items[0].code);
        expect(orderRow.getTotalQuantity()).to.equal(1);
        expect(orderRow.getTotalPrice()).to.equal(1.95)
    })

    it('Should remove item from the cart', () => {
        const cart = cartService.remove(items[0].code);
        const orderRow = cart.get(items[0].code);
        expect(cart.size).to.equal(0);
        expect(orderRow).to.be.undefined
    })
})