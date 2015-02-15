define(['react', 'react-router', 'components/header', 'components/footer'], function(React, Router, Header, Footer) {
  var RouteHandler;
  RouteHandler = Router.RouteHandler;
  return React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": "app"
      }, React.createElement(Header, null), React.createElement(RouteHandler, null), React.createElement(Footer, null));
    }
  });
});
