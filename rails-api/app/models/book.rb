class Book < ApplicationRecord
  BASIC_ATTRS = %i(name price)

  validates :name, :price, :author, :publication_date, :supplier_id, :width, :height,
    :size_unit_id, :cover_type_id, :total_page, :description, :short_description,
    :languague_id, presence: true

  enum size_unit_id: {cm: 1, m: 2}
  enum cover_type_id: {hard_cover: 1, soft_cover: 2}
end
