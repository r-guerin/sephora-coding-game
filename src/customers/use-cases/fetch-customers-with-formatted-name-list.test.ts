import { customersWithFormattedNameList } from '../customers-list';
import { fetchCustomersWithFormattedNameList } from './fetch-customers-with-formatted-name-list';

describe('fetchCustomersWithFormattedNameList', () => {
  test('Should return the active customers list', async () => {
    const result = await fetchCustomersWithFormattedNameList();

    expect(result).toStrictEqual(customersWithFormattedNameList);
  });
});
