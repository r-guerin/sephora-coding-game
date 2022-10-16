import nock from 'nock';
import { customersList } from './src/customers/customers-list';
import { ordersList } from './src/orders/orders-list';

afterEach(() => {
  nock.cleanAll();
});

beforeAll(() => {
  nock('https://api.sephora.com').get('/v1/customers').reply(200, customersList);
  nock('https://api.sephora.com').get('/v1/orders').reply(200, ordersList);
});
