class Tracker < ApplicationRecord
    belongs_to :user 
    belongs_to :medication 

    validates :review, :frequency, :quantity, presence: true
end
