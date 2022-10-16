import { customerNameWithMostExpensiveOrder } from '../orders-list';
import { fetchCustomerWithMostExpensiveOrder } from './fetch-customer-with-most-expensive-order';

describe('fetchCustomerWithMostExpensiveOrder', () => {
  test('Should retrieve the name of the customer with the most expensive order', async () => {
    // Add your tests here
    const result = await fetchCustomerWithMostExpensiveOrder();

    expect(result).toStrictEqual(customerNameWithMostExpensiveOrder);
  });
});
