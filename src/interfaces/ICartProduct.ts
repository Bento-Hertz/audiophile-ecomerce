import IProduct from "./product";

export default interface ICartProduct {
    product: IProduct;
    quantity: number;
}