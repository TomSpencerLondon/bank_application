describe Api::V1::BankAccountsController, type: :request do
  let(:bank_account) do
    FactoryBot.build(:bank_account)
  end

  context 'valid transaction' do
    it 'shows funds' do
      bank_account.save
      post '/api/v1/bank_accounts/new_transaction', params: {
                                                      "amount": "10",
                                                      "transaction_type": "deposit",
                                                      "bank_account_id": "1"
                                                    }
      expect(response).to have_http_status(:success)
    end
  end

  context 'invalid transaction' do
    it 'shows failure' do
      bank_account.save
      post '/api/v1/bank_accounts/new_transaction', params: {
                                                      "amount": "10",
                                                      "transaction_type": "deposit",
                                                      "bank_account_id": "2"
                                                    }
      expect(response).to have_http_status(402)
      expect(JSON.parse(response.body)["errors"]).to eq(["Account not found"])
    end
  end
end
