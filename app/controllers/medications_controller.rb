class MedicationsController < ApplicationController
    skip_before_action :authorize, only: :index
    before_action :find_medication, only: [:update, :destroy, :show]
    # before_action :current_user, only: :create 

    def index
        if current_user
            render json: current_user.medications
        else
            render json: Medication.all, status: :ok
        end
    end

    def show
        find_medication
       render json: @medication, status: :ok
    end

    def create
    # byebug
        @medication = Medication.create!(medication_params)
        render json: @medication, status: :created 
    end
   
    def update
        find_medication
        @medication.update!(medication_params)
        render json: @medication, status: :accepted
    end

    def destroy
        find_medication
        @medication.destroy
        head :no_content
    end

    private

    def medication_params
        params.permit(:name, :form, :instruction, :rating)
    end

    def find_medication
       @medication = Medication.find_by(id: params[:id])
    end
end
