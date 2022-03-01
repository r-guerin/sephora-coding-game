import { customersList } from './customers-list';
import { fetchCustomersList } from './customers.service';

describe('fetchCustomersList', () => {
  test('Should return the customers list', async () => {
    const result = await fetchCustomersList();

    expect(result).toStrictEqual(customersList);
  });
});
