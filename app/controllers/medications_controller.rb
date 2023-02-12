class MedicationsController < ApplicationController

    def index
        render json: Medication.all
    end
 
    def create
        medication = Medication.create!(medication_params)
        render json: medication, status: :created 
    end
   
    def update
        medication = Medication.find_by(id: params[:id])
        if medication
         medication.update(medication_params)
            render json: medication, status: :accepted
        else
            render json: {error: "medication not found"}, status: :not_found
        end
    end

        def destroy
            medication = Medication.find_by(id: params[:id])
            if medication
                medication.destroy
                head :no_content
            else
                render json: {error: "medication not found"}, status: :not_found
            end
        end


    private

    def medication_params
        params.permit(:name, :form, :instruction, :rating)
    end

   
end
