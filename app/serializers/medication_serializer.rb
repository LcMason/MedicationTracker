class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :form, :instruction, :rating 

  has_many :trackers, serializer: TrackerSerializer
end
