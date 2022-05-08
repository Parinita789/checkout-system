import { IOrderRowService } from "../interfaces/orderRowInterface";
import { Item } from "./itemService";

export class OrderRow implements IOrderRowService {

    private totalQuantity: number;
    private freeQuantity: number;
    private totalPrice: number;
    private item: Item;

    constructor(item: Item, totalQuantity: number) { 
        this.item = item;
        this.totalQuantity = totalQuantity;
        this.totalPrice = totalQuantity * item.getPrice();
    }

    public getTotalQuantity(): number {
        return this.totalQuantity;
    }

    public setTotalQuantity(totalQuantity: number): void {
        this.totalQuantity = totalQuantity;
    }

    public getFreeQuantity(): number {
        return this.freeQuantity;
    }

    public setFreeQuantity(freeQuantity: number): void {
        this.freeQuantity = freeQuantity;
    }

    public setTotalPrice(totalPrice: number): void {
        this.totalPrice = totalPrice;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setOrderItem(item: Item): void {
        this.item = item;
    }

    public getOrderItem(): Item {
        return this.item;
    }
}