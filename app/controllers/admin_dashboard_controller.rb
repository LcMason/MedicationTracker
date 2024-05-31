class AdminDashboardController < ApplicationController
  before_action :authorize_admin

  def show
    @admin = current_user
    # Admin dashboard logic
  end

  private

  def authorize_admin
    render_unauthorized unless current_user&.admin?
  end
end
