export type OrderOptionsType = 'title' | 'description' | 'price' | 'email';
export type OrderOptionsDisplay = 'Title' | 'Description' | 'Price' | 'E-mail';

export interface OrderOptionsModel {
  type: OrderOptionsType;
  display: OrderOptionsDisplay;
}
