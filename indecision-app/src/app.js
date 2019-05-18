console.log('afsdfadsf');

const app = {
  title: 'dsafadsf',
  subtitle: 'fdasfsafasdf',
  options: ['One', 'Two']
};

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1> 
    {app && app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options && app.options.length ? 'fadsf' : 'fadsfsfd' }</p>
    <ol>
      <li>lol</li>
      <li>lol2</li>
    </ol>
  </div>
);

const user = {
  name: 'Karl',
  age: 31,
  location: 'Montreal'
};

const getLocation = (location) => {
  if (location) {
    return <p>Location: {location}</p>;
  }
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);