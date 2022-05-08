import { ICheckoutService } from '../interfaces/checkoutInterface';
import { Cart } from './cartService';
import { OrderRow } from './orderRowService';
import { Rule } from './promotionalRulesService';

export class Checkout implements ICheckoutService {  

    public scan(order: OrderRow) {
        const ruleService = new Rule();
        const rules = ruleService.getPromotionalRules();
        rules.forEach(rule => {
            rule.applyDiscount(order);
        })
    }

    public checkoutCartItems(orders): void {
        let cartService = new Cart();
        orders.forEach(order => {
            cartService.setCurrentCartItemTotalPrice(order.getTotalPrice());
            this.scan(order)
        })
    }

    public calcualteTotalPrice(orders): number {
        let totalPrice: number = 0;
        orders.forEach(order => {
            totalPrice += order.getTotalPrice();
        })
        return totalPrice;
    }
}