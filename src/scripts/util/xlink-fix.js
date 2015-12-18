import DOMProperty from 'react/lib/DOMProperty';

// xlink:href is not a standardly-supported svg attribute, but you can tell
// React that it is ok.
DOMProperty.injection.injectDOMPropertyConfig({
  isCustomAttribute: function (attributeName) {
    return (attributeName === 'xlink:href');
  }
});