var React = require('react');
var Highlight = require('../react-highlight');
var StaticNotification = require('./static');
var staticMD = require('./static.md');

var NotificationDocs = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Notification</h2>
        <h4 className='subheader'>
          This component allows you to create notifications or alerts to user
        </h4>
        <hr />

        <h3>Basic</h3>
        <div className='grid-block'>
          <div className='small-8 grid-content'>
            <Highlight code={staticMD} />
          </div>
          <div className='grid-content'>
            <StaticNotification />
          </div>
        </div>

      </div>
    );
  }
});

module.exports = NotificationDocs;  