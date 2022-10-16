import { OrderWithAmount } from '../Order';
import { fetchOrdersList } from './fetch-orders-list';
import { fetchCustomerById } from '../../customers/use-cases/fetch-customer-by-id';

export const fetchCustomerWithMostExpensiveOrder = async (): Promise<string | undefined> => {
  console.log('Should retrieve the name of the customer with the most expensive order');

  const ordersList = await fetchOrdersList();
  const ordersWithAmountList: OrderWithAmount[] = ordersList.reduce((prevOrder: any, currOrder) => {
    const amount = currOrder.skus.reduce((prevSku, currSku) => prevSku + currSku.quantity * currSku.unitPrice, 0);
    const orderWithAmount = {
      ...currOrder,
      amount,
    };

    return [...prevOrder, orderWithAmount];
  }, []);
  const ordersWithAmountListSorted = ordersWithAmountList.sort(
    (a: OrderWithAmount, b: OrderWithAmount) => b.amount - a.amount,
  );
  const [{ customerId: customerIdWithMostExpensiveOrder }] = ordersWithAmountListSorted;
  const customerWithMostExpensiveOrder = await fetchCustomerById(customerIdWithMostExpensiveOrder);
  const customerNameWithMostExpensiveOrder = `${customerWithMostExpensiveOrder?.firstName} ${customerWithMostExpensiveOrder?.lastName}`;

  return customerNameWithMostExpensiveOrder; // TO IMPLEMENT
};
