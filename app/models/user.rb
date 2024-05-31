class User < ApplicationRecord
    validates :username, uniqueness: true, length: { in: 8..25 }
    validates :password, length: { in: 8..20 }
    validates :age, numericality: { greater_than_or_equal_to: 18 }
    validates :name, presence: true
    validates :gender, presence: true
    validates :race, presence: true

    has_many :trackers
    has_many :medications, -> { distinct }, through: :trackers

    
    def admin?
        role == 'admin'
    end

    def user?
        role == 'user'
    end
      # has_many :chart_data TODO

        # def chart_data
    # Custom method to fetch chart data associated with the user
    # Implement this method based on how your chart data is stored in your database
    # For example, you might have something like:
#     self.chart_data.map { |data| { year: data.year, excellent: data.excellent, good: data.good, neutral: data.neutral } }
#   end

    has_secure_password
end
