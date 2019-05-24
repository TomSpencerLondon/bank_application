class BankAccountsController < ApplicationController
  def index
    @bank_accounts = BankAccount.all
  end

  def new
    @bank_account = BankAccount.new
  end

  def create
  end

  def edit
  end

  def update
  end

  def show
    @bank_account = BankAccount.find(params[:id])
  end
end
