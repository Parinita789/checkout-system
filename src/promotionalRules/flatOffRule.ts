import { IPricingRules } from '../interfaces/ruleInterface';

export class FlatOffRule implements IPricingRules {
    private x: number;
    private y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public applyTotalPriceDiscount(cartItemTotalPrice: number): number {
        return cartItemTotalPrice >= this.x ? cartItemTotalPrice - this.y : 0;
    }
}