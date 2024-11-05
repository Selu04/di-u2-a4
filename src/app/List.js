import { people } from './data.js';
import { getImageUrl } from './utils.js';

function Component({ person }) {
  return (
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
}
export default function List() {
  const chemists = people.filter(person => person.profession === "químico").map(person =>
    <Component person={person} key={person.id}/>
  );
  const listItems = people.map(person =>
    <Component person={person} key={person.id}/>
  );
  return (
    <article>
      <h1>Químicos</h1>
      <ul>{chemists}</ul>
      <h1>Científicos</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
