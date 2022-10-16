import { Customer } from '../Customer';
import { fetchCustomersList } from './fetch-customers-list';

export const fetchCustomersWithFormattedNameList = async (): Promise<Customer[]> => {
  const customersList = await fetchCustomersList();
  const customersListWithFormattedName = customersList.map(({ firstName, lastName, ...rest}) => ({
    firstName: `${firstName.slice(0, 1).toUpperCase()}${firstName.slice(1).toLowerCase()}`,
    lastName: lastName.toUpperCase(),
    ...rest
  }));

  return customersListWithFormattedName;
};
