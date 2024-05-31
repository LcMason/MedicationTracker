class UserDashboardController < ApplicationController
  before_action :authorize_user

  def show
    @user = current_user
    # User dashboard logic
  end

  private

  def authorize_user
    render_unauthorized unless current_user&.user?
  end
end
