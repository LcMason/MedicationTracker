class TrackerSerializer < ActiveModel::Serializer
  attributes :id, :review, :quantity, :frequency, :medication_id, :user_id

  has_one :medication
  # belongs_to :user

end
