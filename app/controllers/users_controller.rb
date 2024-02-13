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

   # def high_quantity
    #    user = User.find_by(id: params[:id])

   # end

    #all tracker objects that belong to a user of 1 with a quantity > 5.


        # GET /me 
        def show
            render json: @current_user
        end


    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :gender, :age, :race)
    end

    
end



