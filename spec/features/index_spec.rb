RSpec.feature "Index", :type => :feature do

  before do
    FactoryBot.create(:bank_account)
  end

  describe "index page" do
    it 'shows the pages index' do
      visit "/"
      expect(page.title).to eq("Bank")
      expect(page.find("h1").text()).to eq("My Bank")
      expect(page.find("#number_of_accounts").text()).to eq("Number of accounts: 1")
      expect(page.find("#number_of_clients").text()).to eq("Number of clients: 1")
    end

    it 'shows the bank accounts index' do
      visit "/"
      page.find("a[href='#{bank_accounts_path}']").click
      expect(page.find("h1").text()).to eq("Bank Accounts")
      expect(page.find("#bank_account_id_0").text()).to eq("112211FZI")
      expect(page.find("#bank_account_amount_0").text()).to eq("£0.00")
    end
  end
end