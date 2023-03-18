class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :form, :instruction, :rating

  # has_many :users
  # has_many :trackers
end
