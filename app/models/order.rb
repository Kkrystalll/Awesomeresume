class Order < ApplicationRecord
  include Slugable
  include AASM

  aasm column: "status" do
    state :pending, initial: true
    state :paid, :failed, :cancelled, :refunded

    event :pay do
      transitions from: [:pending,:failed], to: :paid
    end

    event :fail do
      transitions from: :pending, to: :failed
    end

    event :cancel do
      transitions from: [:pending,:failed], to: :cancelled
    end

    event :refund do
      transitions from: :paid, to: :refunded
    end
  end


  belongs_to :resume
  belongs_to :user

end
