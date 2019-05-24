export const updateAccount = (amount, transactionType, bankAccountId) => $.ajax({
  type: 'POST',
  url: `/api/v1/bank_accounts/new_transaction`,
  dataType: 'json',
  data: {
    amount: amount,
    transaction_type: transactionType,
    bank_account_id: bankAccountId
  },
});
