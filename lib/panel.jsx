var React = require('react');
var cx = require('react/lib/cx');
var PubSub = require('pubsub-js');

var Panel = React.createClass({
  getInitialState: function () {
    return {open: false};
  },
  getDefaultProps: function () {
    return {
      position: 'left'
    };
  },
  componentDidMount: function () {
    PubSub.subscribe(this.props.id, function (msg, data) {
      if (data === 'open') {
        this.setState({open: true});
      } else if (data === 'close') {
        this.setState({open: false});
      } else if (data === 'toggle') {
        this.setState({open: !this.state.open});
      }
    }.bind(this));
  },
  render: function() {
    var classes = {
      panel: true,
      'is-active': this.state.open,
    };
    classes['panel-' + this.props.position] = true;
    return (
      <div className={cx(classes)}>
          {this.props.children}
      </div>
    );
  },
});

module.exports = Panel;