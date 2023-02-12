class Tracker < ApplicationRecord
    belongs_to :user 
    belongs_to :medication 

    validates :review, presence: true
    validates :frequency, presence: true
    validates :quantity, presence: true

end
