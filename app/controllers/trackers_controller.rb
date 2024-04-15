class TrackersController < ApplicationController
    before_action :authorize
 
    def index
        render json: Tracker.all
    end

    def show
        # TODO: create route for review_type. target id. find_by :id
    end


    def create
        @tracker = current_user.trackers.create!(tracker_params)
        render json: @tracker, status: :created 
    end

    def destroy
        @tracker = Tracker.find_by(id: params[:id])
        if @tracker.user_id == current_user.id 
        @tracker.destroy
        head :no_content
        else
            render json: {message: "Cannot Delete"}
        end
    end

    private
    def tracker_params
        params.permit(:comment, :review_type, :quantity, :frequency, :medication_id)
    end

end
