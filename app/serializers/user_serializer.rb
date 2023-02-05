class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :bio
end
