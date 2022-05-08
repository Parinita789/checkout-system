import { IRuleService } from "../interfaces/ruleInterface";
import { BuyForXGetFlatYPercentOfRule } from '../promotionalRules/buyForXGetFlatYPercentOff';
import { BuyXOrMoreGetYFreeRule } from '../promotionalRules/buyXOrMoreGetYFreeRule';
import { FlatOffRule } from '../promotionalRules/flatOffRule';
import { BuyXOrMorePriceDropsEachToY } from '../promotionalRules/buyXOrMorePriceDropsToYEachRule';

export class Rule implements IRuleService {
    public rules = [
        new FlatOffRule(30, 15),
        new BuyForXGetFlatYPercentOfRule(30, 10),
        new BuyXOrMoreGetYFreeRule(5, 2, 3),
        new BuyXOrMorePriceDropsEachToY(2, 2, 3.99),
    ];

    constructor() {}

    public getPromotionalRules() {
        return this.rules;
    }
}