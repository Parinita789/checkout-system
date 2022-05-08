import { IRule } from '../interfaces/ruleInterface';
import { OrderRow } from '../services/orderRowService';

export class FlatOffRule implements IRule {
    private x: number;
    private y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public applyDiscount(orderRow: OrderRow): OrderRow {
        let purchasedOrderPrice = orderRow.getTotalPrice();
        if (purchasedOrderPrice >= this.x) {
            let discountedPrice = purchasedOrderPrice - this.y;
            orderRow.setTotalPrice(discountedPrice);
        }
        return orderRow;
    }
}