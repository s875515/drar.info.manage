import React, {Component, PropTypes} from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

export default class ViewVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="關閉"
        secondary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton src={this.props.src} onClick={this.handleOpen}>詳細</RaisedButton>
        <Dialog
          title={this.props.text}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <iframe
          className="youtube-embed" src={`https://www.youtube.com/embed/${this.props.embed}`}
          frameBorder='0'></iframe>
        </Dialog>
      </div>
    );
  }
}

ViewVideo.propTypes = {
  embed: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
