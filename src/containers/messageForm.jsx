import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postMessage, fetchMessages } from '../actions/';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleUpdate = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.props.fetchMessages(this.props.selectedChannel);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          className="form-control"
          value={this.state.value}
          onChange={this.handleUpdate}
        />
        <button>Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { postMessage, fetchMessages },
    dispatch
  );
}

function mapReduxStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageForm);
