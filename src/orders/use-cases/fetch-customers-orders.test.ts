import { customersOrdersCount } from '../orders-list';
import { fetchCustomersOrders } from './fetch-customers-orders';

describe('fetchCustomersOrders', () => {
  test('Should display for each customers, their name and corresponding number of orders', async () => {
    // Add your tests here
    const result = await fetchCustomersOrders();

    expect(result).toStrictEqual(customersOrdersCount);
  });
});
