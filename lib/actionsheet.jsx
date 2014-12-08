var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');

var Actionsheet = React.createClass({
  getInitialState: function () {
    return {active: false};
  },
  setActiveState: function (active) {
    this.setState({active: active});
  },
  render: function () {
    var children = React.Children.map(this.props.children, function (child, index) {
      var extraProps = {active: this.state.active};
      if (child.displayName === 'ActionsheetButton') {
        extraProps.setActiveState = this.setActiveState;
      }
      return cloneWithProps(child, extraProps);
    }.bind(this));
    return (
      <div className='action-sheet-container'>
        {children}
      </div>
    );
  }
});

module.exports = Actionsheet;