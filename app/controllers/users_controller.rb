class UsersController < ApplicationController
   skip_before_action :authorize, only: :create 

    # POST /signup
    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

        # GET /me 
        def show
            render json: @current_user
        end


        def update
            user = User.find_by(id: params[:id])
            if user
                user.update(patient_params)
                render json: user, status: :accepted
            else
                render json: {error: "medication not found"}, status: :not_found
            end
        end
    
        # rails resource routing lab to add a like feature for medication. set maximum likes to 5


    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :age)
    end

    def patient_params
        params.permit(:name, :form, :instruction, :rating)
    end
end



