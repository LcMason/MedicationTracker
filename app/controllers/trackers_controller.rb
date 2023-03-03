class TrackersController < ApplicationController

    def index
        render json: Tracker.all
    end
 
  

    def create
        @tracker = current_user.tracker.create!(tracker_params)
        render json: @tracker, status: :created 
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

    def find_tracker
        @tracker = Tracker.find_by(id: params[:id])
    end
# end



end
