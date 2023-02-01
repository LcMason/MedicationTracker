class Review < ApplicationRecord
    belongs_to :user 
    belongs_to :medication 

    validates :review, presence: true, length: { minimum: 10 }
end
