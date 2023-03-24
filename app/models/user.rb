class User < ApplicationRecord
    validates :username, uniqueness: true, length: { in: 8..25 }
    validates :password, length: { in: 8..20 }
    validates :age, numericality: { greater_than_or_equal_to: 18 }

    has_many :trackers
    has_many :medications, -> { distinct }, through: :trackers
    # has_many :medications, through: :trackers
 

    has_secure_password
end
