const appRoot = document.getElementById('app');

let showDetails = false;

const toggleVisibility = () => {
  showDetails = !showDetails;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
      {showDetails && <p>Here are the details</p>}
    </div>
  );
  
  ReactDOM.render(template, appRoot);
};

renderApp();