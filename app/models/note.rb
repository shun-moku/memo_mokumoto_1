class Note < ApplicationRecord
  validates :memo, presence: true
  validates :url, presence: true, format: URI::regexp(%w(http https)),  allow_blank: true
  belongs_to :user

end
