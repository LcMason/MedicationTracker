class Tracker < ApplicationRecord
    belongs_to :user 
    belongs_to :medication 

     enum review_type: { excellent: 2, good: 1, neutral: 0 }

    validates :comment, :frequency, :quantity, presence: true
end
