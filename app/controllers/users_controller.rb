class UsersController < ApplicationController
   skip_before_action :authorize, only: :create 

   def index
    render json: User.all
   end

    # POST /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created 
    end

        # GET /me 
        def show
            render json: @current_user
        end

        # def user_medications
        #     render json: current_user.medications
        #   end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :age)
    end

    
end



