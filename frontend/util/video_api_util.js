//finish writing video ajax queries
export const fetchVideos = () => (
  $.ajax({
    method: "GET",
    url: "/api/videos",
  })
)

//need to get video with serach term query instead of id
export const fetchVideo = videoId => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/videos/${videoId}`
    })
  )
}

export const createVideo = video => (
  $.ajax({
    method: "POST",
    url: "/api/videos",
    data: { video }
  })
)

export const updateVideo = video => (
  $.ajax({
    method: "PATCH",
    url: "/api/videos",
    data: { video }
  })
)

//delete with id
export const deleteVideo = videoId => (
  $.ajax({
    method: "DELETE",
    url: `/api/videos/${videoId}`
  })
)
