RSpec.describe BankAccounts::AccountOperation, :type => :operation do
  let(:client) do
    FactoryBot.create(:client)
  end

  let(:bank_account) do
    FactoryBot.create(:bank_account)
  end

  context 'deposit' do

    subject { described_class.new("deposit", bank_account, 10) }

    it 'shows deposit type' do
      expect(subject.deposit?).to eq(true)
    end

    it 'deposits £10.00' do
      funds = bank_account.funds
      new_funds = bank_account.funds + 10.00
      subject.deposit
      expect(bank_account.funds).to eq(new_funds)
    end
  end

  context 'withdraw' do

    subject { described_class.new("withdraw", bank_account, 10) }

    it 'shows deposit type' do
      expect(subject.withdraw?).to eq(true)
    end

    it 'withdraws £10.00' do
      subject.deposit
      funds = bank_account.funds
      new_funds = bank_account.funds - 10.00
      subject.withdraw
      expect(bank_account.funds).to eq(new_funds)
    end
  end


end
