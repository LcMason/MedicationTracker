class Medication < ApplicationRecord
    has_many :users
    has_many :trackers, through: :users

    validates :name, presence: true
    validates :form, presence: true 
    validates :instruction, presence: true, length: { in: 10..100 }
    validates :rating, presence: true
end
