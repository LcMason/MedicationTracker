class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age

  has_many :medications
  has_many :trackers, serializer: TrackerSerializer
end
