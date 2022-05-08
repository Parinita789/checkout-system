import { IPricingRules } from "../interfaces/ruleInterface";

export class BuyForXGetFlatYPercentOffRule implements IPricingRules { 
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public applyTotalPriceDiscount(totalPrice: number): number {
        return totalPrice >= this.x ? ((totalPrice / 100) * this.y) : 0;
    }
}