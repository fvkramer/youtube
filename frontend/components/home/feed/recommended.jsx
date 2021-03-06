import React from 'react';
import { connect } from 'react-redux';
import Video from './videos/video';

import { fetchVideos } from '../../../actions/video_actions';

const msp = state => ({
  videos: state.entities.videos,
});

const mdp = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.videos;
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    const { videos } = this.props;
    let video_displays;
    if (videos.id === null) {
      return null;
    }
    video_displays = Object.values(videos).map(video => (
      <div className="display-video">
        <Video
          id={video.id}
          key={video.id}
          title={video.title}
          description={video.description}
          category={video.category}
          channel_title={video.channel_title}
          view_count={video.view_count}
          image_preview={video.image_preview}
        />
      </div>
    ));


    return (
      <div className="feed-sub-container-1">
        <span>Recommended</span>
        <div className="feed-sub-item-container-recommended">
          { video_displays }
        </div>
      </div>
    );
  }
}

export default connect(msp, mdp)(Recommended);
