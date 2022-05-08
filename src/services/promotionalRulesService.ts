import { IRuleService } from "../interfaces/ruleInterface";
import { BuyForXGetFlatYPercentOffRule } from '../promotionalRules/buyForXGetFlatYPercentOff';
import { BuyXOrMoreGetYFreeRule } from '../promotionalRules/buyXOrMoreGetYFreeRule';
import { FlatOffRule } from '../promotionalRules/flatOffRule';
import { BuyXOrMorePriceDropsEachToY } from '../promotionalRules/buyXOrMorePriceDropsToYEachRule';

export class Rule implements IRuleService {
    public itemRules = [
        new BuyXOrMoreGetYFreeRule(5, 2, 3),
        new BuyXOrMorePriceDropsEachToY(2, 2, 3.99),
    ];

    public totalPriceRules = [
        new BuyForXGetFlatYPercentOffRule(30, 10),
        new FlatOffRule(50, 15),
    ]

    constructor() {}

    public getPromotionalItemsRules() {
        return this.itemRules;
    }

    public getTotalPriceRules() {
        return this.totalPriceRules;
    }
}