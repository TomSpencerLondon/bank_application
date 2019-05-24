RSpec.describe BankAccount, :type => :model do
  
  context 'valid BankAccount' do
    let(:client) do
      FactoryBot.build(:client)
    end
    
    let(:bank_account) do
      FactoryBot.build(:bank_account)
    end

    it 'shows funds' do
      expect(bank_account.funds).to eq(0.00)
    end
  end

  context 'invalid BankAccount' do
    let(:bank_account) do
      FactoryBot.build(:bank_account,
                       client: nil,
                       account_number: "ABS123",
                       balance: 0.00)
    end

    it 'fails' do
      expect(bank_account.valid?).to eq(false)
      expect(bank_account.errors.messages[:client]).to eq(["must exist", "can't be blank"])
    end
  end


end