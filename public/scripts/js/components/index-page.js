define(['react'], function(React) {
  return React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": "container-fluid"
      }, React.createElement("div", {
        "className": "jumbotron"
      }, React.createElement("h1", null, "React project starter"), React.createElement("p", null, "Branched version of the plain project starter that\'ll give you a quick starting point for React.js apps"), React.createElement("p", null, React.createElement("em", null, "\u2014 To get started run these commands:")), React.createElement("ol", null, React.createElement("li", null, React.createElement("code", null, "$ npm install")), React.createElement("li", null, React.createElement("code", null, "$ bower install")), React.createElement("li", null, React.createElement("code", null, "$ gulp"))), React.createElement("p", null, "Then head to ", React.createElement("code", null, "coffee\x2Fapp-bootstrap.cjsx"), " to set up some routes and add your views, pages and components to the ", React.createElement("em", null, "coffee\x2Fcomponents"), " folder.")));
    }
  });
});
