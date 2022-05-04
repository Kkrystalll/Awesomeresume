class OrdersController < ApplicationController
  before_action :authenticate_user

  def index
    @orders = current_user.orders
  end

  def checkout
    @token = gateway.client_token.generate
    @order = Order.friendly.find(params[:id])
  end

  def pay
    @order = Order.friendly.find(params[:id])
    result = gateway.transaction.sale(
    amount: @order.price,
    payment_method_nonce: params[:nonce])

    if result.success?
      @order.pay!
      redirect_to orders_path, notice: "付款成功"
    else
      @order.fail!
      redirect_to orders_path, alert: "付款失敗"
    end
  end

  def cancel
    @order = Order.friendly.find(params[:id])
    @order.cancel!
    redirect_to orders_path, notice: "取消成功"
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
