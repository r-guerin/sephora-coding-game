import { Customer } from './Customer';

export const customersList: Customer[] = [
  {
    id: 'CUST_0001',
    firstName: 'john',
    lastName: 'SMith',
    status: 'active',
  },
  {
    id: 'CUST_0002',
    firstName: 'Richard',
    lastName: 'STALLMAN',
    status: 'active',
  },
  {
    id: 'CUST_0003',
    firstName: 'ADA',
    lastName: 'Lovelace',
    status: 'active',
  },
  {
    id: 'CUST_0004',
    firstName: 'DENNIS',
    lastName: 'Richie',
    status: 'inactive',
  },
];

export const activeCustomersList: Customer[] = [
  {
    id: 'CUST_0001',
    firstName: 'john',
    lastName: 'SMith',
    status: 'active',
  },
  {
    id: 'CUST_0002',
    firstName: 'Richard',
    lastName: 'STALLMAN',
    status: 'active',
  },
  {
    id: 'CUST_0003',
    firstName: 'ADA',
    lastName: 'Lovelace',
    status: 'active',
  }
];

export const customersWithFormattedNameList: Customer[] = [
  {
    id: 'CUST_0001',
    firstName: 'John',
    lastName: 'SMITH',
    status: 'active',
  },
  {
    id: 'CUST_0002',
    firstName: 'Richard',
    lastName: 'STALLMAN',
    status: 'active',
  },
  {
    id: 'CUST_0003',
    firstName: 'Ada',
    lastName: 'LOVELACE',
    status: 'active',
  },
  {
    id: 'CUST_0004',
    firstName: 'Dennis',
    lastName: 'RICHIE',
    status: 'inactive',
  },
];