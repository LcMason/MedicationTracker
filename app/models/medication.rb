class Medication < ApplicationRecord
    validates :name, presence: true
    validates :form, presence: true 
    validates :instruction, presence: true, length: { in: 10..100 }
    validates :rating, presence: true, length: { in: 1..5}
    
    has_many :trackers
    has_many :users, through: :trackers
end
