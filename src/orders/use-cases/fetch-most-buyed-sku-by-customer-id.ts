import { fetchCustomerOrders } from './fetch-customer-orders';

export const fetchMostBuyedSkyByCustomerId = async (customerId: string): Promise<string> => {
  console.log('Should retrieve the name of the most buyed SKU for a given customer id', { customerId });

  const customerOrders = await fetchCustomerOrders(customerId);
  const buyedSkuByCustomerId: {
    [key: string]: { count: number; name: string };
  } = customerOrders
    .map(({ skus }) => skus)
    .flatMap((sku) => sku)
    .reduce((prevSku: any, currSku) => {
      return {
        ...prevSku,
        [currSku.id]: {
          count: (prevSku[currSku.id]?.quantity ?? 0) + currSku.quantity,
          name: currSku.name,
        },
      };
    }, {});
  const buyedSkuByCustomerIdSorted = Object.entries(buyedSkuByCustomerId).sort((a, b) => b[1].count - a[1].count);
  const [mostBuyedSkuByCustomerId] = buyedSkuByCustomerIdSorted;

  return mostBuyedSkuByCustomerId[1].name; // TO IMPLEMENT
};
