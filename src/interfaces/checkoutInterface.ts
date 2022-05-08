import { OrderRow } from "../services/orderRowService";
import { IRule } from "./ruleInterface";

export interface ICheckoutService {
    scan(order: OrderRow, rules: IRule[]);
    checkoutCartItems(orders: OrderRow[]): void
    calcualteTotalPrice(orders: OrderRow[]): number
}