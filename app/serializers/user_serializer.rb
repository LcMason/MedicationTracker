class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :bio

  # has_many :trackers, serializer: TrackerSerializer
  has_many :medications, serializer: MedicationSerializer
  
end
