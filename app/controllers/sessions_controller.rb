class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    # POST /login
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {user: user, :chartData user.chartData} status: :created 
        else
            render json: { error: ["Invalid username or password"] }, status: :unprocessable_entity
        end
    end

    # DELETE /logout
    def destroy
        session.delete :user_id
        head :no_content
    end
    
end
