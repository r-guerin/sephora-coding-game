import { ordersList } from './orders-list';
import { fetchOrdersList } from './orders.service';

describe('fetchOrdersList', () => {
  test('Should return the orders list', async () => {
    const result = await fetchOrdersList();

    expect(result).toStrictEqual(ordersList);
  });
});
