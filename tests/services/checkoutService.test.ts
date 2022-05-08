import 'mocha';
import { expect } from 'chai';
import { Checkout }  from '../../src/services/checkoutService';
import { test1Cart, test2Cart, test3Cart, test4Cart } from '../mock/cartMock';

describe('Checkout test',  () => {
    let checkoutService = new Checkout();

    it('Test 1 - 001,002,003 30 €', () => {
        const orderRows = (Array.from(test1Cart.values()));
        checkoutService.checkoutCartItems(orderRows);
        expect(checkoutService.calcualteTotalPrice(orderRows)).to.be.equal(30)
    })

    it('Test 2 - 002,001,002 10 €', () => {
        const orderRows = (Array.from(test2Cart.values()));
        checkoutService.checkoutCartItems(orderRows);
        expect(checkoutService.calcualteTotalPrice(orderRows)).to.be.equal(10);
    })

    it('Test 3 - 002,001,002,003 31 €', () => {
        const orderRows = (Array.from(test3Cart.values()));
        checkoutService.checkoutCartItems(orderRows);
        let totalPrice = checkoutService.calcualteTotalPrice(orderRows);
        expect(totalPrice).to.be.equal(31)
    })

    it('Test 4 - 005,005,005,005,005,001 7 €', () => {
        const orderRows = (Array.from(test4Cart.values()));
        checkoutService.checkoutCartItems(orderRows);
        expect(checkoutService.calcualteTotalPrice(orderRows)).to.be.equal(7);
    })
})