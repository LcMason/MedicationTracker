class Tracker < ApplicationRecord
    belongs_to :user 
    belongs_to :medication 

    validates :frequency, presence: true
    validates :quantity, presence: true, numericality: { only_integer: true }
end
