RSpec.describe Client, :type => :model do
  context 'valid Client' do
    let(:client) do
      FactoryBot.build(:client)
    end

    it 'is valid with valid attributes' do
      expect(client.valid?).to eq(true)
    end

    it 'returns a full name' do
      client.format_name
      expect(client.to_s).to eq("SPENCER, TOM WILLIAM")
    end
  end

  context 'invalid Client' do
    let(:client) do
      FactoryBot.build(:client,
                       first_name: "",
                       last_name: "",
                       middle_name: "",
                       client_number: "")
    end

    it 'is invalid' do
      expect(client.valid?).to eq(false)
    end
  end
end
