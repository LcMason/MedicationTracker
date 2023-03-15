class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age

  has_many :medications
  has_many :trackers, each_serializer: TrackerSerializer
end
