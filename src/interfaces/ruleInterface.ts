import { OrderRow } from "../services/orderRowService";

export interface IRuleService {
    getPromotionalItemsRules();
    getTotalPriceRules();
}

export interface IItemRules {
    applyPromotionalItemsRules(order: OrderRow);
}

export interface IPricingRules {
    applyTotalPriceDiscount(totalPrice: number);
}