RSpec.describe BankAccounts::PerformTransaction, :type => :operation do
  let(:client) do
    FactoryBot.create(:client)
  end

  let(:bank_account) do
    FactoryBot.create(:bank_account)
  end

  context 'deposit' do

    subject { described_class.new(amount: 10, transaction_type: "deposit", bank_account_id: 1) }

    it 'executes the transaction and adds to the account' do
      bank_account.save
      subject.execute!
      expect(AccountTransaction.first.transaction_type).to eq("deposit")
      expect(AccountTransaction.first.amount.to_f).to eq(10.0)
      expect(BankAccount.first.funds).to eq(10.00)
    end
  end

  context 'withdraw' do
    let(:bank_account) do
      account = FactoryBot.create(:bank_account)
    end

    subject { described_class.new(amount: 10, transaction_type: "withdraw", bank_account_id: 1) }

    it 'executes the transaction and subtracts from the account' do
      bank_account.save
      bank_account.update!(balance: 20.00)
      subject.execute!
      expect(AccountTransaction.first.transaction_type).to eq("withdraw")
      expect(AccountTransaction.first.amount.to_f).to eq(10.0)
      expect(BankAccount.first.funds).to eq(10.00)
    end
  end
end
