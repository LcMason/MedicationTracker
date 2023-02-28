class TrackerSerializer < ActiveModel::Serializer
  attributes :review, :quantity, :frequency 

  belongs_to :medication
  belongs_to :user
end
