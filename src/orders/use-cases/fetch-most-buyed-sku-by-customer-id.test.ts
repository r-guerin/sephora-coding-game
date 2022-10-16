import { mostBuyedSkuByCustomerId } from '../orders-list';
import { fetchMostBuyedSkyByCustomerId } from './fetch-most-buyed-sku-by-customer-id';

describe('fetchMostBuyedSkyByCustomerId', () => {
  test('Should retrieve customer orders among list given their id', async () => {
    // Add your tests here
    const customerId = 'CUST_0003';
    const result = await fetchMostBuyedSkyByCustomerId(customerId);

    expect(result).toStrictEqual(mostBuyedSkuByCustomerId);
  });
});
