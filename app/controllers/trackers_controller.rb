class TrackersController < ApplicationController
skip_before_action :authorize
    # def index
    #     if params[:user_id]
    #         @user = User.find_by_id(params[:user_id])
    #         render json: @user.trackers, status: :ok
    #     else
    #         render json: { message: "Unauthorized" }, status: :unauthorized
    #     end
    # end

    def index
        render json: Tracker.all
    end

    # def create
    #     @tracker = current_user.trackers.create!(tracker_params)
    #     render json: @tracker, status: :created 
    # end

    def create
        @tracker = Tracker.create!(tracker_params)
        render json: @tracker, status: :created 
    end

    def destroy
        if @tracker.user_id == current_user.id 
        @tracker.destroy
        head :no_content
        else
            render json: {message: "Cannot Delete"}
        end
    end

# # Pass medication to tracker controller to have access to create a new review

    private
    def tracker_params
        params.permit(:review, :quantity, :frequency, :user_id, :medication_id)
    end
# end



end
