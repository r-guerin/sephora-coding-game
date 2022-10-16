import { OrderCountByCustomerName } from '../Order';
import { fetchOrdersList } from './fetch-orders-list';
import { fetchCustomersWithFormattedNameList } from '../../customers/use-cases/fetch-customers-with-formatted-name-list';

export const fetchCustomersOrders = async (): Promise<OrderCountByCustomerName> => {
  console.log('Should display for each customers, their name and corresponding number of orders');

  const ordersList = await fetchOrdersList();
  const customersList = await fetchCustomersWithFormattedNameList();
  const customerNameByCustomerId: {
    [key: string]: string;
  } = customersList.reduce((prevCustomer: any, currCustomer) => {
    return {
      ...prevCustomer,
      [currCustomer.id]: `${currCustomer.firstName} ${currCustomer.lastName}`,
    };
  }, {});
  const orderCountByCustomerId: {
    [key: string]: number;
  } = ordersList.reduce((prevOrder: any, currOrder) => {
    return {
      ...prevOrder,
      [currOrder.customerId]: prevOrder[currOrder.customerId] ? ++prevOrder[currOrder.customerId] : 1,
    };
  }, {});
  const orderCountByCustomerName: OrderCountByCustomerName = Object.entries(orderCountByCustomerId).map(
    ([customerId, orderCount]) => [customerNameByCustomerId[customerId], orderCount],
  );
  const orderCountByCustomerNameSorted = orderCountByCustomerName.sort((a, b) => b[1] - a[1]);

  return orderCountByCustomerNameSorted; // TO IMPLEMENT
};
