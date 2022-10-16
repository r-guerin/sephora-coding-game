import { Customer } from '../Customer';
import { fetchCustomersWithFormattedNameList } from './fetch-customers-with-formatted-name-list';

export const fetchCustomerById = async (customerId: string): Promise<Customer | undefined> => {
  console.log('Should retrieve customer infos given their id', { customerId });

  const customersList = await fetchCustomersWithFormattedNameList();
  const customer = customersList.find(({ id }) => id === customerId);

  return customer;
};
