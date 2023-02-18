class TrackersController < ApplicationController

    def index
        render json: Tracker.all
    end
 
    def create
        # tracker = Tracker.find_by(id: params[:id])
        # if tracker.valid?
        # # tracker.create!(tracker_params)
            tracker = Tracker.create(tracker_params)
            # if tracker.valid?
            render json: tracker, status: :created 
        # else
            # render json: {error: tracker.errors.full_messages }, status: :unprocessable_entity
        # end
    end

    

#     def update
#         patient = Patient.find_by(id: params[:id])
#         if patient
#             patient.update(patient_params)
#             render json: patient, status: :accepted
#         else
#             render json: {error: "medication not found"}, status: :not_found
#         end
#     end

# # Pass medication to tracker controller to have access to create a new review

    private
    def tracker_params
        params.permit(:review, :quantity, :frequency)
    end
# end



end
