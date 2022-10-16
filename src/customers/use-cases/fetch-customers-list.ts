import got from 'got';
import { Customer } from '../Customer';

export const fetchCustomersList = async (): Promise<Customer[]> => {
  const customersList: Customer[] = await got('https://api.sephora.com/v1/customers').json();

  return customersList;
};
