'use strict';

var appRoot = document.getElementById('app');

var showDetails = false;

var toggleVisibility = function toggleVisibility() {
  showDetails = !showDetails;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      showDetails ? 'Hide Details' : 'Show Details'
    ),
    showDetails && React.createElement(
      'p',
      null,
      'Here are the details'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
