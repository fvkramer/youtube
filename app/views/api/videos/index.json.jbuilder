@videos.each do |video|
  json.set! video.id do
    json.extract! video, :id, :title, :description, :category
    json.view_count video.view_count
    json.src url_for(video.video)
    json.image_preview url_for(video.preview_image)
  end
end