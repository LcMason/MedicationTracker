class TrackersController < ApplicationController

    # class PatientsController < ApplicationController

#     def index
#         render json: Medication.all
#     end


#     def update
#         patient = Patient.find_by(id: params[:id])
#         if patient
#             patient.update(patient_params)
#             render json: patient, status: :accepted
#         else
#             render json: {error: "medication not found"}, status: :not_found
#         end
#     end

# # Potentially use the patient serializer (or delete serializer). Pass attributes for medication in serializer

# # Pass medication to patients controller to have access to the medication attributes

#     private
#     def patient_params
#         params.permit(:name, :form, :instruction, :rating)
#     end
# end



end
