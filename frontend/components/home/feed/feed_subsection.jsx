import React from 'react';
import { connect } from 'react-redux';
import Video from './videos/video';

import { fetchUserChannel } from '../../../actions/channel_actions';

const msp = state => ({
  channelVideos: state.entities.userChannels,
});

const mdp = dispatch => ({
  fetchUserChannel: id => dispatch(fetchUserChannel(id)),
});

class FeedSubsection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserChannel(this.props.channel_id);
  }

  render() {
    if (this.props.channelVideos[this.props.channel_id] === undefined) {
      return null;
    }

    const channel_object = this.props.channelVideos[this.props.channel_id];
    const channel_name = channel_object.username;
    const channel_videos = channel_object.channel_videos.map(video => (
      <Video
        id={video.id}
        key={video.id}
        title={video.title}
        view_count={video.view_count}
        description={video.description}
        created_at={video.created_at}
        category={video.description}
        image_preview={video.thumbnail}
      />
    ));
    const first_five_videos = channel_videos.splice(0, 5);

    return (
      <div className="feed-sub-container">
        <div className="feed-title-header">
          <span>{channel_name}</span>
          <button className="subscribe-button">Subscribe 673K</button>
        </div>
        <div className="feed-sub-item-container-recommended">
          { first_five_videos }
        </div>
      </div>
    );
  }
}

export default connect(msp, mdp)(FeedSubsection);
