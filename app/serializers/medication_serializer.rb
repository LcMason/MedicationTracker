class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :form, :instruction, :rating 
end
