export interface IItem {
    name: string,
    code: number,
    price: number,
}

export interface IItemService {
    getName(): string;
    setName(name: string): void;
    getCode(): number;
    setCode(name: number): void;
    getPrice(): number;
    setPrice(price: number): void;
}