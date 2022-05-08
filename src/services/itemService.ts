

import { IItemService } from "../interfaces/itemInterface";

export class Item implements IItemService {
    
    private name: string;
    private price: number;
    private code: number;

    constructor(name: string, price: number, code: number) {
        this.name = name;
        this.price = price;
        this.code = code;
    };
    
    public getCode(): number {
        return this.code;
    }

    public setCode(code: number): void {
        this.code = code;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

}