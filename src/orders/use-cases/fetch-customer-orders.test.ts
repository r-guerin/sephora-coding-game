import { customerOrdersList } from '../orders-list';
import { fetchCustomerOrders } from './fetch-customer-orders';

describe('fetchCustomerOrders', () => {
  test('Should retrieve customer orders among list given their id', async () => {
    // Add your tests here
    const customerId = "CUST_0003";
    const result = await fetchCustomerOrders(customerId);

    expect(result).toStrictEqual(customerOrdersList);
  });
});
