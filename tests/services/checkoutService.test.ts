import 'mocha';
import { expect } from 'chai';
import { Checkout }  from '../../src/services/checkoutService';
import { test1Cart, test2Cart, test3Cart } from '../mock/cartMock';

describe('Checkout test',  () => {
    let checkoutService = new Checkout();

    it('Test 1 - 001,002,003 29.65 €', () => {
        const orderRows = (Array.from(test1Cart.values()));
        checkoutService.checkoutCartItems(orderRows);
        expect(checkoutService.calcualteTotalPrice(orderRows)).to.be.equal(29.65)
    })

    it('Test 2 - 002,001,002 9.93 €', () => {
        const orderRows = (Array.from(test2Cart.values()));
        checkoutService.checkoutCartItems(orderRows);
        expect(checkoutService.calcualteTotalPrice(orderRows)).to.be.equal(9.93);
    })

    it('Test 1 - 001,002,003 29.65 €', () => {
        const orderRows = (Array.from(test3Cart.values()));
        checkoutService.checkoutCartItems(orderRows);
        expect(checkoutService.calcualteTotalPrice(orderRows)).to.be.equal(29.65)
    })

    it('Test 4 - 005,005,005,005,005,001 9.93 €', () => {
        const orderRows = (Array.from(test2Cart.values()));
        checkoutService.checkoutCartItems(orderRows);
        expect(checkoutService.calcualteTotalPrice(orderRows)).to.be.equal(6.95);
    })
})