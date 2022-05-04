FactoryBot.define do
  factory :comment do
    user { nil }
    resume { nil }
    content { "MyText" }
    delete_at { "2022-05-03 15:37:51" }
  end
end
