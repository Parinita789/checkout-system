import 'mocha';
import { expect } from 'chai';
import { BuyForXGetFlatYPercentOfRule } from '../../src/promotionalRules/buyForXGetFlatYPercentOff';
import { cart } from '../mock/cartMock';

describe('buy For X get Y % off test',  () => { 
    it ('should apply discount', () => {
        const discountPrice: number = 180;
        const rule = new BuyForXGetFlatYPercentOfRule(200, 10);
        const orders = cart.values();
        // rule.applyDiscount(orders);
    })

    it ('should not apply discount', () => {

    })
})