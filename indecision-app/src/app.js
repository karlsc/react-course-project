const app = {
  title: 'Title',
  subtitle: 'Sub title',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const removeOptions = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const selectedOption = app.options[randomNumber];
  alert(selectedOption);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {app && app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options && app.options.length ? 'Options' : 'No Options' }</p>
      <button onClick={onMakeDecision} disabled={!app.options.length}>What should I do?</button>
      <button onClick={removeOptions}>Remove All</button>
      <ol>
        {
          app.options.map((item, index) => <li key={index}>{item}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
};

renderApp();