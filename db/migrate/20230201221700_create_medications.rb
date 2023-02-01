class CreateMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :medications do |t|
      t.string :name
      t.string :type
      t.text :instruction
      t.integer :rating

      t.timestamps
    end
  end
end
