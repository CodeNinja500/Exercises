export interface CartModel {
  readonly userId: number;
  readonly date: string;
  readonly products: {
    productId: number,
    quantity: number
  }[];
}
