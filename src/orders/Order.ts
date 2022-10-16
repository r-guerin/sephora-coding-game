export type Sku = {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
};

export type Order = {
  id: string;
  customerId: string;
  skus: Sku[];
};

export type OrderWithAmount = Order & { amount: number };

export type OrderCountByCustomerName = [string, number][]