class MedicationsController < ApplicationController
    before_action :authorize

   

    # def index
    #     if @current_user
    #         render json: current_user.medications
    #     else
    #         render json: { message: "Unauthorized" }, status: :unauthorized
    #     end
    # end

    def index
            render json: current_user.medications, status: :ok
    end

   
    

    # def show
    #     @medication = find_medication
    #     render json: medication, :include :user, status: :ok
    # end
 
    def create
        @medication = Medication.create!(medication_params)
        render json: @medication, status: :created 
    end
   
    def update
        @medication = current_user.medication.update!(medication_params)
        render json: @medication, status: :accepted 
    end

    def destroy
        @medication = current_user.medication.destroy
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
