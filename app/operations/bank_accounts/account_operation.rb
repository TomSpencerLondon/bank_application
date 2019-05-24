module BankAccounts
  class AccountOperation
    attr_reader :bank_account

    def initialize(transaction_type, bank_account, amount)
      @transaction_type = transaction_type
      @bank_account = bank_account
      @amount = amount
    end

    def withdraw?
      @transaction_type == "withdraw"
    end

    def deposit?
      @transaction_type == "deposit"
    end

    def withdraw
      bank_account.update!(balance: subtracted)
    end

    def subtracted
      bank_account.balance - @amount
    end

    def deposit
      bank_account.update!(balance: increased)
    end

    def increased
      bank_account.balance + @amount
    end
  end
end