import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }
  handleClick = (channel) => {
    this.props.selectChannel(channel);
    this.render();
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.selectedChannel ? 'active' : null}
        onClick={() => this.handleClick(channel)}
        role="presentation"
      >
        {channel}
      </li>
    );
  }

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>{this.props.channels.map(this.renderChannel)}</ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, fetchMessages },
    dispatch
  );
}

function mapReduxStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
