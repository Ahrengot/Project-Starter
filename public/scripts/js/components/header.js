define(['react', 'react-router'], function(React, Router) {
  var Link;
  Link = Router.Link;
  return React.createClass({
    render: function() {
      return React.createElement("header", null, React.createElement("div", {
        "className": "container-fluid"
      }, React.createElement("nav", {
        "className": "navbar navbar-default"
      }, React.createElement("ul", {
        "className": "nav navbar-nav"
      }, React.createElement("li", null, React.createElement(Link, {
        "className": "header-link",
        "to": "/"
      }, "Index")), React.createElement("li", null, React.createElement(Link, {
        "className": "header-link",
        "to": "/dummy-page"
      }, "Dummy page"))))));
    }
  });
});
