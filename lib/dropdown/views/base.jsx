'use strict';

var React = require('react');

var Dropdown = React.createClass({
  componentDidMount: function() {
    $(this.getDOMNode()).foundation();
  },
  render: function(){
    return (
      <div>
        <a href="#" data-dropdown="drop1">Has Dropdown</a>
        <ul id="drop1" className="f-dropdown" data-dropdown-content>
          <li><a href="#">This is a link</a></li>
          <li><a href="#">This is another</a></li>
          <li><a href="#">Yet another</a></li>
        </ul>
      </div>
      );
  }
});

module.exports = Dropdown;
