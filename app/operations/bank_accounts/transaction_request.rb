module BankAccounts
  class TransactionRequest
    attr_reader :amount, :transaction_type, :bank_account_id 
    def initialize(params)
      @amount           = params.fetch(:amount)
      @transaction_type = params.fetch(:transaction_type)
      @bank_account_id  = params.fetch(:bank_account_id)
    end
  end
end