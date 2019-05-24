RSpec.describe BankAccounts::ValidateNewTransaction, :type => :operation do
  let(:client) do
    FactoryBot.create(:client)
  end

  let(:bank_account) do
    FactoryBot.create(:bank_account)
  end

  context 'valid transaction' do
    subject { described_class.new(amount: 10, transaction_type: "withdraw", bank_account_id: 1) }

    it 'validates the transaction' do
      bank_account.save
      bank_account.update!(balance: 30.00)
      subject.execute!
      expect(subject.errors.empty?).to eq(true)
    end
  end

  context 'not enough funds' do
    subject { described_class.new(amount: 10, transaction_type: "withdraw", bank_account_id: 1) }

    it 'shows transaction errors' do
      bank_account.save
      subject.execute!
      expect(subject.errors.empty?).to eq(false)
      expect(subject.errors).to eq(["Not enough funds"])
    end
  end

  context 'account not found' do
    subject { described_class.new(amount: 10, transaction_type: "withdraw", bank_account_id: 2) }

    it 'shows transaction errors' do
      bank_account.save
      subject.execute!
      expect(subject.errors.empty?).to eq(false)
      expect(subject.errors).to eq(["Account not found"])
    end
  end
end
