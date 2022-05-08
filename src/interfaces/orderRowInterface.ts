import { Item } from "../services/itemService";

export interface IOrderRow {
    quantity: number,
    item: Item,
    price: number
}

export interface IOrderRowService {
    getTotalQuantity(): number;
    setTotalQuantity(totalQuantity: number): void;
    getFreeQuantity(): number;
    setFreeQuantity(freeQuantity: number): void;
    getTotalPrice(): number;
    setTotalPrice(price: number): void;
    setOrderItem(item: Item): void;
    getOrderItem(): Item;
}

