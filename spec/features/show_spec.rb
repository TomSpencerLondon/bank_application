RSpec.feature "Show", :type => :feature do
  let(:deposit_1) do
    FactoryBot.create(:account_transaction,
                      bank_account: bank_account,
                      amount: 10.00,
                      transaction_type: "deposit",
                      transaction_number: 142)
  end

  let(:deposit_2) do
    FactoryBot.create(:account_transaction,
                      bank_account: bank_account,
                      amount: 10.00,
                      transaction_type: "deposit",
                      transaction_number: 143)
  end
  
  
  let(:bank_account) do    
    FactoryBot.create(:bank_account,
                      client: client,
                      account_number: "221314TWJ",
                      balance: 0.00)
  end

  let(:client) do
    FactoryBot.create(:client,
                      first_name: "Jim",
                      last_name: "Jones",
                      middle_name: "Jerry",
                      client_number: "5533241JJJ")
  end

  describe "show page" do
    it 'shows the the bank accounts show' do
      bank_account.account_transactions.push(deposit_1, deposit_2)
      bank_account.update(balance: 20.00)
      bank_account.save

      visit "/bank_accounts/1"
      expect(page.find("#bank_account_holder_number").text()).to eq("Account Number: 221314TWJ")
      expect(page.find("#bank_account_holder_name").text()).to eq("JONES, JIM JERRY")
      expect(page.find("#transaction_amount_0").text()).to eq("£10.00")
      expect(page.find("#transaction_type_0").text()).to eq("deposit")
      expect(page.find("#transaction_amount_1").text()).to eq("£10.00")
      expect(page.find("#transaction_type_1").text()).to eq("deposit")
      expect(page.find("#final_balance").text()).to eq("£20.00")
    end
  end
end
