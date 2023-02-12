class AddReviewToTracker < ActiveRecord::Migration[6.1]
  def change
    add_column :trackers, :review, :text 
  end
end
