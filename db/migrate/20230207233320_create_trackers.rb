class CreateTrackers < ActiveRecord::Migration[6.1]
  def change
    create_table :trackers do |t| 
      t.integer :frequency
      t.integer :quantity
      t.integer :user_id
      t.integer :medication_id


      t.timestamps
    end
  end
end
