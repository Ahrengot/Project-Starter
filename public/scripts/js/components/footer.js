define(['react', 'underscore'], function(React, _) {
  return React.createClass({
    render: function() {
      return React.createElement("footer", {
        "className": "container-fluid"
      }, React.createElement("p", {
        "className": "text-center"
      }, "Here\'s a really neat footer component"));
    }
  });
});
