import { OrderRow } from "../services/orderRowService";

export interface IRule {
    applyDiscount(order: OrderRow): OrderRow;
}

export interface IRuleService {
    getPromotionalRules();
}