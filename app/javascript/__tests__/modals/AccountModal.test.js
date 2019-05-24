import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure, ReactWrapper } from 'enzyme';
configure({ adapter: new Adapter() });
import AccountModal from 'modals/AccountModal';
jest.mock('../../utils/requests');

describe('<AccountModal />', () => {
  let wrapper;

  beforeEach(() => {
    var transactions = [{
      amount: "100.0",
      bank_account_id: 1,
      created_at: "2019-05-14T11:03:36.904Z",
      id: 1,
      transaction_number: "851ad5ea-bcb0-4608-994e-0605f6cc1106",
      transaction_type: "deposit",
      updated_at: "2019-05-14T11:03:36.904Z"
      }]
    var account = {account_number: "122211553",
      balance: "100.0",
      client_id: 3,
      created_at: "2019-05-14T00:03:42.585Z",
      id: 1,
      updated_at: "2019-05-19T14:44:01.437Z"}

    wrapper = mount(<AccountModal bankAccount={account} accountTransactions={transactions}></AccountModal>)
  });

  it('Renders the balance on the page before pressing Open Modal', () => {
    const balance = wrapper.find('#final_balance');
    expect(balance.text()).toEqual("£100.00");
  });

  it('Renders the modal on the page when Open Modal is pressed', async () => {
    wrapper.find('.btn.btn-primary').simulate('click');

    var input = wrapper.find("input[name='amount']");
    input.simulate('change', { target: { name: 'amount', value: '100' } });
    var select = wrapper.find("select[name='transactionType']");
    select.simulate('change', { target: { name: 'transactionType', value: 'deposit' } });
    var buttons = wrapper.find('.btn.btn-primary')
    var button = buttons.findWhere(node => node.text() == 'Save' )
    button.first().simulate('click');

    const transaction_1 = wrapper.find('#transaction_amount_0');
    const transaction_2 = wrapper.find('#transaction_amount_1');
    const balance = wrapper.find('#final_balance');

    expect(transaction_1.text()).toEqual("£100.00")
    expect(transaction_2.text()).toEqual("£100.00")
    expect(balance.text()).toEqual("£200.00")
  });
});