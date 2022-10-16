import { Order } from '../Order';
import { fetchOrdersList } from './fetch-orders-list';

export const fetchCustomerOrders = async (customerId: string): Promise<Order[]> => {
  console.log('Should retrieve customer orders among list given their id', { customerId });

  const ordersList = await fetchOrdersList();
  const customerOrders: Order[] = ordersList.filter((order) => order.customerId === customerId);

  return customerOrders; // TO IMPLEMENT
};
