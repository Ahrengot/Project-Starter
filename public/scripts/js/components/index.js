define(['react', 'underscore'], function(React, _) {
  return React.createClass({
    render: function() {
      return React.createElement("div", null, React.createElement("div", {
        "className": "page-header"
      }, React.createElement("h1", null, "Welcome")), React.createElement("p", null, "\"Amazeballzz\" doesn\'t even begin to describe the awfullness of this app... But it supports deeplinks!"));
    }
  });
});
