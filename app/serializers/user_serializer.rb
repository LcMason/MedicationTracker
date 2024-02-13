class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :gender, :age, :race

  has_many :medications
  has_many :trackers, each_serializer: TrackerSerializer
  # has_many :trackers, serializer: TrackerSerializer
end
