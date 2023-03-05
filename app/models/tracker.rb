class Tracker < ApplicationRecord
    belongs_to :user 
    belongs_to :medication 

    validates :review, :frequency, :quantity, presence: true
 

#     validates :medication_id, uniqueness: { 
#     scope: :user_id, 
#     message: "can only have one medication associated with trackers." 
#   }

end
