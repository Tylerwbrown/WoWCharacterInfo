module UrlHelper
  def character_profile_picture(thumbnail)
    base_render_url + thumbnail.sub!('avatar', 'main')
  end

  private
  def api_url(center_url)
    "https://us.api.battle.net/wow/" + center_url + "?locale=en_US&apikey=#{API[wow][key]}"
  end

  def base_render_url
    "https://render-us.worldofwarcraft.com/character/"
  end
end
