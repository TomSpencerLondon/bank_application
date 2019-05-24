# frozen_string_literal: true

FactoryBot.define do
  factory :bank_account do
    client
    account_number { "112211FZI" }
    balance { 0.00 }
  end
end
