import got from "got";
import { Order } from '../Order';

export const fetchOrdersList = async (): Promise<Order[]> => {
  const ordersList: Order[] = await got('https://api.sephora.com/v1/orders').json();

  return ordersList;
};
