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

    



    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :age, :bio)
    end


end
