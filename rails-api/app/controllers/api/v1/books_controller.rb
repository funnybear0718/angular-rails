class Api::V1::BooksController < ApplicationController
  before_action :load_book, only: [:show, :update]

  def index
    render json: {
      status: :ok,
      data: {
        books: Book.all.as_json(only: [:id, :price, :name])
      }
    }
  end

  def create
    book = Book.new book_params
    status = book.save

    render json: {
      status: status,
      data: {
        book: book.as_json(only: [:id, :price, :name])
      }
    }
  end

  def show
    render json: {
      status: :ok,
      data: {
        book: @book.as_json(only: [:id, :price, :name])
      }
    }
  end

  def update
    status = @book.update_attributes book_params

    render json: {
      status: status,
      data: {
        book: @book.as_json(only: [:id, :price, :name]),
        errors: @book.errors.full_messages
      }
    }
  end

  def destroy
    render json: {
      status: @book.destroy
    }
  end

  private
  def load_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(Book::BASIC_ATTRS)
  end
end
