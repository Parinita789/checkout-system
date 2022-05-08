import { IRule } from '../interfaces/ruleInterface';
import { Cart } from '../services/cartService';
import { OrderRow } from '../services/orderRowService';

export class BuyForXGetFlatYPercentOfRule implements IRule {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public applyDiscount(orderRow: OrderRow): OrderRow {
        let cartService = new Cart();
        let purchasedOrderPrice = cartService.getCurrentCartItemTotalPrice();
        // let purchasedOrderPrice = orderRow.getTotalPrice();
        // console.log("purchasedOrderPrice >>> ", purchasedOrderPrice)
        if (purchasedOrderPrice >= this.x) {
            let discountedPrice = (purchasedOrderPrice / 100) * this.y;
            orderRow.setTotalPrice(discountedPrice);
        }
        return orderRow;
    }
}