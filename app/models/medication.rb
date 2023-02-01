class Medication < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :type, presence: true 
    validates :instruction, presence: true, length: { in: 10..20 }
    validates :rating, presence: true
end
