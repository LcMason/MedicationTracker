class User < ApplicationRecord
    has_many :trackers
    has_many :medications, through: :trackers

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
