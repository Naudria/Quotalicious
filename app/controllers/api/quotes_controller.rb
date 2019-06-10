class Api::QuotesController < ApplicationController

  def index
    quotes = Quote.all
    render json: quotes
  end

  def show
    quote = Quote.find(params[:id])
    render json: quote
  end

  def favorited_by
    quote = Quote.find(params[:id])
    render json: quote.favorited_by
  end


end
