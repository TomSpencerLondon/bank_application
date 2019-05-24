
export const updateAccount = (amount, transactionType, bankAccountId) => {

  const fakeData = {balance: "200",
                    account_transactions: [{
                      amount: "100.0",
                      bank_account_id: 1,
                      created_at: "2019-05-14T11:03:36.904Z",
                      id: 1,
                      transaction_number: "851ad5ea-bcb0-4608-994e-0605f6cc1106",
                      transaction_type: "deposit",
                      updated_at: "2019-05-14T11:03:36.904Z"
                    },
                    {
                      amount: "100.0",
                      bank_account_id: 1,
                      created_at: "2019-05-14T11:04:06.136Z",
                      id: 2,
                      transaction_number: "868e9330-55df-4f5e-bb2b-ab139a5d910c",
                      transaction_type: "deposit",
                      updated_at: "2019-05-14T11:04:06.136Z"
                    }]}
  var response = new $.Deferred();
  response.resolve(fakeData);
  return response.promise();
};
