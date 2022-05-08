import { UPDATE_TYPE } from "../constants/OrderUpdateType";
import { Item } from "../services/itemService";

export interface ICartService {
    add(item: Item);
    update(code: number, type: UPDATE_TYPE);
    remove(code: number);
    getCurrentCartItemTotalPrice(): number;
    setCurrentCartItemTotalPrice(currentTotalPrice: number): void
}