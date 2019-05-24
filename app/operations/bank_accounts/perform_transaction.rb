module BankAccounts
  class PerformTransaction
    def initialize(amount: , transaction_type: , bank_account_id: )
      @amount             = formatted(amount)
      @transaction_type   = transaction_type
      @bank_account_id    = bank_account_id
      @bank_account       = BankAccount.where(id: @bank_account_id).first
    end

    def execute!
      ActiveRecord::Base.transaction do
        create_transaction
        bank_account_transaction
      end
    end

    private

    def create_transaction
      AccountTransaction.create!(
        bank_account: @bank_account,
        amount: @amount,
        transaction_type: @transaction_type
      )
    end

    def bank_account_transaction
      operation.withdraw if operation.withdraw?
      operation.deposit if operation.deposit?

      @bank_account
    end

    def operation
      @account_operation ||= BankAccounts::AccountOperation.new(@transaction_type, @bank_account, @amount)
    end

    def formatted(amount)
      amount.to_f
    end
  end
end