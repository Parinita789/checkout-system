import { IItemRules } from '../interfaces/ruleInterface';
import { OrderRow } from '../services/orderRowService';

export class BuyXOrMoreGetYFreeRule implements IItemRules{
    private x: number;
    private y: number;
    private productCode: number;

    constructor(productCode: number, x: number, y: number) {
        this.x = x;
        this.y = y;
        this.productCode = productCode;
    }

    public applyPromotionalItemsRules(order: OrderRow): OrderRow {
        if (order.getOrderItem().getCode() === this.productCode) { 
            const purchasedQuantity = order.getTotalQuantity();
            if (purchasedQuantity >= this.x) {
                const totalFreeQuantity = (purchasedQuantity / this.x) * this.y;
                order.setFreeQuantity(totalFreeQuantity);
                order.setTotalQuantity(totalFreeQuantity + purchasedQuantity);
            }
        }
        return order;
    }
}