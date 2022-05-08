import { Item } from './itemService';
import { ICartService } from '../interfaces/cartInterface'; 
import { OrderRow  } from '../services/orderRowService';
import { UPDATE_TYPE } from '../constants/OrderUpdateType';

export class Cart implements ICartService {
    private cart = new Map<number, OrderRow>();

    public add(item: Item) {
        let orderRow = new OrderRow(item, 1);
        let orderCode = item.getCode();
        if (!orderCode) {
            throw new Error('Item Not Found!'); 
        } 
        this.cart.set(orderCode, orderRow);
        return this.cart;
    }

    public update(code: number, type: UPDATE_TYPE) {
        let orderRow = this.cart.get(code);
        if (!orderRow) {
            throw new Error('Order Item Not Found!');
        }
        if (type === UPDATE_TYPE.INCREMENT) {
            orderRow.setTotalQuantity(orderRow.getTotalQuantity() + 1);
        } else {
            orderRow.setTotalQuantity(orderRow.getTotalQuantity() - 1);
        }
        orderRow.setTotalPrice(orderRow.getTotalQuantity() * orderRow.getOrderItem().getPrice());

        this.cart.set(code, orderRow);
        return this.cart;
    }

    public remove(code: number) {
        let item = this.cart.get(code);
        if (!item) {
            throw new Error('Item Not Found!');
        }
        this.cart.delete(code);
        return this.cart;
    }
}