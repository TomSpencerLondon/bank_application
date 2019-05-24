module Api
  module V1
    class BankAccountsController < ApplicationController
      def new_transaction
        if valid_transaction?
          new_balance
          account_transactions

          render json: { 
                         balance: new_balance.balance,
                         account_transactions: account_transactions
                       }
        else
          render json: { errors: validate_new_transaction.errors }, status: 402
        end
      end

      private

      def action
        @action ||= ::BankAccounts::TransactionRequest.new(params)
      end

      def new_balance
        @new_balance ||= ::BankAccounts::PerformTransaction.new(
                            amount: action.amount,
                            transaction_type: action.transaction_type,
                            bank_account_id: action.bank_account_id
                          ).execute!
      end

      def account_transactions
        BankAccount.find(action.bank_account_id).account_transactions
      end

      def valid_transaction?
        execute_validation
        validate_new_transaction.errors.empty?
      end

      def execute_validation
        validate_new_transaction.execute!
      end

      def validate_new_transaction
        @transaction_validator ||= ::BankAccounts::ValidateNewTransaction.new(
                                    amount: action.amount,
                                    transaction_type: action.transaction_type,
                                    bank_account_id: action.bank_account_id
                                   )
      end
    end
  end
end