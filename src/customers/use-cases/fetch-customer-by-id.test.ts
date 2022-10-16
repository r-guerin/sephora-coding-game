import { customerById } from '../customers-list';
import { fetchCustomerById } from './fetch-customer-by-id';

describe('fetchCustomerById', () => {
  test('Should return the active customers list', async () => {
    // Add your tests here
    const customerId = 'CUST_0001';
    const result = await fetchCustomerById(customerId);

    expect(result).toStrictEqual(customerById);
  });
});
