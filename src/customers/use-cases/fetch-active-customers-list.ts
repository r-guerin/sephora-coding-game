import { Customer } from '../Customer';
import { fetchCustomersList } from './fetch-customers-list';

export const fetchActiveCustomersList = async (): Promise<Customer[]> => {
  console.log('Should retrieve active customers list');
  const customersList = await fetchCustomersList();
  const activeCustomersList = customersList.filter(({ status }) => status === "active");

  return activeCustomersList; // TO IMPLEMENT
};
