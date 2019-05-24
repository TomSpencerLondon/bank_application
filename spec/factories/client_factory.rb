# frozen_string_literal: true

FactoryBot.define do
  factory :client do
    first_name { "Tom" }
    last_name { "Spencer" }
    middle_name { "William" }
    client_number { "1177432TWJ" }
  end
end
