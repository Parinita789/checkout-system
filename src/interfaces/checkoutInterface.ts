import { OrderRow } from "../services/orderRowService";

export interface ICheckoutService {
    scanOrder(order: OrderRow): void;
    checkoutCartItems(orders: OrderRow[]): void;
    calcualteTotalPrice(orders: OrderRow[]): number;
    scanTotalPrice(totalItemPrice: number): void;
}