class Api::ListsController < ApplicationController

  def index
    lists = List.all
    render json: lists
  end

  def create
    list = List.create(list_params)
  end

  def show
    current_list = List.find(params[:id])
    render json: current_list
  end

  def favorites
    quotes = current_list.favorites.uniq
    render json: quotes
  end

  def add_to_favorites
    current_list = List.find(params[:id])
    quote = Quote.find_or_create_by(quote_params)
    current_list.favorites << quote unless current_list.favorites.include?(quote)
    render json: current_list.favorites.uniq
  end


  def remove_from_favorites
    current_list = List.find(params[:id])
    quote = Quote.find_by(id: params[:quote][:id])
    current_list.favorites.delete(quote)
    render json: current_list.favorites
  end

  private

  def list_params
    params.require(:list).permit(
      :title,
      :description
    )
  end

  def quote_params
    params.require(:quote).permit(
      :author,
      :body,
      :tags
    )
  end


end