import { IItemRules } from '../interfaces/ruleInterface';
import { OrderRow } from '../services/orderRowService';

export class BuyXOrMorePriceDropsEachToY implements IItemRules {
    private productCode: number;
    private x: number;
    private y: number

    constructor(productCode: number, x: number, y: number) {
        this.productCode = productCode;
        this.x = x;
        this.y = y;
    }

    public applyPromotionalItemsRules(order: OrderRow): OrderRow {
        if(order.getOrderItem().getCode() === this.productCode) {
            let totalQuantity = order.getTotalQuantity();
            if (totalQuantity >= this.x) {
                let discountedPrice = totalQuantity * this.y;
                order.setTotalPrice(discountedPrice);
            }
        }
        return order;
    }
}