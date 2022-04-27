FactoryBot.define do
  factory :order do
    slug { "MyString" }
    resume { nil }
    price { 1 }
    status { "MyString" }
    user { nil }
  end
end
