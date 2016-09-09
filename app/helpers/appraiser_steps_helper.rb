module AppraiserStepsHelper

  def get_profile_active_class 
    if params[:id] == "personal"
      return "active"
    end
  end

  def get_bulk_active_class
    if params[:id] == "bulk_coupan"
      return "active"
    end
  end
  def get_reset_active_class
    if params[:controller] == "registrations" && params[:action]== "edit"
      return "active"
    end
  end
  def get_preference_active_class
    if params[:id] == "preferences"
      return "active"
    end
  end
  def get_image_active_class
    if params[:id] == "avatar"
      return "active"
    end
  end
end
