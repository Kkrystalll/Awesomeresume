class OrdersController < ApplicationController
  before_action :authenticate_user

  def checkout
    @token = gateway.client_token.generate
  end

  private
  def gateway
    Braintree::Gateway.new(
    environment: :sandbox,
    merchant_id: ENV["merchant_id"],
    public_key: ENV["public_key"],
    private_key: ENV["private_key"],
    )
  end
end
