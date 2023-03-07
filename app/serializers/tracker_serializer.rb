class TrackerSerializer < ActiveModel::Serializer
  attributes :id, :review, :quantity, :frequency, :medication_id, :user_id 

  belongs_to :medication
  belongs_to :user
end
