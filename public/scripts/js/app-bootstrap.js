define(['react', 'react-router', 'components/app', 'components/index-page', 'components/dummy-page'], function(React, Router, App, IndexPage, DummyPage) {
  var DefaultRoute, Route, routes;
  DefaultRoute = Router.DefaultRoute;
  Route = Router.Route;
  routes = React.createElement(Route, {
    "name": "app",
    "path": "/",
    "handler": App
  }, React.createElement(Route, {
    "name": "dummy-page",
    "path": "/dummy-page",
    "handler": DummyPage
  }), React.createElement(DefaultRoute, {
    "handler": IndexPage
  }));
  return Router.run(routes, function(Handler) {
    return React.render(React.createElement(Handler, null), document.body);
  });
});
