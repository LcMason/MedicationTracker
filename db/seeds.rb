# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Medication.destroy_all
Review.destroy_all

# assign each user to a variable
#follow format for medication_id: medication1.id
puts ":medical_symbol: Seeding users..."
user1 = User.create(username: "Lionel Mason", password: "flatironschool", age: 25, bio: "Healthy male - Family history of high cholesterol")
user2 = User.create(username: "Charles Grand", password: "theFlatironschool", age: 30, bio: "Healthy male - Family history of Type 2 Diabetes and seasonal asthma")
user3 = User.create(username: "LcMason", password: "NewYorkCity", age: 35, bio: "Healthy male - Family history of high blood pressure")



puts ":medical_symbol: Seeding medications.."
medication1 = Medication.create(name: "Hydrocodone", form: "Tablet", instruction: "Taken orally every 12 hours with or without food.", rating: 3 )
medication2 = Medication.create(name: "Metformin", form: "Tablet", instruction: "Taken orally with the maximum daily dose of 2,000mg a day.", rating: 3 )
medication3 = Medication.create(name: "Losartan", form: "Tablet", instruction: "Taken orally with the dosage depending on the doctor's prescription.", rating: 4 )
medication4 = Medication.create(name: "Antibiotics", form: "Intravenous Fluid", instruction: "Taken orally or intravenously with the frequency depending on the doctor's prescription.", rating: 5 )
medication5 = Medication.create(name: "Albuterol", form: "Inhaler", instruction: "Taken orally or inhaled with the dosage edpending on the doctor's presscription.", rating: 5 )
medication6 = Medication.create(name: "Antihistamines", form: "Topical Ointment", instruction: "When prescribed, it can be taken daily on a fixed schedule or only when symptoms occur.", rating: 3 )
medication7 = Medication.create(name: "Gabapentin", form: "Capsule", instruction: "Dosage will depend on doctor's prescription.", rating: 3 )
medication8 = Medication.create(name: "Omeprazole", form: "Capsule", instruction: "Taken once a day at least 30 minutes before a meal.", rating: 3 )
medication9 = Medication.create(name: "Levothyroxine", form: "Oral Liquid", instruction: "Ideally taken at least 30 minutes before breakfast.", rating: 4 )
medication10 = Medication.create(name: "Atorvastatin", form: "Tablet", instruction: "Taken once a day.", rating: 4 )


puts ":medical_symbol: Seeding reviews..."
review1 = Review.create(review: "Great cough suppresent for adults", user_id: "user1.id" , medication_id: "medication1.id" )
review2 = Review.create(review: "Limted side effects in treating Type 2 Diabetes", user_id: "user2.id", medication_id: "medication2.id" )
review3 = Review.create(review: "Helps in decreasing the risk of stroke for patients with high blood pressure", user_id: "user3.id", medication_id: "medication3.id" )
review4 = Review.create(review: "Limited side effects for treating most illnesses and bacterial infections", user_id: "user1.id", medication_id: "medicaiton4.id" )
review5 = Review.create(review: "Fast therapeutic effects for treating asthma", user_id: "user2.id", medication_id: "medicaiton5.id" )
review6 = Review.create(review: "Great medication for treating allergies", user_id: "user3.id", medication_id: "medication6.id" )
review7 = Review.create(review: "Used to prevent and control seizures or relieve nerve pain", user_id: "user1.id", medication_id: "medicaiton7.id" )
review8 = Review.create(review: "Reduces the amount of stomach acid", user_id: "user2.id", medication_id: "medication8.id" )
review9 = Review.create(review: "Highly recommended for treating underactive hypothyrodism", user_id: "user3.id", medication_id: "medication9.id" )
review10 = Review.create(review: "Good for treating high choleserol and preventing heart disease", user_id: "user1.id", medication_id: "medication10.id" )