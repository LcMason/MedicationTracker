class TrackerSerializer < ActiveModel::Serializer
  attributes :id, :comment, :quantity, :frequency, :medication_id, :user_id, :medication

  # has_one :medication
  # belongs_to :user
  # belongs_to :medication
end
