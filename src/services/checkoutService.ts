import { ICheckoutService } from '../interfaces/checkoutInterface';
import { OrderRow } from './orderRowService';
import { Rule } from './promotionalRulesService';

export class Checkout implements ICheckoutService {  

    public scanOrder(order: OrderRow): void {
        const ruleService = new Rule();
        const rules = ruleService.getPromotionalItemsRules();
        rules.forEach(rule => {
            rule.applyPromotionalItemsRules(order);
        })
    }

    public checkoutCartItems(orders): void {
        orders.forEach(order => {
            this.scanOrder(order)
        })     
    }

    public scanTotalPrice(totalPrice): number {
        const ruleService = new Rule();
        const rules = ruleService.getTotalPriceRules();
        rules.forEach(rule => {
            const discount = rule.applyTotalPriceDiscount(totalPrice);
            totalPrice -= discount;
        })
        return Math.round(totalPrice);
    }

    public calcualteTotalPrice(orders): number {
        let totalPrice: number = 0;
        orders.forEach(order => {
            totalPrice += order.getTotalPrice();
        })
        return this.scanTotalPrice(totalPrice);
    }
}