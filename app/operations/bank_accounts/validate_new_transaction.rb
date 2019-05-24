module BankAccounts
  class ValidateNewTransaction
    attr_reader :errors
    
    def initialize(amount: , transaction_type: , bank_account_id: )
      @amount             = formatted(amount)
      @transaction_type   = transaction_type
      @bank_account_id    = bank_account_id
      @bank_account       = bank_account
      @errors             = []
    end

    def execute!
      validate_existence_of_account!
      if withdraw? and @bank_account.present?
        validate_withdrawal!
      end
      @errors
    end

    private

    def bank_account
      BankAccount.where(id: @bank_account_id).first
    end

    def withdraw?
      @transaction_type == "withdraw"
    end

    def formatted(amount)
      amount.to_f
    end

    def validate_withdrawal!
      if not_enough?
        @errors << "Not enough funds"
      end
    end

    def not_enough?
      @bank_account.funds - @amount < 0.00
    end

    def validate_existence_of_account!
      if @bank_account.blank?
        @errors << "Account not found"
      end
    end
  end
end