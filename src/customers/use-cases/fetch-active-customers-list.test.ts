import { activeCustomersList } from '../customers-list';
import { fetchActiveCustomersList } from './fetch-active-customers-list';

describe('fetchActiveCustomersList', () => {
  test('Should return the active customers list', async () => {
    // Add your tests here
    const result = await fetchActiveCustomersList();

    expect(result).toStrictEqual(activeCustomersList);
  });
});
