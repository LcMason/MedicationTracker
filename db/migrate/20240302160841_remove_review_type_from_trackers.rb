class RemoveReviewTypeFromTrackers < ActiveRecord::Migration[6.1]
  def change
    remove_column :trackers, :review_type
  end
end
