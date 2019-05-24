RSpec.describe AccountTransaction, :type => :model do
  context 'valid transaction' do
    let(:deposit) do
      FactoryBot.build(:account_transaction, :deposit)
    end
    it 'is valid with valid attributes' do
      expect(deposit.valid?).to eq(true)
    end

    it 'belongs to a bank account' do
      deposit.save
      expect(deposit.bank_account.class).to eq(BankAccount)
    end
  end

  context 'invalid transaction' do
    let(:deposit) do
      FactoryBot.build(:account_transaction,
                       amount: amount,
                       transaction_type: transaction_type,
                       transaction_number: transaction_number
                      )
    end

    let(:amount){ 10.00 }
    let(:transaction_type) { "withdraw" }
    let(:transaction_number) { "SPE123" }
    
    context 'no amount' do
      let(:amount){ "" }
      it 'is not valid' do
        expect(deposit.valid?).to eq(false)
        expect(deposit.errors.messages[:amount]).to eq(["can't be blank", "invalid amount"])
      end
    end

    context 'no transaction_type' do
      let(:transaction_type){ "" }
      it 'is not valid' do
        expect(deposit.valid?).to eq(false)
        expect(deposit.errors.messages[:transaction_type]).to eq(["can't be blank", "is not included in the list"])
      end
    end
  end
end
