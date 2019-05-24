# frozen_string_literal: true

FactoryBot.define do
  factory :account_transaction do
    trait :withdrawal do
      bank_account
      amount { 10.00 }
      transaction_type { "withdraw"}
      transaction_number { "122" }
    end

    trait :deposit do
      bank_account
      amount { 10.00 }
      transaction_type { "deposit"}
      transaction_number { "123" }
    end
  end
end
