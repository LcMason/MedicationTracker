class MedicationsController < ApplicationController

    def index
        render json: Medication.all
    end
 
    def create
        medication = Medication.create!(medication_params)
        render json: medication, status: :created 
    end
   
    def update
        # medication = Medication.find_by(id: params[:id])
        @medication = find_medication
        @medication.update!(medication_params)
        render json: @medication, status: :accepted

        
    end

        def destroy
            @medication = find_medication
                @medication.destroy
                head :no_content
        end


    private

    def medication_params
        params.permit(:name, :form, :instruction, :rating)
    end

    def find_medication
       @medication = Medication.find(params[:id])
    end

   
end
