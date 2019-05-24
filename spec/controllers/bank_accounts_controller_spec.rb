describe BankAccountsController, type: :request do
  describe 'index' do
    it 'shows index page' do
      get '/bank_accounts'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'show' do
    let(:client) do
      FactoryBot.create(:client)
    end
    
    let(:bank_account) do
      FactoryBot.create(:bank_account)
    end
    it 'renders show page' do
      bank_account.save
      get '/bank_accounts/1'
      expect(response).to have_http_status(:success)
    end
  end
end
