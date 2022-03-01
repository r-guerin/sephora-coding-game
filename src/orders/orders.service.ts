import { Order } from './Order';
import { ordersList } from './orders-list';

export const fetchOrdersList = async (): Promise<Order[]> => {
  return ordersList;
};

export const fetchCustomerOrders = async (customerId: string): Promise<Order[]> => {
  console.log('Should retrieve customer offers amon list given their id', { customerId, ordersList });
  return [];
};
