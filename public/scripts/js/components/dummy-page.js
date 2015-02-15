define(['react', 'underscore'], function(React, _) {
  return React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": "container-fluid"
      }, React.createElement("div", {
        "className": "page-header"
      }, React.createElement("h1", null, "Dummy page")), React.createElement("div", {
        "className": "media"
      }, React.createElement("div", {
        "className": "media-left"
      }, React.createElement("img", {
        "className": "media-object",
        "src": "http://placekitten.com/g/200/300",
        "width": "200",
        "height": "300"
      })), React.createElement("div", {
        "className": "media-body"
      }, React.createElement("h4", {
        "className": "media-heading"
      }, "\t\t\t\t\t\t\tLorem ipsum dolor sit amet"), React.createElement("p", null, "Consectetur adipisicing elit. Distinctio eum ipsum autem est. Odio laborum quibusdam quas assumenda voluptates, exercitationem iure in dolor similique tempora aut tempore neque, quisquam vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quam autem tenetur odio molestias quas aliquam quisquam."), React.createElement("p", null, "Corporis deleniti cumque facilis natus aut rerum fuga illo odit! Perspiciatis, aperiam, ipsa!"))));
    }
  });
});
