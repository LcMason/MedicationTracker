# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Medication.destroy_all
Tracker.destroy_all

# assign each user to a variable
#follow format for medication_id: medication1.id
puts ":medical_symbol: Seeding users..."
user1 = User.create(username: "Lionel Mason", password: "flatironschool", age: 25)
user2 = User.create(username: "Charles Grand", password: "theFlatironschool", age: 30)
user3 = User.create(username: "LcMason", password: "NewYorkCity", age: 35)



puts ":medical_symbol: Seeding medications.."
medication1 = Medication.create(name: "Hydrocodone", form: "Tablet", instruction: "Taken orally every 12 hours with or without food.", rating: 3 )
medication2 = Medication.create(name: "Metformin", form: "Tablet", instruction: "Taken orally with the maximum daily dose of 2,000mg a day.", rating: 3 )
medication3 = Medication.create(name: "Losartan", form: "Tablet", instruction: "Taken orally with the dosage depending on the doctor's prescription.", rating: 4 )
medication4 = Medication.create(name: "Antibiotics", form: "Tablet", instruction: "Taken orally or intravenously with the frequency depending on the doctor's prescription.", rating: 5 )
medication5 = Medication.create(name: "Albuterol", form: "Tablet", instruction: "Taken orally or inhaled with the dosage depending on the doctor's presscription.", rating: 5 )
medication6 = Medication.create(name: "Antihistamines", form: "Tablet", instruction: "When prescribed, it can be taken daily on a fixed schedule or only when symptoms occur.", rating: 3 )
medication7 = Medication.create(name: "Gabapentin", form: "Capsule", instruction: "Dosage will depend on doctor's prescription.", rating: 3 )
medication8 = Medication.create(name: "Omeprazole", form: "Capsule", instruction: "Taken once a day at least 30 minutes before a meal.", rating: 3 )
medication9 = Medication.create(name: "Levothyroxine", form: "Capsule", instruction: "Ideally taken at least 30 minutes before breakfast.", rating: 4 )
medication10 = Medication.create(name: "Atorvastatin", form: "Tablet", instruction: "Taken once a day.", rating: 4 )


puts ":medical_symbol: Seeding trackers..."
tracker1 = Tracker.create(review: "helps with severe pain.", frequency: 2, quantity: 13, user_id: user1.id, medication_id: medication1.id )
tracker2 = Tracker.create(review: "experience nausea and some vomitting.", frequency: 2, quantity: 13, user_id: user2.id, medication_id: medication2.id )
tracker3 = Tracker.create(review: "regulated my blood pressure.", frequency: 4, quantity: 15, user_id: user3.id, medication_id: medication3.id )
tracker4 = Tracker.create(review: "cured my bacterial infection.", frequency: 4, quantity: 22, user_id: user1.id, medication_id: medication4.id )
tracker5 = Tracker.create(review: "eased my asthma attack.", frequency: 4, quantity: 10, user_id: user2.id, medication_id: medication5.id )
tracker6 = Tracker.create(review: "relieved symptoms related to my allergies.", frequency: 2, quantity: 11, user_id: user3.id, medication_id: medication6.id )
tracker7 = Tracker.create(review: "controlled my seizures and provided relief for nerve pain.", frequency: 3, quantity: 12, user_id: user1.id, medication_id: medication7.id )
tracker8 = Tracker.create(review: "provided relief for my acid reflux.", frequency: 1, quantity: 12, user_id: user2.id, medication_id: medication8.id )
tracker9 = Tracker.create(review: "experienced muscle cramps and headaches.", frequency: 1, quantity: 11, user_id: user3.id, medication_id: medication9.id )
tracker10 = Tracker.create(review: "experienced cold like symptoms.", frequency: 1, quantity: 10, user_id: user1.id, medication_id: medication10.id )