var React = require('react');
var Highlight = require('../react-highlight');
var basicMD = require('./basic.md');
var BasicTabs = require('./basic');

var TabsDocs = React.createClass({
  render: function () {
    return (
      <div>
      <h2>Tabs</h2>
      <h4 className='subheader'>
        Tabs are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.
      </h4>
      <hr />

      <h3>Basic</h3>
      <div className='grid-block'>
          <div className='grid-content'>
            <Highlight code={basicMD} />
          </div>
          <div className='grid-content'>
            <BasicTabs />
          </div>
        </div>
        <hr />
      </div>
    );
  }
});

module.exports = TabsDocs;